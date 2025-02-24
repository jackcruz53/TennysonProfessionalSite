import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Fade } from '@mui/material';
import Navbar from './Navbar';
import LoadingScreen from './LoadingScreen';

const Layout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Short timeout to ensure smooth transition
    const timer = setTimeout(() => {
      setLoading(false);
      // Start showing content as loading fades out
      setTimeout(() => setShowContent(true), 300);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      <Fade in={!loading} timeout={300}>
        <Box sx={{ ml: '10px' }}>{showContent && <Outlet />}</Box>
      </Fade>
      <Fade in={loading} timeout={300}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          {loading && <LoadingScreen />}
        </Box>
      </Fade>
    </Box>
  );
};

export default Layout;
