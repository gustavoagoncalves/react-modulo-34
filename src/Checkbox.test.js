import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox should change value to true", () => {
    const { getByLabelTest } = render(<Checkbox />);
    const checkbox = getByLabelTest(/not checked/i);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});