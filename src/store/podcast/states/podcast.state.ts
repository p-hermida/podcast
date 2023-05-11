import { Podcast, PodcastDetail } from "../../../services";

interface GeneralState {
  error: string | null;
  isPending: boolean;
}

export interface PodcastListState extends GeneralState {
  list: Podcast[];
}

export interface PodcastDetailState extends GeneralState {
  detail: PodcastDetail | null;
}
