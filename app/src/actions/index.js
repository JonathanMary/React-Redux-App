import axios from 'axios';

export const FETCH_NAME = "FETCH_NAME";

export const getData = () => {
    return dispatch => {
        axios.get("https://api.coingecko.com/api/v3/search/trending")
             .then(res => dispatch(fetchName(res.data.coins)))
             .catch(err => console.log(err))
    }
}

export const fetchName = (name) => {
    return ({type: FETCH_NAME, payload: name})
}