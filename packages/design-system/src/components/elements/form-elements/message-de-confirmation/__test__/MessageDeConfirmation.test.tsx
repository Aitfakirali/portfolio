import { render, screen } from '@testing-library/react';

import { MessageDeConfirmation } from '../MessageDeConfirmation';

describe('MessageDeConfirmation', () => {
  const img = '/images/Saly-26.png';
  const title = 'La déclaration de votre client a bien été prise en compte';
  const description =
    'La procédure sélectionnée sera validée dans les plus brefs délais';

  it('should render', () => {
    render(
      <MessageDeConfirmation
        image={img}
        title={title}
        description={description}
        link={{
          href: 'https://www.google.com',
          target: '_self',
        }}
      />,
    );

    expect(
      screen.getByText(
        'La déclaration de votre client a bien été prise en compte',
      ),
    ).toBeInTheDocument();
  });
});
