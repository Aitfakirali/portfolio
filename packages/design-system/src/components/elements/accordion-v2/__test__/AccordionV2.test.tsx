import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// import { act } from 'react-dom/test-utils';
import { AccordionItem, AccordionV2 } from '../AccordionV2';

const accordionContent = [
  {
    id: '1',
    title: <span>Element 1</span>,
    content: (
      <p>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    ),
  } as AccordionItem,
  {
    id: '2',
    title: <span>Element 2</span>,
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis
        commodo. Aenean et tortor at risus viverra adipiscing. Lacus vestibulum
        sed arcu non odio euismod lacinia at. Lobortis scelerisque fermentum dui
        faucibus in ornare quam.
      </p>
    ),
  } as AccordionItem,
  {
    id: '3',
    title: <span>Element 3</span>,
    content: (
      <p>
        Aenean et tortor at risus viverra adipiscing. Lacus vestibulum sed arcu
        non odio euismod lacinia at. Lobortis scelerisque fermentum dui faucibus
        in ornare quam.
      </p>
    ),
  } as AccordionItem,
];

describe('Accordion component', () => {
  it('should render', () => {
    render(<AccordionV2 />);
  });

  it('should render with correct items', () => {
    render(<AccordionV2 items={accordionContent} />);

    expect(screen.getByText('Element 1')).toBeInTheDocument();
    expect(screen.getByText('Element 2')).toBeInTheDocument();
    expect(screen.getByText('Element 3')).toBeInTheDocument();
  });

  it('should test if the accordion opens one element at a time', async () => {
    const { container } = render(
      <AccordionV2 items={accordionContent} allowMultiple={false} />,
    );
    await act(async () => {
      fireEvent.click(screen.getByText(/Element 1/i));
      fireEvent.click(screen.getByText(/Element 2/i));
    });

    expect(container.querySelectorAll("[data-open*='true']").length).toBe(1);
  });

  it('should test the possibility of openening multiple elements at once', async () => {
    const { container } = render(
      <AccordionV2 items={accordionContent} allowMultiple={true} />,
    );
    await act(async () => {
      fireEvent.click(screen.getByText(/Element 1/i));
      fireEvent.click(screen.getByText(/Element 2/i));
    });

    expect(container.querySelectorAll("[data-open*='true']").length).toBe(2);
  });

  it('should open close multiples', async () => {
    const { container } = render(
      <AccordionV2 items={accordionContent} allowMultiple={true} />,
    );
    await act(async () => {
      fireEvent.click(screen.getByText(/Element 1/i));
    });
    expect(container.querySelectorAll("[data-open*='true']").length).toBe(1);
    await act(async () => {
      fireEvent.click(screen.getByText(/Element 1/i));
    });
    expect(container.querySelectorAll("[data-open*='true']").length).toBe(0);
  });

  it('should open close single', async () => {
    const { container } = render(
      <AccordionV2 items={accordionContent} allowMultiple={true} />,
    );
    await act(async () => {
      fireEvent.click(screen.getByText(/Element 1/i));
    });
    expect(container.querySelectorAll("[data-open*='true']").length).toBe(1);
    await act(async () => {
      fireEvent.click(screen.getByText(/Element 1/i));
    });
    expect(container.querySelectorAll("[data-open*='true']").length).toBe(0);
  });
});
