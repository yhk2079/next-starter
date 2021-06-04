import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
const MockProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default MockProvider;
