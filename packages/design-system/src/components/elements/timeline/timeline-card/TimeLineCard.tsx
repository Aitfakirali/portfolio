import { ReactNode } from 'react';

import { TimeLineCardDetail } from './TimeLineCardDetails';
import { Avatar } from '../../avatar/Avatar';
import { Badge } from '../../badge/Badge';
import { badge as badgeTheme } from '../../badge/theme';
import { NormalizedDocument } from '../../form-elements/inputFile/types';
import { Icon } from '../../icon/Icon';
import { Image } from '../../image/Image';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils';

interface TimeLineCardProps {
  /**
   * step's title
   */
  title: string;
  /**
   * step's date
   */
  dateTraitement: string;
  /**
   * steps details
   */
  listInfos: {
    /**
     * detail libelle
     */
    libelle: string;
    /**
     *  detail value
     */
    value: string;
    /**
     *  detail's actions
     */
    actions?: string[];
    /**
     *  detail's files type
     */
    documents?: Array<NormalizedDocument>;
    /**
     *  actions widget's map
     */
    actionsMapping?: Record<string, ReactNode>;
    /**
     * details badge
     */
    tag?: string;
  }[];
  /**
   *  step's actions
   */
  actions?: Array<string>;
  /**
   *  actions widget's map
   */
  actionsMapping?: Record<string, ReactNode>;
  /**
   *  step's state
   */
  state: 'completed' | 'active' | 'disabled';
  /**
   *  is the step loading
   */
  isLoading?: boolean;
  /**
   *  is the step hidden
   */
  hidden?: boolean;
  /**
   *  the step user's info
   */
  userInfo?: {
    /**
     * user's display name
     */
    name: string;
    /**
     *  users's display id
     */
    id: string;
    /**
     *  user's image
     */
    avatar: string;
  };
  /**
   *  by default its a car, dimensions(w/h) 23/51
   */
  activeStepImage?: string;
  /**
   *  the badge next to the card's title it usually contains a date
   */
  badge?: {
    /**
     *  the badge's content
     */
    content: string;
    /**
     *  the badge's variant
     */
    variant?: keyof typeof badgeTheme.variants;
  };
}

const iconsClass =
  'absolute -left-[3px] top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full';

const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Julliet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

export const TimeLineCard = ({
  title,
  dateTraitement,
  listInfos,
  actions,
  actionsMapping,
  state,
  isLoading,
  hidden,
  userInfo,
  badge,
  activeStepImage = '/images/timeline-car.svg',
}: TimeLineCardProps) => {
  if (hidden) return <></>;

  return (
    <div className='text-primary-500 flex w-full items-center gap-5 pl-6 md:gap-9 md:pl-4'>
      <div
        className={vclsx(
          'hidden shrink-0 basis-20 flex-col text-center md:flex',
          state === 'disabled' && 'text-primary-300',
        )}
      >
        {state === 'disabled' || dateTraitement === '-' ? (
          <Text variant='text-2xl/Medium'>--</Text>
        ) : (
          <>
            <Text variant='text-2xl/Medium'>
              {dateTraitement?.split('/')[0]}
            </Text>
            <Text variant='text-base/Semibold'>
              {months[+dateTraitement?.split('/')[1] - 1]}
            </Text>
          </>
        )}
      </div>
      <div
        className={vclsx(
          'relative flex w-full flex-col-reverse justify-between gap-4 p-4 md:flex-row md:gap-11 md:p-9',
          "before:absolute before:-left-1.5 before:top-0 before:h-full before:w-1.5 before:bg-gray-300 before:content-['']",
          state === 'completed' && 'before:bg-primary-500',
          state === 'active' &&
            "after:bg-primary-500 after:absolute after:-left-1.5 after:top-0 after:h-1/2 after:w-1.5 after:content-['']",
        )}
      >
        {state === 'completed' && (
          <Icon
            id='check'
            className={vclsx('bg-success-600 p-1 text-white', iconsClass)}
          />
        )}

        {state === 'disabled' && (
          <span className={vclsx('bg-gray-300', iconsClass)}></span>
        )}

        {state === 'active' && activeStepImage && (
          <Image
            src={activeStepImage}
            width={23}
            height={51}
            alt='timeline-car'
            className='absolute -left-1 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'
          />
        )}

        <div className='flex flex-1 flex-col gap-2 md:w-9/12'>
          <div className='flex items-center gap-2'>
            {isLoading && <Icon id='loader' className='h-5 w-5 animate-spin' />}
            <Text
              variant='text-md/Semibold'
              className={vclsx(
                'text-primary-700',
                state === 'disabled' && 'text-gray-400',
              )}
            >
              {title}
            </Text>
            {badge?.content && state !== 'disabled' && (
              <Badge
                label={badge.content}
                variant={badge?.variant || 'success'}
              />
            )}
          </div>

          {state !== 'disabled' && (
            <div
              className={vclsx(
                'relative flex w-full flex-col gap-2 rounded-lg border border-gray-200 p-4',
                state === 'active' && 'border-primary-500 shadow-lg',
                state === 'completed' && 'border-gray-300',
              )}
            >
              {dateTraitement && dateTraitement !== '-' && (
                <div className='block md:hidden'>
                  <Badge
                    label={`${dateTraitement?.split('/')[0]} ${
                      months[+dateTraitement?.split('/')[1] - 1]
                    } ${dateTraitement?.split('/')[2]}`}
                  />
                </div>
              )}
              {listInfos?.map((detail, index) => (
                <TimeLineCardDetail
                  key={index}
                  {...detail}
                  actionsMapping={actionsMapping}
                />
              ))}
              {!!actions?.length &&
                actionsMapping &&
                actions.map((action) => actionsMapping[action])}
            </div>
          )}
        </div>

        <div className='hidden justify-end gap-2 md:flex md:w-3/12'>
          {userInfo && (
            <>
              <div>
                <Text
                  variant='text-md/Semibold'
                  className='whitespace-nowrap text-right text-gray-500'
                >
                  {userInfo.name}
                </Text>
                <Text
                  variant='text-sm/Regular'
                  className='text-right text-gray-500'
                >
                  {userInfo.id}
                </Text>
              </div>
              <Avatar src={userInfo.avatar} size='large' alt='user logo' />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
