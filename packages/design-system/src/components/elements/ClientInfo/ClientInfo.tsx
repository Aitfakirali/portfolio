import React from 'react';

import { themeClientCard } from './theme';
import { CardObj, ItemBlock } from './types';
import { Icon } from '../icon/Icon';
import { Popup } from '../popup/Popup';
import { Text } from '../typography/Text';

/**
 * Propriétés de la composante ClientInfo.
 *
 * @interface
 * @property {boolean} showLayer - Indique si le layer est affiché ou non.
 * @property {function} setShowLayer - Fonction de mise à jour de la propriété showLayer.
 * @property {CardObj[]} cardObjects - Les objets de carte à afficher.
 * @property {string} [variant] - La variante du thème à appliquer (optionnelle).
 */
export interface ClientInfoProp {
  /**
   *
   */
  showLayer: boolean;
  /**
   *
   */
  setShowLayer: (value: boolean) => void;
  /**
   *
   */
  cardObjects: CardObj[];
  /**
   *
   */
  variant?: keyof typeof themeClientCard;
}
/**
 * Propriétés de la composante Element.
 *
 * @interface
 * @property {ItemBlock} item - Le bloc d'éléments à afficher.
 * @property {string} [variant] - La variante du thème à appliquer (optionnelle).
 */
interface ElementProps {
  /**
   * Le bloc d'éléments à afficher.
   */
  item: ItemBlock;
  /**
   * La variante du thème à appliquer (optionnelle).
   */
  variant?: keyof typeof themeClientCard;
}

/**
 * Propriétés de la composante ClientCard.
 *
 * @interface
 * @property {CardObj} element - L'objet de carte à afficher.
 * @property {string} [variant] - La variante du thème à appliquer (optionnelle).
 */
interface ClientCardProps {
  /**
   * L'objet de carte à afficher.
   */
  element: CardObj;
  /**
   * La variante du thème à appliquer (optionnelle).
   */
  variant?: keyof typeof themeClientCard;
}
// Franchise : 5% Capital : 10.0000 MAD
const Element: React.FC<ElementProps> = ({ item, variant = 'default' }) => {
  return (
    <>
      <div className={themeClientCard[variant].element.container}>
        {item?.title && (
          <Text
            variant='text-base/Bold'
            className={themeClientCard[variant].element.title}
          >
            {item?.title}
          </Text>
        )}
        {item?.elements.map((card) => (
          <>
            <div className={themeClientCard[variant].element.block}>
              <Icon
                id={card?.title?.idIcone}
                width='14'
                height='14'
                className={themeClientCard[variant].element.icone}
              />
              <div className='flex flex-col'>
                <Text
                  variant='text-base/Regular'
                  className={themeClientCard[variant].element.miniTitle}
                >
                  {card.title.title}
                </Text>
                {card.elements.map((ifo) => (
                  <>
                    <Text
                      variant='text-base/Semibold'
                      className={themeClientCard[variant].element.item}
                    >
                      {ifo.label || '--'}
                      {ifo.description && ' : ' + ifo.description}
                    </Text>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export const ClientInfo: React.FC<ClientInfoProp> = ({
  showLayer,
  setShowLayer,
  cardObjects,
  variant = 'default',
}) => (
  <Popup
    isShown={showLayer}
    variant='modal'
    close={() => {
      setShowLayer(false);
    }}
  >
    <div className={themeClientCard[variant].dialog.container}>
      <div className='flex justify-end pb-4'>
        <Icon
          id='close'
          className='text-primary-500 h-6 w-6 cursor-pointer hover:opacity-50'
          onClick={() => {
            setShowLayer(false);
          }}
        />
      </div>
      <div className={themeClientCard[variant].dialog.card}>
        {cardObjects?.map((card) => (
          <ClientCard key={card.title.title} element={card} variant={variant} />
        ))}
      </div>
    </div>
  </Popup>
);

const ClientCard: React.FC<ClientCardProps> = ({
  element,
  variant = 'default',
}) => {
  return (
    <div className={themeClientCard[variant].card.container}>
      <div className={themeClientCard[variant].card.header}>
        <div className={themeClientCard[variant].card.title}>
          <div>
            <Icon
              id={element?.title?.idIcone}
              className={themeClientCard[variant].card.iconeTitle}
            />
          </div>
          <div>
            {' '}
            <Text variant='text-base/Medium' as='div'>
              {element?.title?.title}
            </Text>
          </div>
        </div>
      </div>
      <div className={themeClientCard[variant].card.body}>
        {element?.itemBlocks?.map((itemBlock) => (
          <Element key={itemBlock?.title} item={itemBlock} />
        ))}
      </div>
    </div>
  );
};
