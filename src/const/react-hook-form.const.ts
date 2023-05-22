import { regexpEmail } from '.';

export const inputEmailValidation = {
  pattern: {
    value: regexpEmail,
    message: 'Email address is invalid',
  },
  required: {
    value: true,
    message: 'Email address is required',
  },
};
export const inputUsernameValidation = {
  required: {
    value: true,
    message: 'Username is required',
  },
};
export const inputPasswordValidation = {
  required: {
    value: true,
    message: 'Password is required',
  },
};
