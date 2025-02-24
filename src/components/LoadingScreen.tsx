import React from 'react';
import { Box, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';

const pixelSize = 4;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const Container = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#121212',
  zIndex: 9999,
});

const PixelSpinner = styled(Box)(({ theme }) => ({
  width: `${pixelSize * 8}px`,
  height: `${pixelSize * 8}px`,
  animation: `${bounce} 0.5s infinite`,
  imageRendering: 'pixelated',
  boxShadow: `
    ${pixelSize * 2}px ${pixelSize * 2}px 0 ${theme.palette.primary.main},
    ${pixelSize * 2}px ${pixelSize * 4}px 0 ${theme.palette.primary.main},
    ${pixelSize * 4}px ${pixelSize * 2}px 0 ${theme.palette.primary.main},
    ${pixelSize * 4}px ${pixelSize * 4}px 0 ${theme.palette.primary.main}
  `,
}));

const LoadingScreen = () => {
  return (
    <Container>
      <PixelSpinner />
    </Container>
  );
};

export default LoadingScreen;
