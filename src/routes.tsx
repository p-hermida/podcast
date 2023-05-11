import { RouteObject } from 'react-router-dom';

import { App, EpisodeDetail, Home, PodcastDetail } from './pages';
import { NotFound } from './components';

export const routes:RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'podcast/:podcastId',
        element: <PodcastDetail />
      },
      {
        path: 'podcast/:podcastId/episode/:episodeId',
        element: <EpisodeDetail />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];
