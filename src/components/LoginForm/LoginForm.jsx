import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';
import { Button, TextField, Typography } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div style={{ maxWidth: 'fit-content', margin: '0 auto' }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          id="filled-hidden-label-normal"
          label="Email"
          type="email"
          name="email"
          variant="filled"
          required
          autoComplete="off"
          color="primary"
          sx={{
            mt: 8,
            border: '1px solid #28627c',
            overflow: 'hidden',
            borderRadius: '5px',
            backgroundColor: '#edf9fe',
          }}
        />
        <TextField
          id="filled-hidden-label-normal"
          label="Password"
          type="password"
          name="password"
          variant="filled"
          required
          autoComplete="off"
          color="primary"
          sx={{
            mt: 4,
            border: '1px solid #28627c',
            overflow: 'hidden',
            borderRadius: '5px',
            backgroundColor: '#edf9fe',
          }}
        />
        <Typography variant="p" component="p" sx={{ mt: 2, padding: '0 80px' }}>
          Still don't have an account? <Link to="/register" className={css.link}>
            Register
          </Link>
        </Typography>
        <Button type="submit" size="medium" variant="contained" sx={{ mt: 2 }}>
          Log In
        </Button>
      </form>
    </div>
  );
};
