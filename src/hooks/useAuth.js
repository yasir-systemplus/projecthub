import React, {useState, useEffect} from 'react';
import {loginToAWS, currentUserInfo, AWSLogout} from '../services/auth';
import {Auth, Hub} from 'aws-amplify';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  const getUser = () => {
    return Auth.currentAuthenticatedUser()
      .then(userData => {
        console.log(userData);
        return userData;
      })
      .catch(() => console.log('Not signed in'));
  };

  const logout = async () => {
    await AWSLogout();
  };

  const login = async (username, password) => {
    return loginToAWS(username, password).then(currentUser => {
      currentUserInfo().then(userInfo => {
        setUser(userInfo);
      });
      return currentUser;
    });
  };
  console.log('rendering');
  return {user, login, logout};
}
