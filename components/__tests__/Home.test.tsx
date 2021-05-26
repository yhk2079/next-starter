import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import Home from '../Home';

describe('Home page', () => {
  it('should render Home', () => {
    const { getByText, asFragment } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );
    expect(getByText('the world')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
