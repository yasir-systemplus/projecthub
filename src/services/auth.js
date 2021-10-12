import {Auth} from 'aws-amplify';

/**
 *
 * @param {String} username Username
 * @param {String} password Password
 * @returns Promise<CognitoUser | any>
 */
export const loginToAWS = (username, password) => {
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

export const currentUser = () => {
  return Auth.currentAuthenticatedUser();
};

export const forgotPassword = email => {
  return Auth.forgotPassword(email);
};

export const forgotPasswordSubmit = (username, code, password) => {
  return forgotPasswordSubmit(username, code, password);
};

export const AWSLogout = () => {
  return Auth.signOut();
};

export const currentUserInfo = () => {
  return Auth.currentUserInfo();
};
