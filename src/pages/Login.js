import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function logIn() {
  return (
    <>
      <Helmet>
        <title>login page</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
