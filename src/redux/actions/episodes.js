import { SET_ALL_DATA, SET_SELECTED_ROW } from "../action-types/episodes";


export const setAllEpisodes = payload => ({
  type: SET_ALL_DATA,
  payload,
});

export const setSelectedEpisode = payload => ({
  type: SET_SELECTED_ROW,
  payload
});