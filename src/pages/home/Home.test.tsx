// Libraries
import { render, RenderResult } from '@testing-library/react';
// Target
import { HomePage } from './Home';

describe('[HomePage] Start:', () => {
  let wrapper: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement>;

  beforeEach(() => {
    const baseProps = { name: 'name' };
    wrapper = render(<HomePage {...baseProps} />);
  });

  it('should render without crashing.', () => {
    expect(wrapper).toBeDefined();
  });
});
