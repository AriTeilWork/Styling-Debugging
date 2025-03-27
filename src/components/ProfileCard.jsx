import React from 'react';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Card as MuiCard, CardContent, Avatar as MuiAvatar, Typography, Button as MuiButton } from '@mui/material';

// Material-UI Version
export function ProfileCardMaterialUI() {
  return (
    <MuiCard
      sx={{
        width: 300,
        backgroundColor: '#f5f5f5',
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        textAlign: 'center',
        padding: 2,
        margin: '0 auto',
      }}
    >
      <MuiAvatar
        src={logo}
        alt="avatar"
        sx={{ width: 100, height: 100, margin: '0 auto' }}
      />
      <CardContent>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          Matti Meikäläinen
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Full-stack developer, passionate about coding and coffee
        </Typography>
        <MuiButton
          variant="contained"
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            borderRadius: 1,
            mt: 2,
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          Contact Me
        </MuiButton>
      </CardContent>
    </MuiCard>
  );
}

// Styled-components Version
const StyledCard = styled.div`
  width: 300px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
`;

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;

const StyledName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0;
`;

const StyledButton = styled.button`
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #1565c0;
  }
`;

export function ProfileCardStyledComponents() {
  return (
    <StyledCard>
      <StyledAvatar src={logo} alt="avatar" />
      <StyledName>Matti Meikäläinen</StyledName>
      <StyledDescription>
        Full-stack developer, passionate about coding and coffee
      </StyledDescription>
      <StyledButton>Contact Me</StyledButton>
    </StyledCard>
  );
}