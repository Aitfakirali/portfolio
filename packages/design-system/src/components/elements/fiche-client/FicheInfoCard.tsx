import React from 'react';

import { ficheinfotheme } from './theme';
import { Button } from '../button/Button';
import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';
/**
 * Represents an information card.
 */
export interface Informationcard {
  /**
   * The title of the information card.
   */
  titre: string;
  /**
   * The description of the information card.
   */
  description: string;
}
/**
 * Props for the Ficheinfocard component.
 */
export interface FicheinfocardProps {
  /**
   * The ID of the icon.
   */
  iconeId: string;
  /**
   * The content of the information card.
   */
  content?: Informationcard[];
  /**
   * The text for the button.
   */
  buttonLabel?: string;
  /**
   * The function to be called when the button is clicked.
   */
  onclick?: () => void;
  /**
   * The ID of the button icon.
   */
  iconRight?: string;

  /**
   *
   */
  variant?: keyof typeof ficheinfotheme;
}
export const FicheInfoCard: React.FC<FicheinfocardProps> = ({
  content,
  onclick,
  iconRight,
  buttonLabel,
  iconeId,
  variant = 'default',
}) => {
  return (
    <>
      <div className={ficheinfotheme[variant]?.wrapper}>
        <div>
          <Icon
            id={iconeId}
            height={24}
            width={24}
            className={ficheinfotheme[variant]?.icon?.color}
          />
        </div>
        <div className={ficheinfotheme[variant]?.content?.wrapper}>
          {content &&
            content?.map((item) => (
              <>
                <div className={ficheinfotheme[variant]?.content?.element}>
                  <Text
                    variant='text-base/Medium'
                    className={ficheinfotheme[variant]?.content?.titre}
                  >
                    {item?.titre}
                  </Text>
                  <Text
                    variant='text-base/Medium'
                    className={ficheinfotheme[variant]?.content?.description}
                  >
                    {item?.description}
                  </Text>
                </div>
              </>
            ))}
        </div>
        <div className={ficheinfotheme[variant]?.footer}>
          <Button size='medium' iconRight={iconRight} onClick={onclick}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </>
  );
};
