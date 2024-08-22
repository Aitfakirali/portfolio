import React, { MouseEvent } from 'react';

import { theme } from './theme';
import { Button } from '../button/Button';
import { Image } from '../image/Image';
import { Text } from '../typography/Text';

type ReclamationCardProps = {
  /**
   * the title of the card
   */
  title: string;
  /**
   * the description of the card
   */
  description: string;
  /**
   *	overrirde the button label
   */
  buttonLabel?: string;
  /**
   *	change the variant of the card
   */
  variant?: keyof typeof theme;

  /**
   *	name of the icon
   */
  icon?: string;
  /**
   * button click handler
   */
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

export const ReclamationCard: React.FC<ReclamationCardProps> = ({
  title,
  description,
  buttonLabel = 'Réclamer',
  variant = 'neutre',
  icon,
  onClick,
}) => {
  return (
    <div className={theme[variant].card}>
      <Text variant='text-md/Medium'>{title}</Text>
      <Text variant='text-base/Light'>{description}</Text>

      <div className={theme[variant].section}>
        <Button
          onClick={onClick}
          iconRight={icon}
          variant={theme[variant].buttonVariant}
        >
          {buttonLabel}
        </Button>
        <Image
          src='/reclamation.svg'
          alt='reclamation'
          width={59}
          height={59}
        />
      </div>
    </div>
  );
};
