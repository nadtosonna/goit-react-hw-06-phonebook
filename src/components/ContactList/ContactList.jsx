import PropTypes from 'prop-types';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-slice';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactList.module.css';
import Avatar from 'react-avatar';

export const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const contactsToDisplay = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter));

    return (
        <ul className={css.contactList}>
            {contacts.length > 0 ? (contactsToDisplay.map(contact => {
                return (
                    <li key={contact.id} id={contact.id} className={css.item}>
                        <Avatar name={contact.name} round={true} size="35"/>
                        <p className={css.contact}>{`${contact.name}: ${contact.number}`}</p>
                        <button onClick={() => {
                            dispatch(deleteContact(contact.id));
                        }} className={css.delBtn}>
                            <AiOutlineMinusCircle size={30} />
                        </button>
                    </li>
                )
            })) : <p className={css.emptyList}>Your Contact List is empty.</p>
        }
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
};