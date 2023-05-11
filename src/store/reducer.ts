import { combineReducers } from 'redux';
import podcastReducer from './podcast/podcast.reducer';
import podcastDetailReducer from './podcast/podcastDetail.reducer';

const rootReducer = combineReducers({
  podcast: podcastReducer,
  detail: podcastDetailReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
