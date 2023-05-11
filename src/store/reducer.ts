import { combineReducers } from 'redux';
import podcastReducer from './podcast/podcast.reducer';

const rootReducer = combineReducers({
  podcast: podcastReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
