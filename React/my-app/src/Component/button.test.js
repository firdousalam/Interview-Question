import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

test('renders button with correct label', () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
});

test('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn(); // Mock function
    render(<Button label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
});