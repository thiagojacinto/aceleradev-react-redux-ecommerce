import React from "react";
import { render } from "@testing-library/react";
import App from "../containers/App/App";
import Footer from "../components/Footer";
import catalogMock from "../__test__/mockups/catalog.json";
import { applyImagePlaceholderIfBlank } from "../utils/placeholder";
import imagePlaceholder from "../assets/img-item-placeholder.png";
import { searchByProductId } from "../utils/searchByProductId";

// test("Render author sign in Footer", () => {
//   const author = "Thiago Jacinto";
//   const { getByText } = render(<Footer authorName={author} />);
//   const authorSign = getByText(/Thiago Jacinto/i);
//   expect(authorSign).toBeInTheDocument();
// });

// test("Render searchbar in Search", () => {
// });

describe("util / applyImagePlaceholderIfBlank function", () => {
  test("Blank image url to applyImagePlaceholderIfBlank should return the image placeholder", () => {
    const url = "";
    const res = applyImagePlaceholderIfBlank(url);

    expect(res).toBe(imagePlaceholder);
  });

  test("image url NOT blank shold NOT be changed", () => {
    const url = "valid.url.com/do-not-change";
    const res = applyImagePlaceholderIfBlank(url);

    expect(res).toBe(url);
  });

  test("image url with only blank spaces SHOULD return placeholder", () => {
    const urlWithWhiteSpace = "              ";
    const res = applyImagePlaceholderIfBlank(urlWithWhiteSpace);

    expect(res).toStrictEqual(imagePlaceholder);
  });
});

describe("util / searchByProductId function", () => {
  test("An empty ID should return empty array", () => {
    const id = "";
    const res = searchByProductId(catalogMock, id);
    const expected = [];

    expect(res).toHaveLength(0);
    expect(res).toEqual(expect.arrayContaining(expected));
  });

  test("An ID = 20002634_613 should return an array of length = 1", () => {
    const id = "20002634_613";
    const res = searchByProductId(catalogMock, id);
    const expected = {
      name: "CALÇA CLASSIC PRINT",
      style: "20002634",
    };

    expect(res).toHaveLength(1);
    expect(res[0]).toEqual(expect.objectContaining(expected));
  });

  test("An ID = 2 should return an empty array", () => {
    const id = "2";
    const res = searchByProductId(catalogMock, id);
    const expected = {
      name: "CALÇA CLASSIC PRINT",
      style: "20002634",
    };

    expect(res).toHaveLength(0);
    expect(res[0]).not.toEqual(expect.objectContaining(expected));
  });
});
