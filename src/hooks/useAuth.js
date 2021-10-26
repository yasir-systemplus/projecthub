import React, {useState, useEffect} from 'react';
import {loginToAWS, currentUserInfo, AWSLogout} from '~services/auth';
import {Auth, Hub, API, graphqlOperation} from 'aws-amplify';
import * as queries from '~graphql/queries';
import * as mutations from '~graphql/mutations';

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
      .then(async authUserData => {
        // Getting authenticated user from db
        try {
          const {
            data: {getUser: dbUser},
          } = await API.graphql(
            graphqlOperation(queries.getUser, {
              id: authUserData.attributes.sub,
            }),
          );

          if (dbUser) {
            try {
              await API.graphql({
                query: mutations.updateUser,
                variables: {
                  input: {
                    id: authUserData.attributes.sub,
                    phoneNumber: authUserData.attributes.phone_number,
                    phoneNumberVerified:
                      authUserData.attributes.phone_number_verified,
                    email: authUserData.attributes.email,
                    emailVerfied: authUserData.attributes.email_verified,
                  },
                },
              });
            } catch (error) {
              console.log('Error on updating db user');
            }
          } else {
            try {
              await API.graphql({
                query: mutations.createUser,
                variables: {
                  input: {
                    id: authUserData.attributes.sub,
                    phoneNumber: authUserData.attributes.phone_number,
                    phoneNumberVerified:
                      authUserData.attributes.phone_number_verified,
                    email: authUserData.attributes.email,
                    emailVerfied: authUserData.attributes.email_verified,
                    userType: '0001',
                  },
                },
              });
            } catch (error) {
              console.log('error on creating db user', error);
            }
          }
        } catch (error) {
          console.log('error from db');
        }

        const {
          data: {getUser: dbUser},
        } = await API.graphql(
          graphqlOperation(queries.getUser, {
            id: authUserData.attributes.sub,
          }),
        );

        return {
          ...authUserData,
          ...dbUser,
        };
      })
      .catch(e => console.log('Not signed in', e));
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

  return {user, login, logout};
}
