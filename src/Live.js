import React ,{useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Home } from '@mui/icons-material';
import Header from './component/Header';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {

    const handleLogout = (event) =>{
      event.preventDefault();
      localStorage.removeItem('token');
      window.location = '/login'
    }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        

      </main>
    </ThemeProvider>
  );
}