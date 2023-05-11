export interface Episode {
  id: number;
  title: string;
  date: string;
  duration: number;
  description: string;
  audioUrl: string;
}

export interface PodcastDetail {
  id: number;
  image: string;
  title: string;
  author: string;
  episodes: Episode[];
}
