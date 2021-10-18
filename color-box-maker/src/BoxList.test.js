import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {

    render(<BoxList />);

});

it("matches snapshot", () => {

    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();

});

if("should add new div and remove div", () => {

    const { queryByText } = render(<BoxList />);
    const addDIV = queryByText("Add DIV");

    expect(queryByText('X')).not.toBeInTheDocument();
    fireEvent.click(addDIV);
    expect(queryByText('X')).toBeInTheDocument();

    const removeDIV = queryByText('X');
    fireEvent.click(removeDIV);
    expect(queryByText('X')).not.toBeInTheDocument();

});