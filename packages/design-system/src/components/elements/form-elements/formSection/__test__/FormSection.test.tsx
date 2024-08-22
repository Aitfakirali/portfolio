import { render, screen } from '@testing-library/react';

import { FormSection } from '../FormSection';

describe('FormSection', () => {
  it('should render', () => {
    render(
      <FormSection icon='plus' sectionTitle='section title'>
        Section
      </FormSection>,
    );

    expect(screen.getByText('Section')).toBeInTheDocument();
  });
});
