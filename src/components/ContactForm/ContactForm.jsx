import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { Stack, TextField, Box, Button } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const onSubmitFrom = evt => {
    evt.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return toast.error(`This email is already used`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Stack>
      <form onSubmit={onSubmitFrom}>
        <Box sx={{ width: '250px' }}>
          <TextField
            label="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
            variant="filled"
            color="primary"
            sx={{
              mt: 2,
              border: '1px solid #28627c',
              overflow: 'hidden',
              borderRadius: '5px',
              backgroundColor: '#edf9fe',
            }}
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number"
            variant="filled"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              border: '1px solid #28627c',
              overflow: 'hidden',
              borderRadius: '5px',
              backgroundColor: '#edf9fe',
            }}
            value={number}
            onChange={handleChange}
          />
        </Box>

        <Button type="submit" variant='outlined' sx={{mt: 2}}>Add contact</Button>
      </form>
    </Stack>
  );
};