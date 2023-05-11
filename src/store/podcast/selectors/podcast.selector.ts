import { RootState } from "../../reducer";

export const getPodcastList = (state: RootState) => state.podcast.list;
export const getPodcastDetail = (state: RootState) => state.detail.detail;
export const isPendingList = (state: RootState) => state.podcast.isPending;
export const isPendingDetail = (state: RootState) => state.detail.isPending;
