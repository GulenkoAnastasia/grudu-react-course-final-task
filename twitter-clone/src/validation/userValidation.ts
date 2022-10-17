import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  Username: yup.string().min(2).required('Please, enter a username'),
  Password: yup.string().min(8).max(256).required()
})

export const signupShema = yup.object().shape({
  Email: yup.string().email('Please enter a valid email').required('Required'),
  Username: yup.string().min(1).required(),
  Password: yup.string().min(8).max(256).required(),
  Fullname: yup.string().min(1).max(512).required()
})
