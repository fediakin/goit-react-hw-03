import { PiUser } from 'react-icons/pi';
import { PiPhone } from 'react-icons/pi';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onClick }) {
  return (
    <>
      <div className={css.contactInfoWrappper}>
        <p className={css.contactInfo}>
          <PiUser size={20} /> {name}
        </p>
        <p className={css.contactInfo}>
          <PiPhone size={20} /> {number}
        </p>
      </div>

      <button
        className={css.contactBtn}
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
