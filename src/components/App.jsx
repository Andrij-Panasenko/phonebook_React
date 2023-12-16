// import { GlobalStyle } from './GlobalStyle';

// import { Wrapper } from './Wrapper.styled';
// import { ContactAddForm } from './ContactAddForm/ContactAddForm';
// import { ContactList } from './ContactList/ContactList';
// import { Title } from './Title/Title';
// import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { selectIsLoading } from 'redux/seceltors';
// import Notiflix from 'notiflix';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
            />
          }
        />

        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
        <Route />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       {isLoading
//         ? Notiflix.Loading.dots('Please, wait...')
//         : Notiflix.Loading.remove()}
//       <Wrapper>
//         <h1>Phonebook</h1>
//         <ContactAddForm />
//         <Title title="Contacts" />
//         <Filter />
//         <ContactList />
//       </Wrapper>
//       <GlobalStyle />
//     </>
//   );
// };
