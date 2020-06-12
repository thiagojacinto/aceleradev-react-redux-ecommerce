import React from "react";
import { render } from "@testing-library/react";
import App from "../containers/App/App";
import Footer from "../components/Footer";

test("Render author sign in Footer", () => {
  const author = "Thiago Jacinto";
  const { getByText } = render(<Footer authorName={author} />);
  const authorSign = getByText(/Thiago Jacinto/i);
  expect(authorSign).toBeInTheDocument();
});

test("Render searchbar in Search", () => {
});
