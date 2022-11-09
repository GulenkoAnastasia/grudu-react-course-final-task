import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().min(2).required('Pleases enter a username'),
  password: yup.string().min(8).max(256).required()
});

export const signupShema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  username: yup.string().min(1).required(),
  password: yup.string().min(8).max(256).required(),
  fullname: yup.string().min(1).max(512).required()
});
