import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import { Tabs } from '../Tabs';

const tabs = [
  {
    id: 1,
    title: 'Auto',
    color: '#F69F14',
  },
  {
    id: 2,
    title: 'Santé',
    color: '#95C11F',
  },
  {
    id: 3,
    title: 'Épargne',
    color: '#82B5DF',
  },
];

const Element = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onClick={(id) => setActiveTab(id)}
    />
  );
};

describe('TabsMenu', () => {
  it('should render the TabsMenu with first tab active', () => {
    render(<Element />);
    expect(screen.getByText('Auto')).toBeInTheDocument();
    expect(screen.getByText('Auto').parentNode).toHaveStyle({
      backgroundColor: '#F69F14',
    });
  });

  it('should make the second tab active after clicking on it', () => {
    render(<Element />);
    fireEvent.click(screen.getByText('Santé'));
    expect(screen.getByText('Santé').parentNode).toHaveStyle({
      backgroundColor: '#95C11F',
    });
  });
});
