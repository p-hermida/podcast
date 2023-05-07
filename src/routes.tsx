import { RouteObject } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

export const routes:RouteObject[] = [
  {
    path: '/',
    element: <div>Home - Listado</div>,
    errorElement: <ErrorBoundary fallback={
      <div>
        Ha ocurrido un error desconocido. Recarga y, si persiste el error, 
        ponte en contacto con un administrador del sitio.
      </div>
    }/>,
    children: [
      {
        path: 'podcast/:podcastId',
        element: <div>Detalle de podcast</div>,
        children: [
          {
            path: 'episode/:episodeId',
            element: <div>Detalle de episodio</div>
          }
        ]
      }
    ]
  },
];
