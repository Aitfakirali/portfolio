import { render, screen } from '@testing-library/react';

import { Breadcrumb } from '../Breadcrumb';
export const pages = [
  { id: '1', name: 'Projects', href: '#', current: false },
  { id: '2', name: 'Project Nero', href: '#', current: false },
  {
    id: '3',
    name: 'Project Nero - 1.0',
    href: '#',
    current: false,
  },
];

describe('Breadcrumb', () => {
  it('should render the component', () => {
    render(<Breadcrumb />);
  });

  it('should render the 1 elements', () => {
    render(<Breadcrumb homeUrl='/' />);
    const BulletListElement = screen.getByRole('list');
    const children = BulletListElement.childNodes;

    expect(children.length).toEqual(1);
  });

  it('should render the 5 elements', () => {
    render(<Breadcrumb pages={pages} />);
    const BulletListElement = screen.getByRole('list');
    const children = BulletListElement.childNodes;

    expect(children.length).toEqual(3);
  });
});
