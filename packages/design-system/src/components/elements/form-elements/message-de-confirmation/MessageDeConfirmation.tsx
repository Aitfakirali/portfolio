import copy from 'copy-to-clipboard';
import { ReactNode, useState } from 'react';

import { theme } from './theme';
import { Input } from '../input/Input';
import { Button } from '../../button/Button';
import { Icon } from '../../icon/Icon';
import { Image } from '../../image/Image';
import { Notification } from '../../notifications/Notification';
import { Text } from '../../typography/Text';
import { linkProps } from '../../../../types/link';
import { vclsx } from '../../../../utils';

interface MessageDeConfirmationProps {
  /**
   *
   */
  image: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  description: string | ReactNode;
  /**
   *
   */
  link?: linkProps;
  /**
   *
   */
  label?: string;
  /**
   *
   */
  inputLabel?: string;
  /**
   *
   */
  variant?: keyof typeof theme;
  /**
   *
   */
  numeroDeclaration?: string;
  /**
   * (Optionnel) Libellé du deuxième bouton.
   */
  secondButtonLabel?: string;
  /**
   * (Optionnel) id icone du deuxième bouton.
   */
  secondButtonIconeId?: string;
  /**
   * (Optionnel) exportPdf pour afficher le buton exportpdf
   */
  exportPdf?: boolean;
  /**
   *
   */
  nextUrl?: string;
}

export const MessageDeConfirmation = ({
  image,
  title,
  description,
  link,
  label = 'Suivre le sinistre',
  secondButtonLabel = 'Exporter en PDF',
  secondButtonIconeId = 'document-download',
  exportPdf = true,
  inputLabel = 'Numéro de déclaration',
  variant = 'default',
  numeroDeclaration = '1234556',
  nextUrl,
}: MessageDeConfirmationProps) => {
  const [copied] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className={vclsx(theme[variant].wrapper.base)}>
      {showNotification && (
        <Notification
          className='fixed right-4 top-20'
          variant='success'
          message={`copié '${numeroDeclaration}' dans le presse-papier`}
        />
      )}
      <div className={theme[variant].imageWrapper}>
        <Image
          className={theme[variant].imageStyle}
          src={image}
          width={124}
          height={124}
          alt=''
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Text
          as='h3'
          className='text-primary-700 text-center'
          variant='text-lg/Semibold'
        >
          {title}
        </Text>
        {typeof description === 'string' ? (
          <Text
            as='p'
            className='pb-3 text-center text-gray-600'
            variant='text-base/Regular'
          >
            {description}
          </Text>
        ) : (
          description
        )}

        <div className={theme[variant].inputWrapper}>
          <Text
            as='h4'
            className='text-primary-800 mb-1 text-left'
            variant='text-sm/Medium'
          >
            {inputLabel}
          </Text>
          <Input
            variant='default'
            value={numeroDeclaration}
            data-testid='declaration_number_input'
            disabled={true}
            suffix={
              <Icon
                id='document-copy'
                className={theme[variant].icon}
                onClick={() => {
                  setShowNotification(true);
                  copy(numeroDeclaration);
                  setTimeout(() => {
                    setShowNotification(false);
                  }, 3000);
                }}
              />
            }
          />
          {copied}
        </div>
        <div className={theme[variant].buttonWrapper}>
          {exportPdf && (
            <Button
              variant='secondary'
              className={theme[variant].buttonStyle}
              iconRight={secondButtonIconeId}
              href={
                nextUrl + `/api/download/getDeclaration/` + numeroDeclaration
              }
            >
              <Text variant='text-base/Semibold'>{secondButtonLabel}</Text>
            </Button>
          )}
          <Button
            variant='primary'
            href={link?.href}
            className={theme[variant].buttonStyle}
          >
            <Text variant='text-base/Semibold'>{label}</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};
