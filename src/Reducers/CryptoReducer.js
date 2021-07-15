import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    erroMessage: null,
};


export default function(state = [], action) {
    switch(action.type) {
        // when we are fetching the data and showing the spinner
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                erroMessage: null
            });
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                erroMessage: null
            });
        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            })
        default:
            return state;
    }
}