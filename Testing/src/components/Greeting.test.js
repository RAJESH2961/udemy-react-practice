import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders Hello world as a text', () => { 
    // Arrange
    render(<Greeting/>);

    // Act
    // ...

    // Assert
    const helloworldElement = screen.getByText('Hello World', {exact: false})// returns exact match
    expect(helloworldElement).toBeInTheDocument();
 });
})
