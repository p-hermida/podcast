interface PodcastIdAttributesModel {
  'im:id': number;
}

interface PodcastIdModel {
  attributes: PodcastIdAttributesModel;
}

interface PodcastNormalizeModel {
  label: string;
}

export interface PodcastModel {
  id: PodcastIdModel;
  'im:image': PodcastNormalizeModel[];
  'im:name': PodcastNormalizeModel;
  'im:artist': PodcastNormalizeModel;
}
