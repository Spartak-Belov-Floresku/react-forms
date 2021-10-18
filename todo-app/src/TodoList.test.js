import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", () => {

    render(<TodoList />);

});

it("matches snapshot", () => {

    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();

});

if("should add new todo and remove todo", () => {

    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("Add new task: ");
    const addToDo = queryByText("Add Task");

    expect(queryByText('The next task to do')).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'The next task to do' } });
    fireEvent.click(addToDo);
    expect(queryByText('The next task to do')).toBeInTheDocument();

    const removeToDo = queryByText('X');
    fireEvent.click(removeToDo);
    expect(queryByText('The next task to do')).not.toBeInTheDocument();

});