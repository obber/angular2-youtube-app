import { NEW_QUERY, NEW_RESULTS, NEW_SELECTION } from './actionTypes';

export const newQuery = (text) => ({
  type: NEW_QUERY,
  payload: {
    text
  }
});

export const newResults = (results) => ({
  type: NEW_RESULTS,
  payload: {
    results
  }
});

export const selectVideo = (videoId) => ({
  type: NEW_SELECTION,
  payload: {
    currentVideo: videoId
  }
});
