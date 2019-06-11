import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response});
  };
};

//equivalent
// export const fetchPosts = () => async dispatch => {
//  const response = await jsonPlaceholder.get('/post');
//  dispatch({ type: 'FETCH_POSTS', payload: response});
//};