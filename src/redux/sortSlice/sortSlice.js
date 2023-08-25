// actionTypes.js
export const SET_SORT_BY = 'SET_SORT_BY';
export const RESET_SORT_BY = 'RESET_SORT_BY';

export const sortOptions = {
  OLDEST: 'oldest',
  NEWEST: 'newest',
  RANDOM: 'random',
  NORMAL: 'normal',
};

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const resetSortBy = () => ({
  type: RESET_SORT_BY,
});

export const selectSortBy = (state) => state.sort.sortBy;

// sortReducer.js
import { sortOptions } from './actionTypes';

const initialState = {
  sortBy: sortOptions.NORMAL,
};

const sortSlice = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case RESET_SORT_BY:
      return {
        ...state,
        sortBy: sortOptions.NORMAL,
      };
    default:
      return state;
  }
};

export default sortSlice;
