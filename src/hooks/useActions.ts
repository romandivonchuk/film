import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreator from '../store/action-creators/films'
export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreator,dispatch)
}