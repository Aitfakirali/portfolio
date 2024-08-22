import { render, screen } from '@testing-library/react';

import { Textarea } from '../Textarea';

describe('Textarea', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <Textarea
        variant='default'
        placeholder=''
        onChange={handleChange}
        label='Textarea'
        description=''
        hasError={false}
        errorMessage=''
        rows={0}
        maxLength={0}
        resize={false}
        disabled={false}
      >
        hello word
      </Textarea>,
    );

    expect(screen.getByText('Textarea')).toBeInTheDocument();
  });
});
