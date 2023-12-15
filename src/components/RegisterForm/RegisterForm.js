import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
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
  const dispatch = useDispatch();

  // const submit = e => {
  //   e.preventDefault();

  //   const form = e.currentTarget;

  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  // }

  return (
    <>
      {/* <form onSubmit={submit}>
        <input name="name" />
        <input name="email" />
        <input name="password" />
        <button>submit</button>
      </form> */}
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
          <label>
            Name:
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </label>
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
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};
