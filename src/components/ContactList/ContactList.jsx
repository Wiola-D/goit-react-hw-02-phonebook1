export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.length === 0 && <li>Jan Kowalski: 123-456-789</li>}
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button onClick={() => removeContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
