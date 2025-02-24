import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography paragraph>
          Frontend Software Engineer with a passion for creating elegant user experiences.
        </Typography>
      </Paper>
    </Box>
  );
}

export default About; 