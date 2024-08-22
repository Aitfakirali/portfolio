/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import React from 'react';

import { RadioChoiceIcon } from '../RadioChoiceIcon';

describe('RadioChoiceIcon', () => {
  it('Should render', () => {
    const handleChange = jest.fn();
    render(
      <RadioChoiceIcon
        label='Mise à disposition'
        description="Vous pouvez récupérer le montant d'indemnisation dans une agence bancaire"
        image='/images/Procedure normal.png'
        checked={true}
        onChange={handleChange}
        hasError={true}
      />,
    );
  });
});
