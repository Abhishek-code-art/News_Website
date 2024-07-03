import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          © {new Date().getFullYear()} ThePublive News
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" href="/">
            Home
          </Link>
          {' | '}
          <Link color="inherit" href="/about">
            About
          </Link>
          {' | '}
          <Link color="inherit" href="/contact">
            Contact
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
