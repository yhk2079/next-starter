import { render, waitFor } from '@testing-library/react';
import nock from 'nock';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import MockProvider from '../../utils/MockProvider';
import users from '../../utils/mockData/users.json';
import Home from '../Home';

test('should render Home with axios and nock', async () => {
  // TODO: compare msw and nock .
  nock('http://localhost:1080')
    .defaultReplyHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true',
    })
    .get('/users')
    .reply(200, users);

  const { getByText, asFragment } = render(
    <MockProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </MockProvider>,
  );
  expect(getByText('the world')).toBeInTheDocument();

  await waitFor(() => expect(getByText(/test@email.com/)).toBeInTheDocument());
  expect(asFragment()).toMatchSnapshot();
});
