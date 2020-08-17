import {RESET_ALL} from './Constants';

export const resetAll = (images) => {
  return async (dispatch) => {
    images.forEach((val) => {
      val.like = 0;
    });

    dispatch({
      type: RESET_ALL,
      payload: images,
    });
  };
};
