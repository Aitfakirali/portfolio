import { DatePicker } from '../form-elements/datePicker/DatePicker';
import { Input } from '../form-elements/input/Input';
import { Select } from '../form-elements/select/Select';
import { Heading } from '../Heading/Heading';
import { Text } from '../typography/Text';

const items = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
];

export const ConstatClientInfo = () => {
  return (
    <div className='mb-6'>
      <Heading className='mb-6'>
        Veuillez saisir les informations de la partie adverse
      </Heading>
      <div className='grid grid-cols-2 gap-16 lg:gap-40'>
        <Client />
        <Client />
      </div>
    </div>
  );
};

export const Client = () => {
  const handleChange = () => {
    return {};
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      <div>
        <DatePicker
          label='Date et heure de l’accident'
          value={new Date('2023/02/03')}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input label='Lieu' value='Rabat' />
      </div>
      <div>
        <Select
          label='Dégâts matériels'
          value='1'
          items={items}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input label='N° de téléphone ' value='06 61 94 58 87' />
      </div>

      <Text className='col-span-2'>
        Témoins (s’il s’agit de passagers d’un véhicule, préciser duquel) nom et
        adresse :
      </Text>
      <div>
        <Input label='Nom' value='Hamdan' />
      </div>
      <div>
        <Input label='Adresse' value='Av hassania lorem 124' />
      </div>
    </div>
  );
};
