const GET_ARTICLE = 'GET_ARTICLE';

const fetchArticle = (article) => {
  return {
    type: GET_ARTICLE,
    article
  };
};

export const getArticle = (aid) => {
  return async (dispatch) => {
    try {
      const article
      dispatch(fetchArticle(article));
    } catch (err) {}
  };
};
