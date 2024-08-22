import { Badge } from '../badge/Badge';
import { Button } from '../button/Button';
import { SelectedFile } from '../form-elements/inputFile/SelectedFiles';
import { Document } from '../form-elements/inputFile/types';
import { Text } from '../typography/Text';
import { TitleWithIcon } from '../typography/TitleWithIcon';

type elements = {
  /**
   *
   */
  label: string;
  /**
   *
   */
  value: string;
};

export interface CardRecapProps {
  /**
   * Card title
   */
  cardTitle: string;
  /**
   * Card Icon
   */
  cardTitleIcon: string;
  /**
   * Card Subtitle
   */
  cardSubtitle?: string;
  /**
   * Badge text if exist
   */
  badge?: string;
  /**
   * Card element recap
   */
  cardElements: elements[];
  /**
   *
   */
  files?: Document[];
  /**
   *
   */
  isModifiable?: boolean;
  /**
   *
   * @returns
   */
  onClick?: () => void;
}
export const CardRecap = ({
  cardTitle,
  cardTitleIcon,
  cardSubtitle,
  badge,
  cardElements,
  files,
  isModifiable = true,
  onClick,
}: CardRecapProps) => {
  return (
    <div className='rounded-lg border border-gray-200'>
      <div className='flex items-center justify-between border-b border-gray-200 p-4'>
        <TitleWithIcon
          variant='text-lg/Semibold'
          iconId={cardTitleIcon}
          className='text-primary-700'
          appendIcon
          as='h4'
        >
          {cardTitle}
        </TitleWithIcon>
        {isModifiable && (
          <Button variant='secondary' icon='edit-2' onClick={onClick}></Button>
        )}
      </div>
      <div className='p-4'>
        {cardSubtitle && (
          <div className='flex gap-x-2'>
            <Text
              as='h5'
              variant='text-md/Semibold'
              className='text-primary-500'
            >
              {cardSubtitle}
            </Text>
            {badge && <Badge variant='primary' label={badge} />}
          </div>
        )}
        <div className='mt-4 flex flex-col gap-y-4'>
          {cardElements.map(({ label, value }, index) => {
            return (
              <dl key={index} className='flex justify-between'>
                <Text as='dt' className='text-gray-500'>
                  {label}
                </Text>
                <Text as='dd' className='text-primary-700'>
                  {value}
                </Text>
              </dl>
            );
          })}
        </div>
        <div className='mt-6 flex flex-col gap-y-2'>
          {files &&
            files.map((file, index) => {
              return <SelectedFile key={index} {...file} isNew={false} />;
            })}
        </div>
      </div>
    </div>
  );
};
