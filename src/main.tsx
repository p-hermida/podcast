import React from 'react';
import ReactDOM from 'react-dom/client';

import { ErrorBoundary } from 'react-error-boundary';

import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={
      <div>
        Ha ocurrido un error desconocido. Recarga y, si persiste el error, 
        ponte en contacto con un administrador del sitio.
      </div>
    }>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
