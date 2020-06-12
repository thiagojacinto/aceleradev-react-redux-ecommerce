import React from "react";

import ProductItem from "../../components/Products/ProductItem";
import { useState } from "react";
import { useEffect } from "react";

const Search = ({ url, allProducts }) => {
  let [foundItems, setFoundItems] = useState([]);
  let [searchText, setSearchText] = useState("");

  const onChange = (event) => {
    event.preventDefault();
    let searchInput = event.target.value;

    if (searchInput.length > 3) {
      setSearchText(searchInput);
      return;
    }
    setSearchText("");
  };

  const searchItens = (productArray = [], input = "") => {
    return productArray.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
  };

  useEffect(() => {
    const found = searchItens(allProducts, searchText);
    if (searchText.length > 3) return setFoundItems(found);
    setFoundItems([]);
  }, [searchText, allProducts]);

  return (
    <section className="search">
      <aside className="search__bar">
        <form method="get">
          <fieldset>
            <label className="search__bar__label">Procure pelo produto</label>
            <input
              className="search__bar__input"
              type="text"
              name="search_input"
              id="search_input"
              onChange={(event) => onChange(event)}
            />
          </fieldset>
        </form>
        <div className="search__results">
          {foundItems.length > 0 &&
            foundItems.map((item) => {
              return (
                <ProductItem
                  key={item.style}
                  id={item.style}
                  url={url}
                  imageUrl={item.image}
                  description={item.name}
                  actualPrice={item.actual_price}
                />
              );
            })}
        </div>
      </aside>
    </section>
  );
};

export default Search;