import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import Options from './components/options/Options';
import contactsData from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    const data = window.localStorage.getItem('contacts');

    if (data !== null) return JSON.parse(data);
    return contactsData;
  });
  const [filter, setFilter] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onOpenForm = () => {
    setOpenForm(!openForm);
    if (openSearchBox) setOpenSearchBox(!openSearchBox);
  };
  const onOpenSearchBox = () => {
    setOpenSearchBox(!openSearchBox);
    if (openForm) setOpenForm(!openForm);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Options onForm={onOpenForm} onSearchBoxbox={onOpenSearchBox} />
      {openForm && <ContactForm onSubmit={addContact} />}
      {openSearchBox && <SearchBox value={filter} onFilter={setFilter} />}
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
