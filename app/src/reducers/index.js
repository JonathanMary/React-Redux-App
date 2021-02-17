import { FETCH_NAME } from '../actions';

const initialState = {
    "item": {
      "id": "place-holder",
      "name": "Loading...",
      "symbol": "PLH",
      "market_cap_rank": 420,
      "thumb": "https://assets.coingecko.com/coins/images/13232/thumb/kira_logo.jpg?1606570162",
      "large": "https://assets.coingecko.com/coins/images/13232/large/kira_logo.jpg?1606570162",
      "score": 0
    }
  }



export const reducer = (state= initialState, action) => {
    //console.log("action.payload: ", action.payload);
    
    switch(action.type){
        case FETCH_NAME:
            return {
                ...state,
                item: action.payload,
            };
        default:
            return state;
    }
}