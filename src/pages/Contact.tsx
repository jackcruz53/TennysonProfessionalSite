import React from 'react';
import { Typography, Container, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 3),
  maxWidth: '800px',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2px',
  },
}));

const Message = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
}));

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    const subject = 'Interview Request';
    const body =
      "Hi Jack,\n\nI'd like to schedule an interview to discuss potential opportunities. I was impressed by your portfolio and would love to learn more about your experience.\n\nBest regards,";
    window.location.href = `mailto:jackcruztennyson@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <StyledContainer>
      <Title variant="h3" align="center" color="primary">
        Let&apos;s Connect
      </Title>

      <Message>
        Thank you for your interest in connecting! I&apos;m always excited to discuss new opportunities
        and collaborate with fellow developers.
      </Message>

      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <Button
          variant="outlined"
          size="large"
          fullWidth
          startIcon={<LinkedInIcon />}
          onClick={() => window.open('https://www.linkedin.com/in/jack-tennyson-86b29919b/', '_blank')}
          sx={{
            py: 1.5,
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
            },
          }}
        >
          Connect on LinkedIn
        </Button>

        <Button
          variant="contained"
          size="large"
          fullWidth
          startIcon={<EmailIcon />}
          onClick={handleEmailClick}
          sx={{ py: 1.5 }}
        >
          Send Email
        </Button>
      </Stack>
    </StyledContainer>
  );
};

export default Contact;
