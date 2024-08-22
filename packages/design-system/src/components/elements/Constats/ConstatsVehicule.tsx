import { DatePicker } from '../form-elements/datePicker/DatePicker';
import { Input } from '../form-elements/input/Input';
import { Select } from '../form-elements/select/Select';
import { Textarea } from '../form-elements/textarea/Textarea';
import { Text } from '../typography/Text';
//import imgAccident from "./statics/constat-accident.png"

const permisList = [
  {
    label: 'A',
    value: 'A',
  },
  {
    label: 'B',
    value: 'B',
  },
  {
    label: 'C',
    value: 'C',
  },
];

const listVille = [
  {
    label: 'Agadir',
    value: 'agadir',
  },
  {
    label: 'Salé',
    value: 'sale',
  },
  {
    label: 'Rabat',
    value: 'rabat',
  },
];

export interface ConstatsVehiculeProps {
  /**
   *
   */
  title: string;
  /**
   *
   */
}

const handleChangePeriList = () => {
  return {};
};

const handleDelivedate = () => {
  return {};
};

export const ConstatsVehicule = ({ title }: ConstatsVehiculeProps) => {
  return (
    <div className='section-vehicule min-w-[300px]'>
      <div className='mb-6 bg-[#CCE9FF] p-[10px]'>
        <h3 className='text-center text-lg font-semibold leading-[30px] text-[#234585]'>
          {title}
        </h3>
      </div>

      <div className='flex flex-col gap-3'>
        <Input label='Véhicule' type='text' value='Pick Up' />
        <Input label='Marque, Type' type='text' value='HAFEI' />
        <Input
          label='N° d’immatriculation ( ou n° de moteur)'
          type='text'
          value='1283-A-23'
        />
        <Input label='Venant de ' type='text' value='AV MY RACHID' />
        <Input label='Allant vers' type='text' value='AV MY RACHID' />

        <hr />

        <p className='text-sm font-normal leading-4'>
          <span className='text-[16px] font-semibold leading-6'>Assuré </span>
          Souscripteur (voir attestation d’assure)
        </p>

        <Input label='Nom' type='text' value='Amine' />
        <Input label='Prénom' type='text' value='Hamdan' />
        <Input label='Adresse' type='text' value='Rabat' />
        <Input
          label="Compagnie d'assurance"
          type='text'
          value='RMA assurance'
        />
        <Input label='Numéro de police' type='text' value='1029330442423' />
        <Input
          label='N° de la carte vert (pour les étrangers)'
          type='text'
          value='T293459'
        />

        <p className='text-sm font-normal leading-4'>
          <span className='text-[16px] font-semibold leading-6'>
            Conducteur
          </span>{' '}
          Souscripteur (voir attestation d’assure)
        </p>

        <Input label='Nom' type='text' value='Mouad' />
        <Input label='Prénom' type='text' value='Hamdan' />
        <Input label='Adresse' type='text' value='Rabat' />

        <Select
          items={permisList}
          value='B'
          label='Permit de conduit N°50/23345'
          onChange={handleChangePeriList}
        />
        <DatePicker
          label='Délivré le'
          value={new Date('05/09/2023')}
          onChange={handleDelivedate}
        />

        <Select
          label='Par la préfecture de'
          value='sale'
          items={listVille}
          onChange={handleDelivedate}
        />
        <DatePicker
          label="Numéro valable jusqu'qu"
          value={new Date('03/30/2027')}
          onChange={handleDelivedate}
        />

        <p className='text-gray text-sm font-normal leading-4'>
          pour les catégories COE et les taxis
        </p>

        <p className='text-primary-700 text-base font-normal leading-5'>
          {'Indiquer par une flèche -> le pointt de choc initial'}
        </p>

        {/* <div>
          <Label className="mb-4">{"Indiquer par une flèche -> le pointt de choc initial"}</Label>
          <Image
            src={imgAccident}
            width={300}
            height={150}
            className="mx-auto w-[240px] max-w-[90%]"
            alt="imgAccident"
          />
        </div> */}

        <Input label='Dégâts apparents' type='text' value='lorem ipsom' />
        <Input label='Observations' type='text' value='lorem ipsom' />
        <Textarea
          label='textarea'
          name='textarea'
          value='Ajouer un commentaire'
        />

        <Text>
          Ne rien modifier au constat après séparation des exemplaires des 2. En
          cas de blessures ou en cas de dégâts matériels autres qu’aux véhicules
          A et B, révéler les indications d’identité, d’adresse, etc....
        </Text>
      </div>
    </div>
  );
};
