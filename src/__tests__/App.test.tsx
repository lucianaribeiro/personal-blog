import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test("should check if screen is loaded on Home page", () => {
    const title = screen.getByText("Home page");
    expect(title).toBeInTheDocument();
  });

  test("should check if button click opens About page", () => {
    const title = screen.getByText("Home page");
    expect(title).toBeInTheDocument();

    const aboutButton = screen.getByText("About");
    fireEvent.click(aboutButton);

    const aboutTitle = screen.getByText("About page");
    expect(aboutTitle).toBeInTheDocument();
  });

  test("should check if button click opens Contact page", () => {
    const homeButton = screen.getByText("Home");
    fireEvent.click(homeButton);

    const title = screen.getByText("Home page");
    expect(title).toBeInTheDocument();

    const contactButton = screen.getByText("Contact");
    fireEvent.click(contactButton);

    const contactTitle = screen.getByText("Contact page");
    expect(contactTitle).toBeInTheDocument();
  });
});
