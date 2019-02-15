import React from 'react';
import { render } from 'react-testing-library';
import Loader from '../Loader';

describe('Loader', () => {
  it('should render loader if isLoading is true', () => {
    const { queryByText } = render(<Loader isLoading>hey</Loader>);
    expect(queryByText('hey')).toBeNull();
  });

  it(`should render hello if isLoading is false`, () => {
    const { getByText } = render(<Loader isLoading={false}>hello</Loader>);
    expect(getByText('hello')).toBeInTheDocument();
  });
});
