import * as constants from '../constants/index';
import thunk from 'redux-thunk';
import { action } from './index';

export function onSaveState() {
  return (dispatch, getState) => {
    const state = JSON.stringify(getState());
    const url = 'data:text/json;charset=utf8,' + encodeURIComponent(state);
    window.open(url, '_blank');
    window.focus();
  }
}
