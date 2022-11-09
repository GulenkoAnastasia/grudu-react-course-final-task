import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().trim().min(2).required('Please enter a username'),
  password: yup.string().trim().min(8).max(256).required()
});

export const signupShema = yup.object().shape({
  email: yup.string().trim().email('Please enter a valid email').required(),
  username: yup.string().trim().min(1).required(),
  password: yup.string().trim().min(8).max(256).required(),
  fullname: yup.string().trim().min(1).max(512).matches(/\s/g, 'Please enter first and second name').required()
});
