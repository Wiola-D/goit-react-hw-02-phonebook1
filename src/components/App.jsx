import { useState } from 'react';
import { ContactForm } from './Phonebook';
import { ContactList } from './ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = event => {
    setContacts(prevContacts => [...prevContacts, event]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      <h2>Contacts</h2>

      <ContactList contacts={contacts} />
    </div>
  );
};
