export interface MovieInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailsInterface {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: {id: number, name: string}[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {id: number, logo_path: string | null, name: string, origin_country: string}[];
  production_countries: {iso_3166_1: string, name: string}[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {english_name: string, iso_639_1: string, name: string}[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieCreditsInterface {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface MovieImagesInterface {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface MovieReviewsInterface {
  author: string;
  author_details: {
    avatar_path: string | null;
    name: string;
    rating: number | null;
    username: string;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface MovieProps {
  data: MovieInterface;
}

export interface MovieProviderInterface {
display_priority: number, 
logo_path: string,
provider_id: number,
provider_name: string;
}
