import { render, screen } from '@testing-library/react';

import { CardRecap } from '../CardRecap';

const items = [
  { label: 'Ville du sinistre', value: 'Casablanca' },
  { label: 'Nature des dégâts', value: 'Léger' },
  { label: 'Date du sinistre', value: '22 février 2023 ' },
  { label: 'Heure du sinistre', value: 'Heure du sinistre' },
];
describe('Card recap', () => {
  it('Should render', () => {
    render(
      <CardRecap
        cardTitle='Declaration'
        cardTitleIcon='smart-car'
        cardSubtitle='subtitle'
        cardElements={items}
      />,
    );
    expect(screen.getByText('Declaration')).toBeInTheDocument();
  });
});
