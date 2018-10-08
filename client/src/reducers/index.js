import { combineReducers } from 'redux';
import tracked_time from './tracked_time_reducer';


const rootReducer = combineReducers({
    tracked_time
});

export default rootReducer;