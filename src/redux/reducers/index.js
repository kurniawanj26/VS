import {combineReducers} from 'redux';
import GetImages from './GetImages';

const rootReducer = combineReducers({
  getImagesReducer: GetImages,
});

export default rootReducer;
