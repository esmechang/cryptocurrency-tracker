import axios from 'axios';
import { apiBaseUrl, headers, params } from './../Utils/Constants'
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';


export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseUrl}`, {headers, params})
            .then(res => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err})
            });
    }
}