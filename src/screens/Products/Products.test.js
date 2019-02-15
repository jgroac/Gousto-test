import React from 'react';
import { render, waitForElement, cleanup, fireEvent } from 'react-testing-library';
import Products from './Products';

jest.mock('../Categories', () => () => <div />);

afterEach(cleanup);

describe('<Products />', () => {
  let props;

  beforeEach(() => {
    props = {
      products: [],
      categoryId: 'x',
      isFetching: true,
      fetchProducts: jest.fn().mockResolvedValue()
    };
  });

  it('should fetch the products on didMount', async () => {
    props.fetchProducts = jest.fn().mockResolvedValue();
    const { getByPlaceholderText } = render(<Products {...props} />);

    await waitForElement(() => getByPlaceholderText('Search Product'));

    expect(props.fetchProducts).toHaveBeenCalledTimes(1);
  });

  it('should render the products if there are some and isFetching is false', async () => {
    props.products = [{ title: 'product1', id: 1 }, { title: 'product2', id: 2 }];
    props.isFetching = false;

    const { getByText } = render(<Products {...props} />);

    expect(getByText('product1')).toBeTruthy();
    expect(getByText('product2')).toBeTruthy();
  });

  it('should show product details if the toggle button is clicked', async () => {
    props.products = [{ title: 'product1', id: 1, description: 'desc' }];
    props.isFetching = false;

    const { getByLabelText, getByText } = render(<Products {...props} />);
    const input = getByLabelText('show-product-details');

    fireEvent.click(input);

    expect(getByText('desc')).toBeTruthy();
  });

  it('should hide product details after click toggle button a second time', async () => {
    props.products = [{ title: 'product1', id: 1, description: 'desc' }];
    props.isFetching = false;

    const { getByLabelText, queryByText } = render(<Products {...props} />);
    const input = getByLabelText('show-product-details');

    fireEvent.click(input);
    fireEvent.click(input);

    expect(queryByText('desc')).toBeNull();
  });
});
