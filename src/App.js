import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import UserForm from './components/UserForm'
import AppHeader from './components/appheader/AppHeader.js';
import './App.css';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Healing Vectors LLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <UserForm />
      <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          We are underconstruction. Our site will be up soon.
        </Typography>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}

export default App;
