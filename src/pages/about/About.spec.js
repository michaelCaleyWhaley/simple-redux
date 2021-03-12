import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { About } from "./About";

let output;

const props = {
  name: "",
  email: "",
  dispatchUpdateName: jest.fn((n) => {
    output.value = output.value + n;
  }),
  dispatchUpdateEmail: jest.fn(),
};

describe("about page", () => {
  beforeEach(() => {
    output = { value: "" };
  });

  test("should render About component", () => {
    const { container } = render(<About {...props} />);
    expect(container).toMatchSnapshot();
  });

  test("should have render a single H1 tag", () => {
    const { container, getByText } = render(<About {...props} />);
    expect(getByText("About")).toBeInTheDocument();
    expect(container.getElementsByTagName("h1").length).toBe(1);
  });

  test("should toggle heading class", () => {
    const { getByTestId } = render(<About {...props} />);
    const heading = getByTestId("about-heading");
    expect(heading.className).toBe("heading--alt");
    userEvent.click(heading);
    expect(heading.className).toBe("heading");
  });

  test("should allow user to enter text value", () => {
    const { getByTestId } = render(<About {...props} />);
    const nameInput = getByTestId("about-input");
    const testString = "Hello, World!";
    userEvent.type(nameInput, testString);
    expect(props.dispatchUpdateName).toHaveBeenCalledTimes(testString.length);
    expect(output.value).toBe("Hello, World!");
  });
});
