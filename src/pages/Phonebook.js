import { useDispatch, useSelector } from 'react-redux';
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
    </>
  );
}
