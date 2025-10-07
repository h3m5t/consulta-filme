export interface FilmeResumo {
  Title: string;
  Year: string;
  imdbID: string; 
  Type: string;   
  Poster: string; 
}

export interface FilmeDetalhado {
  Title: string;
  Year:string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Poster: string;
  imdbRating: string; 
  imdbID: string;
}

export interface RespostaBuscaOMDb {
  Search: FilmeResumo[];
  totalResults: string;
  Response: string; 
}


