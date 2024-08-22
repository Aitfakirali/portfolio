import { theme } from './theme';
/**
 * Props for the Select component.
 *
 * @interface SelectProps
 * @property {string} [errorMessage] - The error message to display.
 * @property {string} [name] - The name attribute of the select element.
 * @property {string} [label] - The label text for the select.
 * @property {string} [placeholder] - The placeholder text for the select.
 * @property {SelectItem[]} items - The array of items for the select.
 * @property {string} [value] - The selected value of the select.
 * @property {boolean} [disabled] - Indicates whether the select is disabled.
 * @property {boolean} [withError] - Indicates whether to show error styles for the select.
 * @property {boolean} [withNullValue] - Indicates whether to include a null value option.
 * @property {(value?: string) => void} onChange - The callback function invoked when the select value changes.
 * @property {keyof typeof theme} [variant] - The variant of the select.
 */
export interface SelectProps {
  errorMessage?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  items?: SelectItem[];
  value?: string | null;
  disabled?: boolean;
  hasError?: boolean;
  withNullValue?: boolean;
  onChange: (value: string) => void;
  variant?: keyof typeof theme;
  className?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  emptyLabel?: string;
}

/**
 * Represents an item in the Select component.
 *
 * @interface SelectItem
 * @property {string} [value] - The value of the item.
 * @property {string} [label] - The label text of the item.
 * @property {boolean} [unavailable] - Indicates whether the item is unavailable for selection.
 */

export interface SelectItem {
  value: string;
  label: string;
  unavailable?: boolean;
}

/**
 * Represents the props for the SelectForm component.
 *
 * @interface SelectFormProps
 * @property {string} [errorMessage] - The error message to display.
 * @property {string} name - The name of the select form.
 * @property {string} [label] - The label text for the select form.
 * @property {string} [placeholder] - The placeholder text for the select form.
 * @property {SelectItem[]} items - The list of items for the select form.
 * @property {SelectItem} [value] - The selected item for the select form.
 * @property {boolean} [disabled] - Indicates whether the select form is disabled.
 * @property {boolean} [withError] - Indicates whether the select form has an error state.
 * @property {boolean} [withNullValue] - Indicates whether to include a null value in the select form options.
 * @property {(value: SelectItem) => void} [onChange] - The callback function to handle the change event.
 */
export interface SelectFormProps {
  errorMessage?: string;
  name: string;
  label?: string;
  placeholder?: string;
  items: SelectItem[];
  value?: SelectItem;
  disabled?: boolean;
  withError?: boolean;
  withNullValue?: boolean;
  onChange?: (value: SelectItem) => void;
}
