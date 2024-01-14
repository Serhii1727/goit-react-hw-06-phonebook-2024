import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import ContactListItem from 'components/ContactListItem';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <ul className={css.list}>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
    </ul>
  );
}
