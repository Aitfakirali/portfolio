import { render, screen } from '@testing-library/react';

import { TableDropDown } from '../TableDropDown';

describe('TableDropDown', () => {
  const handleClick = jest.fn();
  it('should render', () => {
    render(
      <TableDropDown
        title='Filter'
        options={[]}
        onClick={handleClick}
        icon='plus'
      />,
    );
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });
});
