import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Autocomplete } from '../Autocomplete';

describe('Autocomplete component', () => {
  const mockSetSelected = jest.fn();
  const listCities = [
    { value: '1', content: 'Casablanca' },
    { value: '2', content: 'Paris' },
    { value: '3', content: 'Agadir' },
  ];
  it('should render the component', () => {
    render(<Autocomplete list={listCities} setSelected={mockSetSelected} />);
  });

  it('should test if the button exists in the dom', async () => {
    render(<Autocomplete list={listCities} setSelected={mockSetSelected} />);
    const button = document.querySelector("[type='button']");
    expect(button).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(button as Element);
    });

    const list = document.querySelector('ul');

    expect(list).toBeInTheDocument();
  });

  it('should test if the list item is not in the dom', () => {
    render(<Autocomplete list={listCities} setSelected={mockSetSelected} />);

    const list = document.querySelector('ul');

    expect(list).not.toBeInTheDocument();
  });

  it('should select the item of clicked on element', async () => {
    let country = '';
    render(
      <Autocomplete
        list={listCities}
        selected='1'
        setSelected={(selected: string) => (country = selected)}
      />,
    );

    const button = document.querySelector("[type='button']");
    expect(button).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(button as Element);
    });

    const item = await screen.findByText('Paris');

    await act(async () => {
      fireEvent.click(item);
    });
    expect(country).toEqual('2');
  });

  it('should filter items', async () => {
    const { container } = render(<Autocomplete list={listCities} />);

    await act(async () => {
      fireEvent.change(screen.getByTestId('autocomplete-select'), {
        target: { value: 'Paris' },
      });
    });
    expect(container.querySelectorAll('ul > li').length).toBe(1);
  });

  it('should display Not found when no items found', async () => {
    render(<Autocomplete data-testid='autocomplete' list={listCities} />);

    await act(async () => {
      fireEvent.change(screen.getByTestId('autocomplete-select'), {
        target: { value: 'Not found' },
      });
    });

    expect(screen.getByTestId('autocomplete')).toHaveTextContent(
      'Nothing found.',
    );
    // expect(screen.getByText(/Not found/i)).toBeInTheDocument();
    // expect(container.querySelectorAll('ul > li').length).toBe(0);
  });

  it('should trigger query on unmount', async () => {
    const { unmount } = render(<Autocomplete list={listCities} />);

    unmount();
  });

  it('should test icon presence', async () => {
    const IconComponent = () => <span id='test-icon' />;
    const { container } = render(
      <Autocomplete list={listCities} iconCheked={<IconComponent />} />,
    );

    expect(container.querySelector('span#test-icon')).toBeInTheDocument();
  });
});
