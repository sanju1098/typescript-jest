// HomePage.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

describe("HomePage component", () => {
	test("matches snapshot", () => {
		const { container } = render(<HomePage />);
		expect(container).toMatchSnapshot();
	});
	test("renders component correctly", () => {
		render(<HomePage />);

		expect(
			screen.getByText("Hello React with TypeScript!")
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: "Button Test" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Typography Test" })
		).toBeInTheDocument();
	});
});
