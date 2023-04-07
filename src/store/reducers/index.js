import { combineReducers } from 'redux';
import spaceTourReducer from './spaceTourReducer';


const rootReducer = combineReducers({
    spaceTours: spaceTourReducer,

});

export default rootReducer;
