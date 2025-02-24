import React, { useState } from 'react';
import { AppBar, Button, Stack, Snackbar } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

const SideNav = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<{ isVisible: boolean }>(({ theme, isVisible }) => ({
  width: '80px',
  height: '100vh',
  left: isVisible ? 0 : '-70px',
  right: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'background.paper',
  boxShadow: 'none',
  borderRight: `1px solid ${theme.palette.divider}`,
  transition: 'left 0.3s ease',
  '&:hover': {
    left: 0,
  },
}));

const NavTrigger = styled('div')({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '20px',
  height: '100vh',
  zIndex: 1199, // Just below AppBar's z-index
});

const NavButton = styled(Button)(({ theme }) => ({
  minWidth: '80px',
  height: '80px',
  flexDirection: 'column',
  padding: theme.spacing(1),
  borderRadius: 0,
  gap: theme.spacing(0.5),
  fontSize: '0.75rem',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
  },
}));

const Navbar = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      setShowMessage(true);
    }
  };

  const messages = [
    "You're already here! 😄",
    'Going somewhere? Oh wait... 🤔',
    "That's where you are! 👀",
    "Click harder, maybe it'll work 😉",
    'Déjà vu? 🌟',
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <>
      <NavTrigger onMouseEnter={handleMouseEnter} />
      <SideNav
        position="fixed"
        isVisible={isVisible}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Stack spacing={1}>
          <NavButton
            component={RouterLink}
            to="/"
            onClick={() => handleNavClick('/')}
            color={location.pathname === '/' ? 'primary' : 'inherit'}
          >
            <HomeIcon />
            Home
          </NavButton>
          <NavButton
            component={RouterLink}
            to="/career"
            onClick={() => handleNavClick('/career')}
            color={location.pathname === '/career' ? 'primary' : 'inherit'}
          >
            <WorkIcon />
            Career
          </NavButton>
          <NavButton
            component={RouterLink}
            to="/skills"
            onClick={() => handleNavClick('/skills')}
            color={location.pathname === '/skills' ? 'primary' : 'inherit'}
          >
            <CodeIcon />
            Skills
          </NavButton>
          <NavButton
            component={RouterLink}
            to="/contact"
            onClick={() => handleNavClick('/contact')}
            color={location.pathname === '/contact' ? 'primary' : 'inherit'}
          >
            <EmailIcon />
            Contact
          </NavButton>
        </Stack>
      </SideNav>

      <Snackbar
        open={showMessage}
        autoHideDuration={2000}
        onClose={() => setShowMessage(false)}
        message={randomMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </>
  );
};

export default Navbar;
