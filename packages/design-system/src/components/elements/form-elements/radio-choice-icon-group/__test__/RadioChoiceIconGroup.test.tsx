/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import React from 'react';

import { RadioChoiceIconGroup } from '../RadioChoiceIconGroup';

describe('RadioChoiceIconGroup', () => {
  it('Should render', () => {
    const handleChange = jest.fn();
    render(
      <RadioChoiceIconGroup
        name='Hello'
        onChange={handleChange}
        testidPrefex='test_id'
        errorMessage='Error message'
        options={[
          {
            value: '1',
            label: 'Mise à disposition',
            description:
              "Vous pouvez récupérer le montant d'indemnisation dans une agence bancaire",
            image: '/bank.svg',
          },
        ]}
      />,
    );
  });
});
