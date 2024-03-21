import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

function App() {
  return (
    <div className={css.container}>
      <h1 className={css.containerItem}>Phonebook</h1>

      <div className={css.containerItem}>
        <ContactForm />
      </div>

      <div className={css.containerItem}>
        <SearchBox />
      </div>

      <div className={css.containerItem}>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
