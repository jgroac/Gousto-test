import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Product from '../Product';

afterEach(cleanup);

describe('<Products />', () => {
  let props;

  beforeEach(() => {
    props = {
      product: {
        id: '1000',
        title: 'Onions',
        description: 'Lorem'
      },
      showDetails: false,
      toggleDetails: jest.fn().mockReturnValue(false)
    };
  });

  it('should render only the title', () => {
    const { getByText, queryByTestId } = render(<Product {...props} />);

    expect(getByText('Onions')).toBeTruthy();
    expect(queryByTestId('description')).toBeNull();
  });

  it('should render the description if showDetails is true', () => {
    props.showDetails = true;
    const { getByText } = render(<Product {...props} />);
    expect(getByText('Lorem')).toBeTruthy();
  });

  it('should call toggleDetails when the button is clicked', async () => {
    const toggleDetails = jest.fn();
    props.toggleDetails = toggleDetails;
    const { getByText } = render(<Product {...props} />);

    const button = getByText('Onions');
    fireEvent(
      button,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(toggleDetails).toHaveBeenCalledWith('1000');
  });
});
