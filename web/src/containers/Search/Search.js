import React, { useState, useEffect } from "react";

import ProductItem from "../../components/Products/ProductItem";
import BackButton from "../../components/BackButton/BackButton";
import { useSelector } from "react-redux";

import "./Search.css";

const Search = ({ url }) => {
  const allProducts = useSelector((state) => state.catalog.catalog);
  let [foundItems, setFoundItems] = useState([]);
  let [searchText, setSearchText] = useState("");

  const onChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
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
      <div className="search__bar__controls">
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

        <BackButton />
      </div>
      <aside className="search__bar">
        <div className="search__results">
          {foundItems.length > 0 &&
            foundItems.map((item) => {
              return (
                <ProductItem
                  key={item.code_color}
                  id={item.code_color}
                  url={url}
                  imageUrl={item.image}
                  description={item.name}
                  actualPrice={item.actual_price}
                  regularPrice={item.regular_price}
                  onSale={item.on_sale}
                  discountPercentile={item.discount_percentage}
                />
              );
            })}
        </div>
      </aside>
    </section>
  );
};

export default Search;
