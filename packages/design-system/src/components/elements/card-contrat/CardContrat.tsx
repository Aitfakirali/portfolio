import { theme } from './theme';
import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';

interface CardContratItem {
  /**
   *
   */
  label: string;
  /**
   *
   */
  date: string;
  /**
   *
   */
  type?: string;
}

interface CardContratProps {
  /**
   *
   */
  variant?: keyof typeof theme;

  /**
   *
   */
  nom: string;
  /**
   *
   */
  numero?: string;

  /**
   *
   */
  elements?: CardContratItem[];
}

export const CardContrat = ({
  variant = 'default',
  nom,
  numero,
  elements,
}: CardContratProps) => {
  return (
    <div className={theme[variant].container}>
      <CardInfo nom={nom} numero={numero} />
      <div className='mt-2 space-y-2'>
        {elements?.map((element) => (
          <div
            key={element.label}
            className='flex items-center justify-between'
          >
            <div>
              <Text className='text-primary-500'>{element.label}</Text>
              <Text className='text-gray-600'>{element.date}</Text>
            </div>
            <Text className='text-gray-600'>{element.type}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

const CardInfo = ({
  nom,
  numero,
}: {
  /**
   *
   */
  nom: string;
  /**
   *
   */
  numero?: string;
}) => {
  return (
    <div className='rounded-md bg-white p-3'>
      <div className='flex gap-2 text-gray-800'>
        <Icon id='profile' className='h-5 w-5' />
        <Text>{nom}</Text>
      </div>
      {numero && (
        <>
          <Text className='mb-1 mt-2 text-gray-700' variant='text-sm/Regular'>
            Numéro d’affiliation
          </Text>
          <Text className='text-gray-700' variant='text-sm/Regular'>
            {numero}
          </Text>
        </>
      )}
    </div>
  );
};
