import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import spaceTourReducer from './reducers/spaceTourReducer';

const rootReducer = combineReducers({
    spaceTours: spaceTourReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
