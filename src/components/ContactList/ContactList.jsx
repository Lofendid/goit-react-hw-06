import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

export default function ContactList({
  filteredContacts,
  deleteContactFunction,
}) {
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContactFunction={deleteContactFunction}
          />
        );
      })}
    </ul>
  );
}
