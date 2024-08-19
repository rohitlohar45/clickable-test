import React from 'react';
import { render } from '@testing-library/react';

test('renders a component', () => {
  const { getByText } = render(<div>Hello, world!</div>);
  expect(getByText('Hello, world!')).toBeInTheDocument();
});
