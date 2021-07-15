import axios from 'axios';
import { apiBaseUrl, headers, params } from './../Utils/Constants'
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';
import { API_KEY } from '../secret'


export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })
/*
        return axios.get(`${apiBaseUrl}`, {headers, params})
            .then(res => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err})
            });
    }
    */
    fetch(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&ids=BTC,ETH,XRP,BCH,LTC,DASH,XEM,BCC,XMR,NEO&interval=1d,7d&convert=USD&per-page=10&page=1`)
        .then(response => response.json())
        .then(data => dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err}))
    }
}