import css from './ContactList.module.css';
import Contact from '../contact/Contact';

export default function ContactList({ items, onDelete }) {
  return (
    <ul className={css.contactList}>
      {items.map(item => (
        <li className={css.contactItem} key={item.id}>
          <Contact contact={item} onClick={onDelete} />
        </li>
      ))}
    </ul>
  );
}
