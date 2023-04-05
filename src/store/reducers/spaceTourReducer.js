import { FETCH_TOURS_REQUEST, FETCH_TOURS_SUCCESS, FETCH_TOURS_ERROR } from '../actions/spaceTourActions';

const initialState = {
    loading: false,
    tours: [],
    error: ''
};

const spaceTourReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOURS_REQUEST:
            return { ...state, loading: true };
        case FETCH_TOURS_SUCCESS:
            return { ...state, loading: false, tours: action.payload, error: '' };
        case FETCH_TOURS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default spaceTourReducer;
