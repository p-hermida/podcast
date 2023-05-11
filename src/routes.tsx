import { RouteObject } from 'react-router-dom';

import { App, EpisodeDetail, HomePage, PodcastDetail } from './pages';
import { NotFound } from './components';

export const routes:RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />
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
