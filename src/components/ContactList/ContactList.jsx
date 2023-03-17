import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Typography, Button } from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  return (
    <ul>
      {filterContacts.map(contact => {
        return (
          <li key={nanoid()} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px'}}>
            <Typography variant="h6" component="p">
              <b>{contact.name}:</b> {contact.number}
            </Typography>
            <Button
              onClick={() => dispatch(deleteContact(contact.id))}
              type="buttton"
              sx={{backgroundColor: '#bec7cb'}}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};