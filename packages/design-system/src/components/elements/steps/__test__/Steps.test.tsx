import { render, screen } from '@testing-library/react';

import { Steps } from '../Steps';

const mockSteps = [
  'Type de déclaration',
  'Choix de procédure',
  'Données administratives',
  'Validation',
];

describe('Testing The Steps', () => {
  it('should render the steps', () => {
    render(<Steps steps={mockSteps} />);
    const steps = screen.getByTestId('stepper');
    expect(steps).toBeInTheDocument();
  });

  it('should render the steps with the correct number of steps', () => {
    render(<Steps steps={mockSteps} />);
    const steps = screen.getByTestId('stepper');
    expect(steps.querySelectorAll('div').length).toBe(4);
  });

  it("should render the second step as active when the 'active' prop is set to 1", () => {
    render(<Steps steps={mockSteps} active={1} />);
    const steps = screen.getByTestId('stepper');
    expect(steps.querySelectorAll('div')[1]).toHaveClass(
      'text-primary-500 bg-primary-50',
    );
  });
});
