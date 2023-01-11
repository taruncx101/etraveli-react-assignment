import { render, screen } from '@testing-library/react';
import List from '../List';

const mockedSetTableData = jest.fn()

it('setting the list', () => {
    render(<List setTableData={mockedSetTableData}/>);
    const element = screen.getAllByRole("heading")
    expect(element.length).toBe(1);
});

it('renders initial loading message', () => {
    render(<List/>);
    const element = screen.getByRole("heading", {name: "Loading Episodes..."})
    expect(element).toBeInTheDocument();
});

it('check the number of heading elemnts', () => {
    render(<List/>);
    const element = screen.getAllByRole("heading")
    expect(element.length).toBe(1);
});