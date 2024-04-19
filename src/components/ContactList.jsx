export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <button onClick={() => removeContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
