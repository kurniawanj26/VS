import {DISLIKE} from './Constants';

export const dislike = (images, id) => {
  return async (dispatch) => {
    images.forEach((val) => {
      val.id === id && val.like !== 0 && val.like--;
    });

    dispatch({
      type: DISLIKE,
      payload: images,
    });
  };
};
