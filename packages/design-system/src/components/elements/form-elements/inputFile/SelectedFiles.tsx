import { Dispatch, SetStateAction } from 'react';

import { theme } from './theme';
import { NormalizedDocument, SelectedFileProps } from './types';
import { Badge } from '../../badge/Badge';
import { Button } from '../../button/Button';
import { Icon } from '../../icon/Icon';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils/vclsx';

interface SelectedFilesProps {
  /**
   *
   */
  variant?: keyof typeof theme;
  /**
   *
   */
  selectedFiles: NormalizedDocument[];
  /**
   *
   */
  setSelectedFiles: Dispatch<SetStateAction<NormalizedDocument[]>>;
}

export const SelectedFiles = ({
  variant = 'default',
  selectedFiles,
  setSelectedFiles,
}: SelectedFilesProps) => {
  const handleDelete = (id: number) => {
    setSelectedFiles((prev: NormalizedDocument[]) => {
      return prev.filter((selectedItem: NormalizedDocument) => {
        return selectedItem.id !== id;
      });
    });
  };
  return (
    <div className={theme[variant].selectedElements}>
      {selectedFiles.map((selectedFile: NormalizedDocument, index) => {
        return (
          <SelectedFile
            variant={variant}
            key={index}
            {...selectedFile}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export const SelectedFile = ({
  variant = 'default',
  id,
  name,
  type,
  documentLabel,
  isNew,
  file,
  onDelete,
  href,
}: SelectedFileProps) => {
  const handlePreview = () => {
    if (href && file) {
      window.open(href, '_blank');
    }
  };

  const handleDelete = () => {
    id && isNew && onDelete && onDelete(id);
  };
  return (
    <div
      className={vclsx(
        theme[variant].selectedElement.base,
        isNew
          ? theme[variant].selectedElement.state.new
          : theme[variant].selectedElement.state.default,
      )}
    >
      <div className={theme[variant].selectedElement.content.wrapper}>
        <div className={theme[variant].selectedElement.content.type.wrapper}>
          {type === 'document' ? (
            <Icon
              id='document-text'
              className={theme[variant].selectedElement.content.type.icon}
            />
          ) : (
            <Icon
              id='gallery'
              className={theme[variant].selectedElement.content.type.icon}
            />
          )}
        </div>
        <Text
          variant='text-base/Medium'
          className={theme[variant].selectedElement.content.name}
        >
          <span title={name}>
            {name.length > 30 ? name.substring(0, 30) + '...' : name}
          </span>
        </Text>
        {documentLabel && (
          <Badge variant='primary' size='md' label={documentLabel} />
        )}
      </div>
      <div className={theme[variant].selectedElement.actions.wrapper}>
        <Button
          data-testid='preview-button'
          variant='secondary'
          onClick={handlePreview}
          className='p-2'
        >
          <Icon
            id='eye'
            className={theme[variant].selectedElement.actions.icons}
          />
        </Button>
        {isNew && (
          <Button
            data-testid='delete-button'
            variant='outline'
            className={theme[variant].selectedElement.actions.deleteButton}
            onClick={handleDelete}
          >
            <Icon id='trash' className='h-3.5 w-3.5' />
          </Button>
        )}
      </div>
    </div>
  );
};
