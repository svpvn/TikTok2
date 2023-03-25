import appReducer from './appReducer';

//combineReducers : gom tất cả reducer lại với nhau thành 1
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;
