import { stepsTheme } from './theme';
import { Step } from './types';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

/**
 * Steps props.
 */
interface StepsProps {
  /**
   * The variant to use.
   */
  variant?: keyof typeof stepsTheme;
  /**
   * The steps to display.
   */
  steps: Step[];
  /**
   * The active step's ID.
   */
  active?: number;
  /**
   * The function to call when a step is clicked.
   */
  onClick?: (index: number) => void;
}

/**
 * Steps component.
 */
export const Steps = ({
  variant = 'default',
  steps,
  active = 0,
  onClick,
}: StepsProps) => {
  return (
    <div>
      <div className='relative flex items-center gap-3 border-y border-gray-200 p-4 text-gray-500 md:hidden'>
        <ProgressCircle
          backgroundColor='#D9E6FF'
          color='#1E65EB'
          progress={(active + 1) / steps.length}
          content={`${active + 1}/${steps.length}`}
        />
        <div>
          <Text variant='text-base/Regular'>
            Étape {active + 1} de {steps.length}
          </Text>
          <Text variant='text-md/Semibold'>{steps[active]?.title}</Text>
          <Text variant='text-base/Regular'>{steps[active]?.subtitle}</Text>
        </div>
      </div>
      <div
        className={vclsx(stepsTheme[variant].wrapper, 'hidden md:flex')}
        data-testid='stepper'
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className={vclsx(
              stepsTheme[variant].step,
              active > index && stepsTheme[variant].previous,
              active === index && stepsTheme[variant].active,
            )}
            onClick={() => onClick && onClick(index)}
          >
            <Text
              variant={active === index ? 'text-lg/Semibold' : 'text-md/Medium'}
            >
              {`${index + 1}. ${step.title}`}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProgressCircleType {
  /**
   *
   */
  backgroundColor: string;
  /**
   *
   */
  color: string;
  /**
   *
   */
  progress: number;
  /**
   *
   */
  content: string;
}

const ProgressCircle = ({
  backgroundColor,
  color,
  progress,
  content,
}: ProgressCircleType) => {
  const offset = (progress - 1) * 201;

  return (
    <div className='relative flex h-[70px] w-[70px] items-center justify-center'>
      <svg className='h-full w-full'>
        <circle
          stroke={backgroundColor}
          fill='none'
          strokeWidth='4'
          cx='35'
          cy='35'
          r='32'
        />
        <circle
          className='origin-[35px_35px] -rotate-90 transition-all duration-300 ease-in-out'
          fill='none'
          strokeWidth='4'
          strokeLinecap='round'
          stroke={progress > 0 ? color : backgroundColor}
          strokeDasharray='201'
          strokeDashoffset={offset}
          cx='35'
          cy='35'
          r='32'
        />
      </svg>
      {content && (
        <Text variant='text-md/Semibold' className='text-primary-600 absolute'>
          {content}
        </Text>
      )}
    </div>
  );
};
