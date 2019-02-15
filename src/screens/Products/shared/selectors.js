export const getProductsByCategory = (state, { categoryId }) => {
  const productsState = state.products.data;
  const productsById = productsState.result;
  const productEntities = productsState.entities.products;
  const products = productsById.map(id => productEntities[id]);
  return products.filter(product => product.categories.includes(categoryId));
};

export const getFetchingStatus = ({ products }) => products.isFetching;

export default {
  getProductsByCategory
};
