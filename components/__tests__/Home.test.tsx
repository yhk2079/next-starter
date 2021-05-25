import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home page', () => {
  it('should render Home', () => {
    const { getByText } = render(<Home />);
    expect(getByText('the world')).toBeInTheDocument();
  });
});
