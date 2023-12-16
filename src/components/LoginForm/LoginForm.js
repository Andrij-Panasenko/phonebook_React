import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  Button,
  LoginWrapp,
  Field,
  Label,
  ErrorMessage,
} from './LoginForm.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Must be filled'),
  password: Yup.string()
    .min(6, 'Uncorrect password')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  // кдери для логіну {email: "qwewq@mail.com", name: "qwewq", password: "qwewq12321"}

  return (
    <LoginWrapp>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(logIn(values));
          actions.resetForm();
        }}
      >
        <Form>
          <Label>
            Email:
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span"/>
          </Label>

          <Label>
            Password:
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="span"/>
          </Label>
          <Button type="submit">Log In</Button>
        </Form>
      </Formik>
    </LoginWrapp>
  );
};
