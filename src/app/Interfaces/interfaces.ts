export interface MovieReponses {
    page:          number;
    total_results: number;
    total_pages:   number;
    results:       Pelicula[];
}

export interface Pelicula {
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    poster_path:       string;
    id:                number;
    adult:             boolean;
    backdrop_path:     string;
    original_language: string;
    original_title:    string;
    genre_ids:         number[];
    title:             string;
    vote_average:      number;
    overview:          string;
    release_date:      Date;
}
export interface PeliculaDetalle {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: any;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: Productioncompany[];
    production_countries?: Productioncountry[];
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: Spokenlanguage[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }
  
  interface Spokenlanguage {
    iso_639_1: string;
    name: string;
  }
  
  interface Productioncountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface Productioncompany {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  
  export interface RespuestaCredits {
    id: number;
    cast: Cast[];
    crew: Crew[];
  }
  
  export interface Crew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path?: string;
  }
  
  export interface Cast {
    cast_id?: number;
    character?: string;
    credit_id?: string;
    gender?: number;
    id?: number;
    name?: string;
    order?: number;
    profile_path?: string;
  }

  export interface SearchResponse {
    page:          number;
    total_results: number;
    total_pages:   number;
    results:       Result[];
}

export interface Result {
    popularity:        number;
    id:                number;
    video:             boolean;
    vote_count:        number;
    vote_average:      number;
    title:             string;
    release_date:      Date;
    original_language: OriginalLanguage;
    original_title:    string;
    genre_ids:         number[];
    backdrop_path:     null | string;
    adult:             boolean;
    overview:          string;
    poster_path:       null | string;
}

export enum OriginalLanguage {
    Da = "da",
    En = "en",
    It = "it",
    Ro = "ro",
}

export interface SerieReponses {
  page:          number;
  total_results: number;
  total_pages:   number;
  results:       Serie[];
}

export interface Serie {
  original_name:     string;
  genre_ids:         number[];
  name:              string;
  popularity:        number;
  vote_count:        number;
  first_air_date:    Date;
  backdrop_path:     null | string;
  original_language: OriginalLanguage;
  id:                number;
  vote_average:      number;
  overview:          string;
  poster_path:       string;
}
  