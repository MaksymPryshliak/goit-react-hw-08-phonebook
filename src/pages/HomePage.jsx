import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Button, Typography } from '@mui/material';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: 'fit-content', margin: '0 auto', border: '1px solid #4fc3f7', marginTop: '80px', padding: '24px 40px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 0 23px  #28627c'}}>
      <Typography variant="h2" component="h2" sx={{mt: 2, textAlign: 'center', mb: 3}}>Welcome to PhoneBook</Typography>
      <Typography variant="h4" component="h4" sx={{float: 'left'}}>Test User:</Typography>
      <Typography variant="h6" component="p" sx={{ml: 1}}>
        Login: <b>somelogin@ffff.com</b>
      </Typography>
      <Typography variant="h6" component="p" sx={{ml: 1}}>
        Password: <b>qweqweqwe</b>
      </Typography>
      {!isLoggedIn && (
        <div style={{marginTop: '16px'}}>
          <Button variant="contained" sx={{mr: 4, ml: 1}}>
            <Link to="/login">Log In</Link>
          </Button>
          <Button variant="outlined">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
