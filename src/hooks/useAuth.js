import React, {useContext} from 'react';
import {removeUser} from '../services/authStorage';
import AuthContext from '../context/AuthContext';
import {setUserToLocal} from '../services/authStorage';
import {loginToAWS, currentUserInfo, AWSLogout} from '../services/auth';

export default function useAuth() {
  const {user, setUser} = useContext(AuthContext);

  const logout = async () => {
    setUser(null);
    removeUser();
    await AWSLogout();
  };

  const login = async (username, password) => {
    return loginToAWS(username, password).then(currentUser => {
      currentUserInfo().then(userInfo => {
        setUser(userInfo);
        setUserToLocal(userInfo);
      });
      return currentUser;
    });
  };

  return {user, login, logout};
}
