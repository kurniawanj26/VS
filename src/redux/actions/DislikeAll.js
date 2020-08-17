import {DISLIKE_ALL} from './Constants';

export const dislikeAll = (images) => {
  return async (dispatch) => {
    images.forEach((val) => {
      val.like !== 0 && val.like--;
    });

    dispatch({
      type: DISLIKE_ALL,
      payload: images,
    });
  };
};
