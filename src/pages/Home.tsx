import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import maleaJack from '../assets/Malea+Jack_9.20.23-23.jpeg';
import guardPhoto from '../assets/88957087-8f5f-4618-a666-486f5806c366.jpeg';
import codingPhoto from '../assets/IMG_3956.jpeg';

const ContentWrapper = styled(Box)({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
});

const Section = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '20px',
  '@media (max-width: 800px)': {
    flexDirection: 'column',
    gap: '10px',
  },
});

const StyledImage = styled('img')({
  maxWidth: '180px',
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
});

const TextContent = styled(Box)({
  flex: 1,
  '& .MuiTypography-paragraph': {
    marginBottom: '0.5em',
  },
});

const Home: React.FC = () => {
  return (
    <ContentWrapper>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Welcome
      </Typography>

      <Section>
        <TextContent>
          <Typography paragraph>
            Hi, I'm Jack Tennyson, a software developer with a passion for creating elegant solutions 
            to complex problems. I specialize in full-stack development with a focus on React and 
            TypeScript. When I'm not coding, you can find me exploring the outdoors with my wife 
            or working on personal projects.
          </Typography>
        </TextContent>
        <StyledImage src={maleaJack} alt="Jack and Malea Tennyson" />
      </Section>

      <Section>
        <StyledImage src={guardPhoto} alt="National Guard Service" />
        <TextContent>
          <Typography paragraph>
            Beyond software development, I serve in the National Guard, where I've learned valuable 
            lessons in leadership, teamwork, and performing under pressure. This unique experience 
            has enhanced my ability to adapt quickly to changing situations and work effectively 
            in diverse teams.
          </Typography>
        </TextContent>
      </Section>

      <Section>
        <TextContent>
          <Typography paragraph>
            My journey in software development has been driven by a constant desire to learn and 
            grow. I believe in writing clean, maintainable code and building applications that 
            not only work well but are also enjoyable to use. I'm always excited to take on new 
            challenges and contribute to meaningful projects.
          </Typography>
        </TextContent>
        <StyledImage src={codingPhoto} alt="Coding Setup" />
      </Section>
    </ContentWrapper>
  );
};

export default Home; 