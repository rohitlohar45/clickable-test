import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClickableList from './ClickableList';

describe('ClickableList Component', () => {
  const items = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Vite' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'TypeScript' }
  ];

  test('renders list items with correct IDs and text content', () => {
    render(<ClickableList items={items} />);

    items.forEach((item) => {
      const listItem = screen.getByTestId(`button-${item.id}`);
      expect(listItem).toBeInTheDocument();
      expect(listItem).toHaveTextContent(item.name);
    });
  });

  test('clicking a button logs the correct message', () => {
    render(<ClickableList items={items} />);
    console.log = jest.fn();

    items.forEach((item) => {
      const button = screen.getByTestId(`button-${item.id}`);
      fireEvent.click(button);

      expect(console.log).toHaveBeenCalledWith(`Clicked ${item.name}`);
    });
  });
});
