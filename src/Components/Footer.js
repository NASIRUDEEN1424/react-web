import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="white"
      color="blue"
      padding="20px"
      position="fixed"
      bottom="0"
      width="100%"
      left="0" /* Add left: 0 to ensure it spans the entire width */
      right="0" /* Add right: 0 to ensure it spans the entire width */
      zIndex="blue"
    >
      <IconButton>
        <Facebook />
      </IconButton>
      <IconButton>
        <Instagram />
      </IconButton>
      <IconButton>
        <Twitter />
      </IconButton>
      <Typography variant="body2" component="span" marginLeft="10px">
        bikers studio &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;