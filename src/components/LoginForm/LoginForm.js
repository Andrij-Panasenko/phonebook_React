import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Must be filled'),
  password: Yup.string()
    .min(6, 'Uncorrect password')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          dispatch(logIn(values));
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Email:
            <Field name="email" type="email" />
            <ErrorMessage name="email" />
          </label>

          <label>
            Password:
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};
