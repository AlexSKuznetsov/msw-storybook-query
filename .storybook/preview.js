import { addDecorator } from '@storybook/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ContextDecorator } from './contextDecorator';

const queryClient = new QueryClient();

// Provide context
addDecorator(ContextDecorator);

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Provide the MSW addon decorator globally + Query Dev Tools
export const decorators = [
  (story) => {
    return (
      <QueryClientProvider client={queryClient}>
        {story()}
        <ReactQueryDevtools />
      </QueryClientProvider>
    );
  },
  mswDecorator,
];
