import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { SelectedFiles } from './SelectedFiles';
import { InputFileProps, NormalizedDocument } from './types';
import { getFileType } from './utils';
import { Select } from '../select/Select';
import { Button } from '../../button/Button';
import { Label } from '../../label/Label';

export type InputFileHandler = {
  /**
   *
   */
  reset: () => void;
};

export const InputFile = forwardRef(
  (
    {
      label,
      accept = 'image/png,image/jpg,image/jpeg,application/pdf',
      documentTypes,
      selectValue = null,
      disableSelect = false,
      defaultValue = [],
      onChange,
    }: InputFileProps,
    ref: Ref<InputFileHandler>,
  ) => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [selectedDocumentType, setDelectedDocumentType] = useState<
      string | null | undefined
    >(selectValue);
    const [selectedFiles, setSelectedFiles] = useState<NormalizedDocument[]>(
      () => {
        return defaultValue.map((file) => {
          return { ...file, isNew: file?.isNew || false };
        });
      },
    );

    const hanldeSelectChange = (value: string) => {
      setDelectedDocumentType(value);
    };

    const handleClick = () => {
      inputFileRef.current?.click();
    };

    const getDocumentLabel = () => {
      return documentTypes.find(
        (documentType) => documentType.value === selectedDocumentType,
      )?.label;
    };

    useEffect(() => {
      onChange(selectedFiles);
    }, [selectedFiles]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      buttonRef.current?.blur();
      if (!e.target.files) {
        return;
      }

      const file = e.target.files[0];
      let normalizedFile: NormalizedDocument;

      if (selectedDocumentType) {
        normalizedFile = {
          id: Date.now(),
          name: file.name,
          type: getFileType(file.type),
          documentLabel: getDocumentLabel(),
          documentType: selectedDocumentType,
          isNew: true,
          file: file,
          href: URL.createObjectURL(file),
        };
      }

      setSelectedFiles((prev: any[]) => {
        const newValue = [...prev, normalizedFile];
        // onChange(newValue);
        return newValue;
      });

      setDelectedDocumentType(null);
    };

    useImperativeHandle(ref, () => {
      return {
        reset: () => {
          setSelectedFiles([]);
        },
      };
    });

    return (
      <div>
        <input
          data-testid='uploader'
          ref={inputFileRef}
          multiple={false}
          type='file'
          className='invisible absolute h-0 w-0'
          onChange={handleFileChange}
          accept={accept}
        />
        <div>
          {label && <Label>{label}</Label>}
          <div className='flex w-full flex-col gap-2 gap-x-3 md:flex-row'>
            <Select
              items={documentTypes}
              value={selectedDocumentType}
              onChange={hanldeSelectChange}
              className='flex-1'
              disabled={disableSelect}
            />
            <Button
              ref={buttonRef}
              variant='secondary'
              iconRight='document-upload'
              className='w-full flex-1 md:w-fit'
              onClick={handleClick}
              disabled={selectedDocumentType === null}
            >
              Importer
            </Button>
          </div>
        </div>

        {selectedFiles.length > 0 && (
          <SelectedFiles
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          />
        )}
      </div>
    );
  },
);
