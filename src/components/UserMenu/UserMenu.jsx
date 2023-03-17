import avatar from '../../images/profileImage.png';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Stack, Avatar, Typography, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant='outlined' sx={{mr: 6}} color="secondary">
        <Link to="/contacts">
          Contacts
        </Link>
      </Button>
      <Avatar alt="test user" src={avatar} />
      <Typography sx={{color: 'black', mr: 3}}>Hello, {user.name}</Typography>
      <Button variant='contained' type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Stack>
  );
};