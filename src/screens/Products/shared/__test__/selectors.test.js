import { getProducts } from '../selectors';

describe('products selectors', () => {
  it('getProducts should get the products that match the given category', () => {
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
        },
        searchTerm: ''
      }
    };

    const productsByCategory = getProducts(state, { categoryId });

    expect(productsByCategory).toEqual([{ id: '22', categories: ['11'] }]);
  });

  it('getProducts should return all the products if the given category is null', () => {
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
        },
        searchTerm: ''
      }
    };

    const productsByCategory = getProducts(state, {});

    expect(productsByCategory).toHaveLength(2);
  });

  it('getProducts should get the products that match the given search', () => {
    const categoryId = '11';
    const state = {
      products: {
        data: {
          entities: {
            products: {
              '2': { id: '2', categories: ['11'], title: 'oranges', description: 'ss' },
              '23': { id: '22', categories: ['12'], title: 'onion', description: 'ss' }
            },
            categories: {}
          },
          result: ['2', '23']
        },
        searchTerm: 'oranges'
      }
    };

    const productsByCategory = getProducts(state, { categoryId });

    expect(productsByCategory).toEqual([
      { id: '2', categories: ['11'], title: 'oranges', description: 'ss' }
    ]);
  });
});
