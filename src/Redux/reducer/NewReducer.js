import { GET_ALL_NEWS } from "../constants/NewsConstant";

const initialState = {
  listNews: [],
};

export const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      return { ...state, listNews: action.data };

    default:
      return state;
  }
};
