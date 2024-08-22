import type { Meta } from '@storybook/react';

import { CardProfile } from './CardProfile';
import { Badge } from '../badge/Badge';

const meta: Meta<typeof CardProfile> = {
  title: 'Components/Card profile',
  component: CardProfile,
};

export default meta;

export const CardProfileExample = () => {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
      <CardProfile
        title={
          <p>
            Prime totale <br /> des contrats en cours
          </p>
        }
        subtitle='derniers 12 mois'
        number='23 049 DH'
      />
      <CardProfile
        title={
          <p>
            Prime totale <br /> des contrats en cours
          </p>
        }
        //subtitle="derniers 12 mois"
        number='23 049 DH'
      />
      <CardProfile
        title={
          <p>
            Prime totale <br /> des contrats en cours
          </p>
        }
        subtitle='derniers 12 mois'
        number='23 049 DH'
      />
      <CardProfile
        title={
          <p>
            Prime totale <br /> des contrats en cours
          </p>
        }
        subtitle='derniers 12 mois'
        number='23 049 DH'
      />
      <CardProfile
        title={
          <p>
            Prime totale <br /> des contrats en cours
          </p>
        }
        subtitle='derniers 12 mois'
        number='23 049 DH'
      />
      <CardProfile
        title={
          <p>
            Prime totale <br /> des contrats en cours
          </p>
        }
        badge={
          <Badge label='Modéré' variant='primary' size='lg' className='w-fit' />
        }
        subtitle='derniers 12 mois'
      />
    </div>
  );
};
