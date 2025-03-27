import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0;
`;

const Button = styled.button`
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

export default function ProfileCard() {
  return (
    <Card>
      <Avatar src="https://via.placeholder.com/100" alt="avatar" />
      <Name>Matti Meikäläinen</Name>
      <Description>
        Full-stack developer, passionate about coding and coffee
      </Description>
      <Button>Contact Me</Button>
    </Card>
  );
}