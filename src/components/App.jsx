import { useState } from 'react';
import { ContactForm } from './Phonebook';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = event => {
    setContacts(prevContacts => [...prevContacts, event]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
    </div>
  );
};
