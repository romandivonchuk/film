import { FilmsAction,FilmsActionTypes } from './../../types/films';
import { Dispatch } from 'redux';

export const fetchFilms = (title: string) => {
  return async (dispatch: Dispatch<FilmsAction>) => {
    try {
      dispatch({type: FilmsActionTypes.FETCH_FILMS});
      const resJson = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=1269e0bf`);
      const res = await resJson.json();
      dispatch({type: FilmsActionTypes.FETCH_FILMS_SUCCESS, payload: res['Search']});
    } catch (error) {
      dispatch({type: FilmsActionTypes.FETCH_FILMS_ERROR, payload: 'Error happen when try loading films'});
    }
  }
}