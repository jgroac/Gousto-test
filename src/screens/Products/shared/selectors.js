const getProductsByCategory = (state, props) => {
  const productsState = state.products.data;
  const productsById = productsState.result;
  const productEntities = productsState.entities.products;
  const products = productsById.map(id => productEntities[id]);

  if (!props.categoryId) {
    return products;
  }

  return products.filter(product => product.categories.includes(props.categoryId));
};

export const getProducts = (state, { categoryId }) => {
  const { searchTerm } = state.products;
  const productsByCategories = getProductsByCategory(state, { categoryId });
  if (!searchTerm) {
    return productsByCategories;
  }

  return productsByCategories.filter(product => {
    return (
      product.title.indexOf(searchTerm) !== -1 || product.description.indexOf(searchTerm) !== -1
    );
  });
};

export const getFetchingStatus = ({ products }) => products.isFetching;

export const getSearchValue = ({ products }) => products.searchTerm;

export default {
  getFetchingStatus,
  getSearchValue,
  getProducts
};
