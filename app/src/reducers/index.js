import { FETCH_NAME } from '../actions';

const initialState = {
    "item": {
      "id": "",
      "name": "Loading...",
      "symbol": "",
      "market_cap_rank": null,
      "thumb": "",
      "large": "",
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