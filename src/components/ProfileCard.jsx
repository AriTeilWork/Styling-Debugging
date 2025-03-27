import React from 'react';
import { Card, CardContent, Avatar, Typography, Button } from '@mui/material';

export default function ProfileCard() {
  return (
    <Card
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
      <Avatar
        src="https://via.placeholder.com/100"
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
        <Button
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
        </Button>
      </CardContent>
    </Card>
  );
}