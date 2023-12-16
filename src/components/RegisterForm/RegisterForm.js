import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import {
  RegisterWrapp,
  
  Field,
  ErrorMessage,
  Button,
  Label,
} from './RegisterForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short!').required('Name is required'),
  email: Yup.string().required('Must be filled'),
  password: Yup.string()
    .min(6, 'Password is too short, minimum length is 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])/,
      'Password must contain at least one lowercase letter and one number'
    )
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <RegisterWrapp>
      {/* // кдери для логіну {
        email: "qwewq@mail.com", 
      name: "qwewq", 
      password: "qwewq12321"} */}
      <Formik
        initialValues={{ email: '', name: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log('values', values);
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <Form>
          <Label>
            Name:
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />
          </Label>
          <Label>
            Email:
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />
          </Label>

          <Label>
            Password:
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="span" />
          </Label>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </RegisterWrapp>
  );
};
