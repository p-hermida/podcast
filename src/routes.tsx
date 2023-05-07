import { RouteObject } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import { EpisodeDetail, Home, PodcastDetail } from './pages';

export const routes:RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary fallback={
      <div>
        Ha ocurrido un error desconocido. Recarga y, si persiste el error, 
        ponte en contacto con un administrador del sitio.
      </div>
    }/>,
    children: [
      {
        path: 'podcast/:podcastId',
        element: <PodcastDetail />,
        children: [
          {
            path: 'episode/:episodeId',
            element: <EpisodeDetail />
          }
        ]
      }
    ]
  },
];
