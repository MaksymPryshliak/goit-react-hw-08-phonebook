import { Stack, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      spacing={3}
    >
      <Button variant="text" >
        <NavLink to="/login">Log In</NavLink>
      </Button>
      <Button variant="contained" >
        <NavLink to="/register">Register</NavLink>
      </Button>
    </Stack>
  );
};