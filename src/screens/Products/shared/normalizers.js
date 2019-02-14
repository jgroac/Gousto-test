import { normalize, schema } from 'normalizr';

const category = new schema.Entity('categories');
const product = new schema.Entity('products', {
  categories: [category]
});
const products = new schema.Array(product);

export default {
  normalizeProducts: data => normalize(data, products)
};
