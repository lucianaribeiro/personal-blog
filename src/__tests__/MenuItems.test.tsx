import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import MenuItem, { IMenuItemProps } from "../components/menuItem";

const mockNavigate = jest.fn();

describe("Menu", () => {
  test("should check the title of the menu button", () => {
    const navigate = mockNavigate();

    const handleNavigate = (path: string) => {
      navigate(path);
    };

    render(<MenuItem path="/" title="Home" onNavigate={handleNavigate} />);
    const title = screen.getByText("Home");
    expect(title).toBeInTheDocument();
  });
});
