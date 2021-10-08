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

export const completeNewPassword = (user, newPassword) => {
  // const {requiredAttributes} = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
  return Auth.completeNewPassword(
    user, // the Cognito User Object
    newPassword, // the new password
    // OPTIONAL, the required attributes
    // {
    //   email: 'xxxx@example.com',
    //   phone_number: '1234567890',
    // },
  );
};
