import { NEW_QUERY, NEW_RESULTS, NEW_SELECTION } from '../actions/actionTypes';

const initialState = {
  lastQuery: '',
  queryResults: [],
  currentVideo: 'initial'
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_QUERY:
      return Object.assign({}, state, {
        lastQuery: action.payload.text
      });
    case NEW_RESULTS:
      return Object.assign({}, state, {
        queryResults: action.payload.results
      });
    case NEW_SELECTION:
      return Object.assign({}, state, {
        currentVideo: action.payload.currentVideo
      });
  }
  return initialState;
};

export { rootReducer };
