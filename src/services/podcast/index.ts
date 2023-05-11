import { Podcast, PodcastDetail } from "./entities";
import { doGet, doGetAll } from "./requests";

export type { Podcast, PodcastDetail };


export default {
  getAll: doGetAll,
  get: doGet
}
