import { render } from '@testing-library/react';
import React from 'react';

import { Heading } from '../Heading';

describe('Heading', () => {
  it('Should render', () => {
    render(
      <Heading icon='calendar' title='Hello'>
        Info d’expertise
      </Heading>,
    );
  });

  it('Should render with separator', () => {
    render(
      <Heading separator={true} icon='calendar' title='Hello'>
        Info d’expertise
      </Heading>,
    );
  });
});
