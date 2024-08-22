import { Dispatch, SetStateAction } from 'react';

import { theme } from './theme';
import { SelectItem } from '../select/types';

export type Document = {
  name: string;
  type: 'document' | 'image';
  documentType: string;
  file: string;
  isNew?: boolean;
};

export type NormalizedDocument = {
  id?: number;
  name: string;
  type: 'document' | 'image';
  documentType: string;
  isNew: boolean;
  file: Blob | string;
  documentLabel?: string;
  href?: string;
};

export interface InputFileProps {
  /**
   * Label of the element
   */
  label?: string;
  /**
   * Type of files to be accepted
   */
  accept?: string;
  /**
   * The options that will define the nature of the document
   */
  documentTypes: SelectItem[];
  /**
   * Default files to show to the user
   */
  defaultValue?: Document[];
  /**
   *
   * @param value
   * @returns
   */
  onChange: <TData>(value: TData[]) => void;
  /**
   * Select's default value
   */
  selectValue?: string | null;
  /**
   * Should the select be disabled
   */
  disableSelect?: boolean;
}

export interface SelectedFilesProps {
  selectedFiles: NormalizedDocument[];
  setSelectedFiles: Dispatch<SetStateAction<NormalizedDocument[]>>;
}

export interface SelectedFileProps {
  variant?: keyof typeof theme;
  id?: number;
  name: string;
  type: 'image' | 'document';
  documentType: string;
  isNew: boolean;
  onDelete?: (id: number) => void;
  file: Blob | string;
  documentLabel?: string | undefined;
  href?: string;
}
