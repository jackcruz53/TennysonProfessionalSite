import React, { useState } from 'react';
import { Typography, Box, Paper, Collapse, Avatar, Button } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { styled } from '@mui/material/styles';
import { logos } from '../assets/logos';
import EmailIcon from '@mui/icons-material/Email';

interface JobDetails {
  company: string;
  role: string;
  period: string;
  location: string;
  narrative: string;
  details: string[];
  logo: string;
}

const jobs: JobDetails[] = [
  {
    company: 'Actblue',
    role: 'Senior Software Engineer',
    period: 'Feb 2024 – Feb 2025',
    location: 'Remote',
    narrative:
      "At ActBlue, I've stepped into a role that combines technical leadership with social impact. Working on a platform that processes billions in political donations has given me unique insights into building highly scalable, secure applications. I particularly enjoy mentoring other engineers while tackling complex technical challenges that directly impact democratic participation.",
    logo: logos.actblue,
    details: [
      'Led a multidisciplinary team in the end-to-end development and deployment of high-priority features across multiple quarters.',
      'Drove software architecture and design decisions, aligning technical initiatives with business objectives.',
      'Leveraged data-driven insights to identify areas of friction within the team, implementing agile methodologies that boosted productivity by 15%.',
    ],
  },
  {
    company: 'Pacific Northwest National Labs',
    role: 'Software Engineer II / Lead Engineer',
    period: 'May 2023 – Feb 2024',
    location: 'Portland, Oregon',
    narrative:
      'My time at PNNL exposed me to the intersection of scientific research and software engineering. Leading a major application modernization effort taught me valuable lessons about managing technical debt while maintaining critical functionality. I found particular satisfaction in transforming legacy systems into modern, maintainable codebases.',
    logo: logos.pnnl,
    details: [
      'Guided a $2 million React application through critical application updates including migrating to Typescript.',
      'Dockerized the application for modernized deployment on AWS, and developed a CI/CD pipeline.',
      'Ensured on-time delivery of key milestones through collaboration with stakeholders.',
    ],
  },
  {
    company: 'First Resonance',
    role: 'Frontend Engineer / Team Lead',
    period: 'Jul 2021 – May 2023',
    location: 'Remote',
    narrative:
      'At First Resonance, I grew from an individual contributor into a team lead role. Working on manufacturing software opened my eyes to the challenges of building intuitive interfaces for complex industrial processes. I discovered my passion for mentoring others and building strong, collaborative team cultures.',
    logo: logos.firstResonance,
    details: [
      'Led the on-call engineering team in increasing the bug resolution rate by 49% over 6 months.',
      'Created streamlined on-call procedures, improving error reporting, and conducting user interviews.',
      'Mentored two engineers through regular 1:1s and performance reviews, leading to a 20% improvement in team performance.',
    ],
  },
  {
    company: 'Quantime',
    role: 'Software Engineer',
    period: 'Dec 2019 – Jul 2021',
    location: 'Remote',
    narrative:
      'Starting at Quantime marked my entry into professional software development. This role provided a strong foundation in React and TypeScript while teaching me the importance of clean code and collaborative development. The fast-paced startup environment helped me develop adaptability and self-directed learning skills that have been valuable throughout my career.',
    logo: logos.quantime,
    details: [
      'Developed and maintained frontend applications using React and TypeScript.',
      'Collaborated with cross-functional teams to deliver high-quality software solutions.',
    ],
  },
];

const StyledTimelineItem = styled(TimelineItem)(({ theme }) => ({
  cursor: 'pointer',
  '& .MuiTimelineContent-root': {
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover': {
    '& .MuiTimelineDot-root': {
      backgroundColor: theme.palette.primary.main,
      transform: 'scale(1.2)',
      transition: 'all 0.3s ease-in-out',
    },
    '& .MuiPaper-root': {
      transform: 'scale(1.02)',
      boxShadow: theme.shadows[6],
    },
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  transition: 'all 0.3s ease-in-out',
  backgroundColor: theme.palette.background.paper,
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const DetailItem = styled(Typography)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.primary.main}`,
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(1),
  opacity: 0,
  transform: 'translateY(20px)',
  animation: 'slideIn 0.5s ease forwards',
  '@keyframes slideIn': {
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const LogoAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  border: `2px solid ${theme.palette.primary.main}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  height: '100%',
});

const Career: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const handleHireClick = () => {
    const subject = 'Interview Request';
    const body =
      "Hi Jack,\n\nI'd like to schedule an interview to discuss a potential role at our company.\n\nBest regards,";
    window.location.href = `mailto:jackcruztennyson@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <ContentWrapper>
      <Typography variant="h3" gutterBottom sx={{ color: 'primary.main' }}>
        Career Timeline
      </Typography>
      <Timeline position="alternate">
        {jobs.map((job) => (
          <StyledTimelineItem
            key={job.company}
            onClick={() => setExpandedJob(expandedJob === job.company ? null : job.company)}
          >
            <TimelineSeparator>
              <TimelineDot sx={{ p: 0, overflow: 'hidden' }}>
                <LogoAvatar src={job.logo} alt={`${job.company} logo`}>
                  {job.company[0]}
                </LogoAvatar>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <StyledPaper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" color="primary">
                  {job.company}
                </Typography>
                <Typography>{job.role}</Typography>
                <Typography color="text.secondary">{job.period}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.location}
                </Typography>
                <Collapse in={expandedJob === job.company} timeout={500}>
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      paragraph
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        color: 'text.secondary',
                        borderLeft: '2px solid',
                        borderColor: 'primary.main',
                        pl: 2,
                        animationDelay: '0ms',
                      }}
                    >
                      {job.narrative}
                    </Typography>
                    {job.details.map((detail, index) => (
                      <DetailItem
                        key={index}
                        paragraph
                        sx={{
                          animationDelay: `${(index + 1) * 100}ms`,
                        }}
                      >
                        {detail}
                      </DetailItem>
                    ))}
                  </Box>
                </Collapse>
              </StyledPaper>
            </TimelineContent>
          </StyledTimelineItem>
        ))}
      </Timeline>

      <Paper
        elevation={3}
        sx={{
          p: 3,
          mt: 4,
          textAlign: 'center',
          maxWidth: '600px',
          mx: 'auto',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Want your company featured here? Hire me!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EmailIcon />}
          onClick={handleHireClick}
          sx={{ mt: 1 }}
        >
          Schedule an Interview
        </Button>
      </Paper>
    </ContentWrapper>
  );
};

export default Career;
