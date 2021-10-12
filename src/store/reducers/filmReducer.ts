import { fetchFilms } from './../action-creators/films';

import { FilmsAction, FilmsActionTypes, FilmsState } from '../../types/films';


const initialState: FilmsState = {
  films: [],
  loading: false,
  error: null
}

export const filmsReducer = (state = initialState, action: FilmsAction): FilmsState => {
  switch (action.type) {
    case FilmsActionTypes.FETCH_FILMS:
      return {...state,  loading: true}
    case FilmsActionTypes.FETCH_FILMS_SUCCESS:
      return {...state, loading: false, films: action.payload}
    case FilmsActionTypes.FETCH_FILMS_ERROR:
      return {...state, loading: false, error: action.payload }
    default:
      return state
  }
}