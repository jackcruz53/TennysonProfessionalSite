import React from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';
import { Layout } from './components';
import { Home, Career, Skills, Contact } from './pages';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: 'rgba(30, 30, 30, 0.97)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(24, 98, 175, 0.15), rgba(0, 0, 0, 0) 50%), ' +
            'radial-gradient(circle at 100% 50%, rgba(144, 202, 249, 0.15), rgba(0, 0, 0, 0) 50%), ' +
            'radial-gradient(circle at 0% 50%, rgba(24, 98, 175, 0.15), rgba(0, 0, 0, 0) 50%)',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(30, 30, 30, 0.97)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 18, 18, 0.98)',
        },
      },
    },
  },
});

const globalStyles = {
  '.MuiTimelineItem-root': {
    '&::before': {
      flex: 0,
      padding: 0,
    },
  },
};

const App: React.FC = () => {
  return (
    <Router basename="/TennysonProfessionalSite">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="career" element={<Career />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
