import React from 'react';
import { render } from 'react-testing-library';
import If from '../If';

describe('If', () => {
  it('should render hello if the condition is true', () => {
    const { getByText } = render(<If condition>Hello</If>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it(`shouldn't render hello when the condition is false`, () => {
    const { container } = render(<If>Hello</If>);
    expect(container.innerHTML.indexOf('Hello') === -1).toBe(true);
  });
});
