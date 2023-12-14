import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
  return (
    <>
      <Formik
        initialValues={{ email: '', name: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name:
            <Field name="name" type="text"/>
          </label>
          <label>
            Email:
            <Field name="email" type="email"/>
          </label>

          <label>
            Password:
            <Field name="password" type="password"/>
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
