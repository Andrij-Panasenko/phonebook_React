import { GlobalStyle } from './GlobalStyle';

import { Wrapper } from './Wrapper.styled';
import { ContactAddForm } from './ContactAddForm/ContactAddForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/seceltors';
import Notiflix from 'notiflix';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'))

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

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route/>
        </Route>
      </Routes>
  )
}
