import axios from 'axios';
import { queryProperties } from '../../helper/query';

export const FetchInitialEstate = async () => {
  const data = await axios.get(queryProperties);
  return {
    type: 'FETCH_INITIAL_ESTATE',
    payload: data.data,
  };
};

export const readSearch = (searchSelected) => {
  return {
    type: 'UPDATE_SEARCH',
    payload: searchSelected,
  };
};

export const Province = (provinces) => {
  return {
    type: 'UPDATE_PROVINCE',
    payload: provinces,
  };
};
