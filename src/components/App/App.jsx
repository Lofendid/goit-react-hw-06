import css from './App.module.css';

import contactsData from '../../data/contacts.json';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));

    return contactsFromLS || contactsData;
  });
  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContactFunction(newContact) {
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, newContact];
      return updatedContacts;
    });
  }
  function deleteContactFunction(id) {
    const butId = id;
    const updatedContacts = contacts.filter(contact => contact.id !== butId);
    setContacts(updatedContacts);
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(value.toLowerCase().trim())
  );

  return (
    <div className={css.container}>
      <h1 className={css.containerItem}>Phonebook</h1>

      <div className={css.containerItem}>
        <ContactForm addContactFunction={addContactFunction} />
      </div>

      <div className={css.containerItem}>
        <SearchBox value={value} setValue={setValue} />
      </div>

      <div className={css.containerItem}>
        <ContactList
          filteredContacts={filteredContacts}
          deleteContactFunction={deleteContactFunction}
        />
      </div>
    </div>
  );
}

export default App;
