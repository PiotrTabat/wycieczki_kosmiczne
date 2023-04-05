import { combineReducers } from 'redux';
import spaceTourReducer from './spaceTourReducer';
// ... inne importy

const rootReducer = combineReducers({
    spaceTours: spaceTourReducer,
    // ... inne reducery
});

export default rootReducer;
