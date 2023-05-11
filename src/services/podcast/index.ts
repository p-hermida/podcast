import { Podcast } from "./entities";
import { doGetAll } from "./requests";

export type { Podcast };


export default {
  getAll: doGetAll
}
