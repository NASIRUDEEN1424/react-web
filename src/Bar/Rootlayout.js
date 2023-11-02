import React from 'react';
import Navbar from '../Bar/Navbar';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ p: 5 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default RootLayout;
