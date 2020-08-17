import {GET_IMAGES} from './Constants';

export const getImages = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        'https://picsum.photos/v2/list?page=120&limit=3',
      );
      let json = await response.json();

      var updated = await json.map((v) => ({...v, like: 0}));

      dispatch({
        type: GET_IMAGES,
        payload: updated,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
