import { Checkbox } from '../form-elements/checkbox/Checkbox';
import { Text } from '../typography/Text';

export interface ConstatCheckboxLineProps {
  /**
   *
   */
  number: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  name: string;
  /**
   *
   */
  checkedA: boolean;
  /**
   *
   */
  valueA: string;
  /**
   *
   */
  checkedB: boolean;
  /**
   *
   */
  valueB: string;
  /**
   *
   */
  handleChange: (name: string, value: string) => void;
  /**
   *
   */
  hrExist?: boolean;
}

export const ConstatCheckboxLine = ({
  number,
  title,
  name,
  checkedA,
  valueA,
  checkedB,
  valueB,
  handleChange,
  hrExist = false,
}: ConstatCheckboxLineProps) => {
  const handleCheckboxAChange = () => {
    handleChange(name, valueA);
  };

  const handleCheckboxBChange = () => {
    handleChange(name, valueB);
  };

  return (
    <>
      <div className='flex justify-between gap-4'>
        <div className='flex items-center gap-4'>
          <span className='bg-primary-50 text-primary-500 inline-flex h-[21px] w-[21px] items-center justify-center rounded-[4px] text-base font-semibold leading-5'>
            {number}
          </span>
          <Checkbox
            onChange={handleCheckboxAChange}
            name={name}
            checked={checkedA}
            value={valueA}
          />
        </div>
        <Text className='w-full'>{title}</Text>
        <div className='flex items-center gap-4'>
          <Checkbox
            onChange={handleCheckboxBChange}
            name={name}
            checked={checkedB}
            value={valueB}
          />
          <span className='bg-primary-50 text-primary-500 inline-flex h-[21px] w-[21px] items-center justify-center rounded-[4px] text-base font-semibold leading-5'>
            {number}
          </span>
        </div>
      </div>
      {hrExist && <hr className='my-2' />}
    </>
  );
};
