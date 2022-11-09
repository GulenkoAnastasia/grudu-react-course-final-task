import * as yup from 'yup';

export interface UserData {
  username: string,
  password: string,
  email?: string,
  fullname?: string
}

export interface InitialValuesInfo {
  view: string
  initialValues: UserData,
  validationSchema: yup.ObjectSchema<any>
  onSubmit: (values: UserData) => Promise<any>
}

export interface TweetInfo {
  id: string,
  author_id: string,
  text: string
}