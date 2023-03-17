import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import { Typography, AppBar, Toolbar, Container } from '@mui/material';

export const Bars = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#4fc3f7' }}>
      <Toolbar disableGutters>
        <Container
          sx={{
            maxWidth: '1200px',
            alignItems: 'center',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              color: '#000',
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.1rem',
            }}
          >
            <Link to="/">PB</Link>
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Toolbar>
    </AppBar>
  );
};