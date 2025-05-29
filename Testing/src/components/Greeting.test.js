import { render, screen } from '@testing-library/react';
import Greeting from "./Greeting"
import userEvent from '@testing-library/user-event';


describe('Greeting component', () => {
    test('renders Hello world as a text', () => { 
    // Arrange
    render(<Greeting/>);

    // Act
    // ...

    // Assert
    const helloworldElement = screen.getByText('Hello World', {exact: false})// returns exact match
    expect(helloworldElement).toBeInTheDocument();
    })
    test('renders good to see you if the button was not clicked', () => {
        // Arrange
        render(<Greeting/>)
        // Act
        // ...
        // Assert
        const paragraphElement = screen.getByText('good to see you', {exact: false});// returns exact match
        expect(paragraphElement).toBeInTheDocument();
 });

     test('renders "changed!" when button WAS clicked', async () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement); // ✅ Await this
        // Assert
        const changedElement = screen.getByText('Changed');// returns exact match
        expect(changedElement).toBeInTheDocument();
    });
})
