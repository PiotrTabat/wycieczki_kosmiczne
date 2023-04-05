import axios from 'axios';

const apiKey = '1gujLAlRlQib2qxyWsmzCgq9QxdUpo5yRqwfTKNG';

export const FETCH_TOURS_REQUEST = 'FETCH_TOURS_REQUEST';
export const FETCH_TOURS_SUCCESS = 'FETCH_TOURS_SUCCESS';
export const FETCH_TOURS_ERROR = 'FETCH_TOURS_ERROR';

export const fetchToursRequest = () => {
    return { type: FETCH_TOURS_REQUEST };
};

export const fetchToursSuccess = (tours) => {
    return { type: FETCH_TOURS_SUCCESS, payload: tours };
};

export const fetchToursError = (error) => {
    return { type: FETCH_TOURS_ERROR, payload: error };
};

export const fetchTours = () => {
    return async (dispatch) => {
        dispatch(fetchToursRequest());
        try {
            const response = await axios.get('https://api.nasa.gov/planetary', {
                params: {
                    api_key: apiKey
                }
            });


            dispatch(fetchToursSuccess(response.data));
        } catch (error) {
            dispatch(fetchToursError(error.message));
        }
    };
};
