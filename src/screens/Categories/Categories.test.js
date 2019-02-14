import React from 'react';
import { render, waitForElement, cleanup } from 'react-testing-library';
import Categories from './Categories';

afterEach(cleanup);

describe('<Categories />', () => {
  it('should fetch the categories on didMount', async () => {
    const fetchCategories = jest.fn().mockResolvedValue();

    const props = {
      categories: [],
      categoryId: 'x',
      isFetching: true,
      fetchCategories
    };

    const { getByText } = render(<Categories {...props} />);

    await waitForElement(() => getByText('Store Cupboard'));

    expect(fetchCategories).toHaveBeenCalledTimes(1);
  });

  it('should render the categories if there are some', async () => {
    const fetchCategories = jest.fn().mockResolvedValue();

    const props = {
      categories: [{ id: '1212', title: 'category1' }, { id: '1212', title: 'category2' }],
      categoryId: '1212',
      isFetching: false,
      fetchCategories
    };

    const { getByText } = render(<Categories {...props} />);

    expect(getByText('category1')).toBeTruthy();
    expect(getByText('category2')).toBeTruthy();
  });

  it('should not render categories if isFetching is true', async () => {
    const fetchCategories = jest.fn().mockResolvedValue();

    const props = {
      categories: [],
      categoryId: '1212',
      isFetching: false,
      fetchCategories
    };

    const { queryByTestId } = render(<Categories {...props} />);

    expect(queryByTestId('categoryList')).toBeNull();
  });
});
