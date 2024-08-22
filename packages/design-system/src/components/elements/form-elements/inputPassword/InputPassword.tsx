import { forwardRef, useState } from 'react';

import { Input, InputProps } from '../input/Input';
import { Icon } from '../../icon/Icon';

type InputType = 'text' | 'password';

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [inputType, setInputType] = useState<InputType>('password');
    const handleClick = () => {
      setInputType((prev) => {
        if (prev === 'text') return 'password';
        return 'text';
      });
    };
    return (
      <Input
        ref={ref}
        {...props}
        suffix={
          <div role='button' className='inline' onClick={handleClick}>
            {inputType === 'text' ? (
              <Icon id='eye-slash' className='h-5 w-5' />
            ) : (
              <Icon id='eye' className='h-5 w-5' />
            )}
          </div>
        }
        type={inputType}
      />
    );
  },
);
