import {getData, setData} from './storage';

export const setUserToLocal = user => {
  return setData('@authUser', user);
};

export const getUser = () => {
  return getData('@authUser');
};

export const removeUser = () => {
  return setUserToLocal('@authUser', '');
};
