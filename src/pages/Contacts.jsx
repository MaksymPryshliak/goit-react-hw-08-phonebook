import { fetchContacts } from "redux/contacts/contactsOperations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Stack, Typography } from '@mui/material';

export const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <Stack direction="row"
        spacing={2}
        justifyContent="space-around"
        sx={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div>
                <Typography variant="h6" component="h6" sx={{ mt: 2, textAlign: 'center' }}>Add Contact</Typography>
                <ContactForm/>
            </div>
            <div style={{minWidth: '450px'}}>
                <Typography variant="h6" component="h6" sx={{ mt: 2, textAlign: 'center' }}>Contacts</Typography>
                <Filter/>
                <ContactList/>
            </div>
        </Stack>
    )
}

