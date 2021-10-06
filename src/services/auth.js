import {Auth} from 'aws-amplify';

/**
 *
 * @param {String} username Username
 * @param {String} password Password
 * @returns Promise<CognitoUser | any>
 */
export const login = (username, password) => {
  return Auth.signIn({username, password});
};
