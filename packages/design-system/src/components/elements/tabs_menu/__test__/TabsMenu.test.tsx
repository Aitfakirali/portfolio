import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import { TabsMenu } from '../TabsMenu';

const tabs = [
  {
    id: 1,
    title: 'Affectations',
    number: 150,
  },
  {
    id: 2,
    title: 'Suivi de dossiers',
    number: 230,
  },
  {
    id: 3,
    title: 'Habilitation CRC',
    number: 0,
  },
  {
    id: 4,
    title: 'Reporting',
    number: 0,
  },
];

const Element = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabsMenu
      tabs={tabs}
      activeTab={activeTab}
      onClick={(id) => setActiveTab(id)}
    />
  );
};

describe('TabsMenu', () => {
  it('should render the TabsMenu with first tab active', () => {
    render(<Element />);
    expect(screen.getByText('Affectations')).toBeInTheDocument();
    expect(screen.getByText('150')).toHaveClass('bg-primary-200');
  });

  it('should make the second tab active after clicking on it', () => {
    render(<Element />);
    fireEvent.click(screen.getByText('Suivi de dossiers'));
    expect(screen.getByText('230')).toHaveClass('bg-primary-200');
  });
});
