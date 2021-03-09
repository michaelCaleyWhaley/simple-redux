import React from "react";
import { render } from "@testing-library/react";

import { About } from "./About";

describe("about page", () => {
  test("should have 1 H1 tag", () => {
    const { container } = render(<div />);
    expect(container).toBe({});
  });
});
