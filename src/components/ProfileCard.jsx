import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Card as MuiCard, CardContent, Avatar as MuiAvatar, Typography, Button as MuiButton } from '@mui/material';
import './ProfileCard.css';

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
        <Typography variant="caption" display="block" sx={{ mt: 2, color: 'gray' }}>
          Created with Material UI
        </Typography>
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

const StyledFooter = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 10px;
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
      <StyledFooter>Created with Styled-components</StyledFooter>
    </StyledCard>
  );
}

// Vanilla CSS Version
export function ProfileCardVanillaCSS() {
  return (
    <div className="profile-card">
      <img src={logo} alt="avatar" className="profile-avatar" />
      <h2 className="profile-name">Matti Meikäläinen</h2>
      <p className="profile-description">
        Full-stack developer, passionate about coding and coffee
      </p>
      <button className="profile-button">Contact Me</button>
      <p className="profile-footer">Created with Vanilla CSS</p>
    </div>
  );
}

// Tailwind CSS Version
export function ProfileCardTailwindCSS() {
  return (
    <div className="w-72 bg-gray-100 border border-gray-300 rounded-lg p-5 text-center mx-auto">
      <img
        src={logo}
        alt="avatar"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-lg font-bold text-black mt-3">Matti Meikäläinen</h2>
      <p className="text-sm text-gray-600 mt-2">
        Full-stack developer, passionate about coding and coffee
      </p>
      <button className="bg-blue-600 text-white rounded px-5 py-2 mt-5 hover:bg-blue-700">
        Contact Me
      </button>
      <p className="text-xs text-gray-500 mt-3">Created with Tailwind CSS</p>
    </div>
  );
}