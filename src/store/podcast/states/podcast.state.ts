import { Podcast } from "../../../services";

interface GeneralState {
  error: string | null;
  isPending: boolean;
}

export interface PodcastListState extends GeneralState {
  list: Podcast[];
}
