// import { GlobalStyle } from './GlobalStyle';

// import { Wrapper } from './Wrapper.styled';
// import { ContactAddForm } from './ContactAddForm/ContactAddForm';
// import { ContactList } from './ContactList/ContactList';
// import { Title } from './Title/Title';
// import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectIsLoading } from 'redux/seceltors';
import { Helmet } from 'react-helmet';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { selectIsLoading } from 'redux/seceltors';
import { fetchContacts } from 'redux/operations';
import { Wrapper } from 'components/Wrapper.styled';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Title } from 'components/Title/Title';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { GlobalStyle } from 'components/GlobalStyle';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading
        ? Notiflix.Loading.dots('Please, wait...')
        : Notiflix.Loading.remove()}
      <Wrapper>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>

        <ContactAddForm />
        <Title title="Contacts" />
        <Filter />
        <ContactList />
      </Wrapper>
      <GlobalStyle />
    </>
  );
}
