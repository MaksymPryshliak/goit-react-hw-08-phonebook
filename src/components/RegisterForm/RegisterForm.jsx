import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          label="Name"
          type="name"
          name="name"
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
          label="Email"
          type="email"
          name="email"
          variant="filled"
          required
          autoComplete="off"
          color="primary"
          sx={{
            mt: 2,
            border: '1px solid #28627c',
            overflow: 'hidden',
            borderRadius: '5px',
            backgroundColor: '#edf9fe',
          }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          variant="filled"
          required
          autoComplete="off"
          color="primary"
          sx={{
            mt: 2,
            border: '1px solid #28627c',
            overflow: 'hidden',
            borderRadius: '5px',
            backgroundColor: '#edf9fe',
          }}
        />
        <Typography variant="p" component="p" sx={{ mt: 2, padding: '0 100px' }}>
          Already have an account?{' '}
          <Link to="login" className={css.link}>
            Log In
          </Link>
        </Typography>
        <Button type="submit"  size="medium" variant="contained" sx={{ mt: 2 }}>Register</Button>
      </form>
    </div>
  );
};
