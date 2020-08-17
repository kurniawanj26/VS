import {LIKE_ALL} from './Constants';

export const likeAll = (images) => {
  return async (dispatch) => {
    images.forEach((val) => {
      val.like++;
    });

    dispatch({
      type: LIKE_ALL,
      payload: images,
    });
  };
};
