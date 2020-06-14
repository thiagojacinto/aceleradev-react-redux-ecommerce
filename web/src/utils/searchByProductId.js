/**
 *
 * @param {Array} productArray
 * @param {String} productId
 */
export const searchByProductId = (productArray = [], productId = "") => {
  const found = productArray.filter(
    (product) => product.code_color === productId
  );
  return found;
};

export default searchByProductId;
