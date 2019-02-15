import { getProductsByCategory } from '../selectors';

describe('products selectors', () => {
  it('getProductsByCategory should get the products that match the given category', () => {
    const categoryId = '11';
    const state = {
      products: {
        data: {
          entities: {
            products: {
              '22': { id: '22', categories: ['11'] },
              '23': { id: '22', categories: ['12'] }
            },
            categories: {}
          },
          result: ['22', '23']
        }
      }
    };

    const productsByCategory = getProductsByCategory(state, { categoryId });

    expect(productsByCategory).toEqual([{ id: '22', categories: ['11'] }]);
  });
});
