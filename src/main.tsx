import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import './index.css';

import { routes } from './routes';
import store from './store';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={
      <div>
        Ha ocurrido un error desconocido. Recarga y, si persiste el error, 
        ponte en contacto con un administrador del sitio.
      </div>
    }>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
