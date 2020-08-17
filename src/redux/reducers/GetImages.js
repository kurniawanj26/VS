import {
  GET_IMAGES,
  LIKE,
  DISLIKE,
  LIKE_ALL,
  DISLIKE_ALL,
  RESET_ALL,
} from '../actions/Constants';

const defaultState = {
  images: [],
  a: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      // console.log('OLD IMAGES', action.payload);
      return {
        ...state,
        a: action.payload,
        images: action.payload,
      };
    case LIKE_ALL:
      console.log('LIKE ALL', action.payload);
      return {
        ...state,
        images: action.payload,
      };
    case DISLIKE_ALL:
      console.log('DISLIKE ALL', action.payload);
      return {
        ...state,
        images: action.payload,
      };
    case RESET_ALL:
      console.log('RESET ALL', action.payload);
      return {
        ...state,
        images: action.payload,
      };
    case LIKE:
      console.log('LIKE', action.payload);
      return {
        ...state,
        a: action.payload,
        images: action.payload,
      };
    case DISLIKE:
      console.log('DISLIKE', action.payload);
      return {
        ...state,
        images: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
