import { Text } from '../typography/Text';

export interface CardReleveProps {
  /**
   *
   */
  key?: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  number?: string;
  /**
   *
   */
  description: string;
}

export const CardReleve = ({ title, number, description }: CardReleveProps) => {
  return (
    <div className='rounded-lg border border-[rgba(168,_188,_197,_0.4)] p-2'>
      <div className='rounded-lg bg-[#3F73D3] px-[10px] py-1 text-center text-white'>
        <p className='text-[18px] font-semibold leading-[21px]'>{title}</p>
      </div>
      <div className='flex items-center gap-3 pt-2'>
        <span className='height-[30px] inline-flex w-[30px] items-center justify-center rounded-lg bg-[#F5F7F8]'>
          {number}
        </span>
        <Text>{description}</Text>
      </div>
    </div>
  );
};
