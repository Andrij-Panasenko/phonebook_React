import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Wrapper } from 'components/Wrapper.styled';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Title } from 'components/Title/Title';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
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
