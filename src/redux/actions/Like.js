import {LIKE} from './Constants';

export const like = (images, id) => {
  console.log('OLD IMAGES', images);
  return async (dispatch) => {
    images.forEach((val) => {
      val.id === id && val.like++;
    });

    dispatch({
      type: LIKE,
      payload: images,
    });
  };
};
