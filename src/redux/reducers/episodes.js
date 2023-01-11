import {SET_ALL_DATA, SET_SELECTED_ROW} from "../action-types/episodes"
const initialState = {
    episodeList: [],
    selectedEpisode: null,
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_ALL_DATA: 
        return {
          ...state,
          episodeList: action.payload
        }
      case SET_SELECTED_ROW: 
        return {
          ...state,
          selectedEpisode: action.payload
        }
      default:
        return state;
    }
  }
  