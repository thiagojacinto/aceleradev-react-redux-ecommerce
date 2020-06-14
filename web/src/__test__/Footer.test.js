import React from "react";
import { render, cleanup, getByTestId } from "@testing-library/react";

import Footer from "../components/Footer";

afterEach(cleanup);

const footerMock = {
  author: "author",
  github: "github",
  twitter: "twitter",
  linkedIn: "linkedIn",
};

describe("Testing Footer component ...", () => {
  test("Should take a snapshot", () => {
    const { asFragment } = render(
      <Footer
        authorName={footerMock.author}
        githubLink={footerMock.github}
        twitterLink={footerMock.twitter}
        linkedInLink={footerMock.linkedIn}
      />
    );

    expect(asFragment(<Footer />)).toMatchSnapshot();
  });

  test("Render author sign in Footer", () => {
    const author = footerMock.author;
    const { getByText } = render(<Footer authorName={author} />);
    const authorSign = getByText(/author/i);
    expect(authorSign).toBeInTheDocument();
  });
});
