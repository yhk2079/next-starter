import { renderHook } from '@testing-library/react-hooks';
import useQueryUsersWithFetch from '../../hooks/useQueryUsersWithFetch';
import MockProvider from '../../utils/MockProvider';
import users from '../../utils/mockData/users.json';

test('should test useQueryUsersWithFetch with mocked fetch and render hook', async () => {
  // Note: mock fetch, because there is no global fetch in node environment. ref: https://rishabhsrao.medium.com/mocking-and-testing-fetch-with-jest-c4d670e2e167
  const mockSuccessResponse = users;
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  const { result, waitFor } = renderHook(() => useQueryUsersWithFetch(), {
    wrapper: MockProvider,
  });

  await waitFor(() => result.current.isSuccess);

  expect(result.current.data).toEqual(users);
});
