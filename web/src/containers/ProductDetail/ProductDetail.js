import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ErrorProductNotFound from "../../components/Error/ErrorProductNotFound";
import { ProductView } from "../../components/Products";

import { searchByProductId } from "../../utils/searchByProductId";
import { applyImagePlaceholderIfBlank } from "../../utils/placeholder";
import { useSelector } from "react-redux";

export const ProductDetail = () => {
  const products = useSelector((store) => store.catalog.catalog);
  // console.log(products); // DEBUG

  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isLoading, toggleLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const [availableSizes, setAvailableSizes] = useState([]);

  useEffect(() => {
    let foundProduct = searchByProductId(products, productId);
    // console.log(foundProduct); // DEBUG

    setSelectedProduct(foundProduct[0]);
  }, [productId, products]);

  useEffect(() => {
    setImageUrl(applyImagePlaceholderIfBlank(selectedProduct.image));

    const filterAvailableSizes = (array = []) => {
      return array.filter((option) => option.available);
    };
    setAvailableSizes(filterAvailableSizes(selectedProduct.sizes));
    toggleLoading(false);
  }, [selectedProduct]);

  return (
    <>
      {isLoading ? (
        <ErrorProductNotFound />
      ) : (
        <ProductView
          imageUrl={imageUrl}
          description={selectedProduct.name}
          regularPrice={selectedProduct.regular_price}
          actualPrice={selectedProduct.actual_price}
          installments={selectedProduct.installments}
          sizeOptions={availableSizes}
          onSaleFlag={selectedProduct.on_sale}
        />
      )}
    </>
  );
};

export default ProductDetail;
