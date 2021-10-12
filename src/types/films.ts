export interface FilmsState {
  films: SearchModel[]
  loading: boolean
  error: string | null
}

export interface SearchModel {
  ['Title']: string,
  ['Year']: number,
  ['imdbID']: string,
  ['Type']: string,
  ['Poster']: string,
}
export interface FilmModel {
  ['Title']: string,
  ['Year']: number,
  ['imdbID']: string,
  ['Rated']: string,
  ['Released']: Date,
  ['Runtime']: string,
  ['Genre']: string,
  ['Director']: string,
  ['Writer']: string,
  ['Actors']: string,
  ['Plot']: string,
  ['Language']: string,
  ['Country']: string,
  ['Awards']: string,
  ['Ratings']: any[],
  ['imdbRating']: number,
  ['imdbVotes']: number,
  ['Type']: string,
  ['Poster']: string,
}


export enum FilmsActionTypes {
  FETCH_FILMS = 'FETCH_FILMS',
  FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS',
  FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR',
}

interface FetchFilmsAction {
  type: FilmsActionTypes.FETCH_FILMS
}

interface FetchFilmsSuccess {
  type: FilmsActionTypes.FETCH_FILMS_SUCCESS
  payload: SearchModel[]
}
interface FetchFilmsErrorAction {
  type: FilmsActionTypes.FETCH_FILMS_ERROR
  payload: string
}
export type FilmsAction = FetchFilmsAction | FetchFilmsErrorAction | FetchFilmsSuccess