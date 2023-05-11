import { RootState } from "../../reducer";

export const getPodcastList = (state: RootState) => state.podcast.list;
export const isPendingList = (state: RootState) => state.podcast.isPending;
