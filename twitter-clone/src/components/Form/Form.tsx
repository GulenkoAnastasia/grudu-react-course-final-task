import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { UserData } from '../../utils/types';
import { Button } from '../Button';
import { FormText } from '../FormText';
import { Input } from '../Input';
interface initialValuesInfo {
  view: string
  initialValues: UserData
  validationSchema: yup.ObjectSchema<any>
  onSubmit: (values: UserData) => Promise<string>
}

export const Form: React.FC<initialValuesInfo> = ({ view, initialValues, validationSchema, onSubmit}) => {
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <>
    <div className='form'>
      <form onSubmit={handleSubmit} className='form__content'>
        <h2>{view}</h2>
        {Object.entries(values).map(([key, value]) => {
          return <Input
            key={key}
            onChange={handleChange}
            value={value}
            handleBlur={handleBlur}
            type={key === 'password' ? 'password' : 'text'}
            text={key}
            error={errors[key as keyof UserData] &&
              touched[key as keyof UserData]
              ? errors[key as keyof UserData]
              : ''}
            id={key}>
            </Input>;
        })}
          <Button text={view}></Button>
      </form>
      <FormText view={view}></FormText>
    </div>
    </>
  );
};
