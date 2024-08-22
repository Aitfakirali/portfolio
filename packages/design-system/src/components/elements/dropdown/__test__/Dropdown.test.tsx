import { render, screen } from '@testing-library/react';

import { Dropdown, DropdownItem } from '../Dropdown';

describe('Dropdown', () => {
  it('should render', () => {
    const dropdownItems: DropdownItem[] = [
      { value: 'maroc', label: 'Maroc' },
      { value: 'france', label: 'France' },
    ];
    render(<Dropdown items={dropdownItems} label='Pays' />);

    expect(screen.getByText('Pays')).toBeInTheDocument();
  });
});
