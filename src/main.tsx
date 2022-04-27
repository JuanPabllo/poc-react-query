import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';
import './index.css';

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
