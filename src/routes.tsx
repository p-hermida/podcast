import { RouteObject } from 'react-router-dom';

import { App, EpisodeDetail, EpisodeList, HomePage, PodcastDetailPage,  } from './pages';
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
        element: <PodcastDetailPage />,
        children: [
          {
            path: '',
            element: <EpisodeList />
          },
          {
            path: 'episode/:episodeId',
            element: <EpisodeDetail />
          },
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];
