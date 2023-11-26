import { Item } from './app';

export interface IShortInformationOfMovie {
  modified: {
    time: string;
  };
  created?: {
    time: string;
  };
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  thumb_url: string;
  poster_url: string;
  year: number;
}

export interface IPagination {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  pageRanges: number;
}
export interface IMovie extends IShortInformationOfMovie {
  type: string;
  sub_docquyen: boolean;
  chieurap: boolean;
  time: string;
  episode_current: string;
  quality: string;
  lang: string;
  category: Item[];
  country: Item[];
}

export interface IEpisodeServerData {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}

export interface IEpisode {
  server_name: string;
  server_data: IEpisodeServerData[];
}
export interface IMovieDetail extends IMovie {
  content: string;
  is_copyright: boolean;
  trailer_url: string;
  episode_total: string;
  notify: string;
  showtimes: string;
  view: number;
  actor: string[];
  director: string[];
  episodes?: IEpisode[];
}

export interface ISeoOnPage {
  seoOnPage: {
    og_type: string;
    titleHead: string;
    seoSchema: {
      '@context': string;
      '@type': string;
      name: string;
      dateModified: string;
      dateCreated: string;
      url: string;
      datePublished: string;
      image: string;
      director: string;
    };
    descriptionHead: string;
    og_image: string[];
    updated_time: number;
    og_url: string;
  };
  titlePage?: string;
  breadCrumb: [
    {
      name: string;
      slug: string;
      position: number;
    }
  ];
  params: {
    slug: string;
    pagination: IPagination;
    filterCategory: string[];
    filterCountry: string[];
    filterYear: string;
    filterType: string;
    sortField: string;
    sortType: string;
  };
}

export interface IMovieWithSeo extends ISeoOnPage {
  item: IMovieDetail;
}
export interface IListMovieWithSeo extends ISeoOnPage {
  items: IMovieDetail[];
}
