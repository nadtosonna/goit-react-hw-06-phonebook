import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchFilter } from "./SearchFilter/SearchFilter";
import { Section } from './Section/Section';
import css from './App.module.css';

export const App = () => {
  return (
      <div className={css.container}>
        <Section title="Phonebook">
           <ContactForm />
        </Section>
        <Section title="Contacts">
          <SearchFilter />
          <ContactList />
        </Section>
      </div>
    );
}