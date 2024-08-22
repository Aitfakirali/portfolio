import { Icon } from '../icon/Icon';
import { Image } from '../image/Image';
import { Link } from '../link/Link';
import { Text } from '../typography/Text';
import { imgProps } from '../../../types/image';
import { linkProps } from '../../../types/link';

/**
 *
 */
interface cardImageLinkProps {
  /**
   * The image of the card
   */
  image: imgProps;
  /**
   *  the title to inside of the card
   */
  title: string;
  /**
   *  desciption of the card
   */
  description: string;
  /**
   *  the link props for the card
   */
  link: linkProps;
  /**
   *  the label of the link
   */
  label?: string;
}

/**
 * Card image component
 */
export const CardImageLink = ({
  image,
  title,
  description,
  link,
  label = 'Découvrir',
}: cardImageLinkProps) => {
  return (
    <Link
      href={link.href ?? '#!'}
      className='flex items-start gap-4 rounded-lg border border-transparent bg-white p-4 shadow-md transition-shadow duration-200 hover:border-gray-200 hover:shadow-lg'
    >
      <div>
        <Image
          className='w-12'
          src={image?.src}
          width={image?.width as number}
          height={image?.height as number}
          alt={image?.alt ?? ''}
        />
      </div>
      <div className='space-y-1'>
        <Text as='h3' className='text-primary-700' variant='text-lg/Semibold'>
          {title}
        </Text>
        <Text className='text-gray-500' variant='text-base/Medium'>
          {description}
        </Text>
        <button className='text-gold-500 inline-flex items-center gap-2 py-2'>
          <Text variant='text-base/Semibold'>{label}</Text>
          <Icon id='arrow-right-1' width='16' height='16' />
        </button>
      </div>
    </Link>
  );
};
