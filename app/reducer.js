import { combineReducers } from 'redux';

function seriesInfo(state = null, action) {
  switch (action.type) {
    case 'SERIES_INFO@LOAD_COMPLETE':
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  seriesInfo
});
