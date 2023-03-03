import React ,{useEffect, useState} from 'react';
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
import ModalAddUser from './dia';
import Header from './component/Header';
import './css/Profile.css'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  const [open,setOpen]=useState(false)
  const [userData, setUserData] = useState([])
  const [userNameData, setUserNameData] = useState("")
  const [viewUser, setViewUser] = useState(null)

    useEffect(() => {
      checkToken()
      getUser()
    },[])
    
    const checkToken = async () => {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3333/authen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if(data.status == 'ok'){
            console.log('Authen User_Name:',data.decoded.User_Name)
            setUserNameData(data.decoded.User_Name)
            //alert('Authen success')
          }else{
            alert('Authen failed')
            localStorage.removeItem('token');
            window.location = '/login'
          }
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
    const getUser =  async () => {
      const token = localStorage.getItem('token')
      fetch('http://localhost:3333/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if(data.status == 'ok'){
              console.log('userNameData',userNameData)
              console.log(data.user)
              data.user.filter((element) => {
                if(element.User_Name === userNameData) {
                  setUserData(data.user[0])
                }
              })
          }else{
            alert('get User failed')
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    const handleLogout = (event) =>{
      event.preventDefault();
      localStorage.removeItem('token');
      window.location = '/login'
    }

    const Managegetid = (user) => {
      // navigate('/Managegetid');
      setViewUser(user)
      console.log(user)
      setOpen(true)
    };
    
  return (
    <ThemeProvider theme={theme}>
      {viewUser && open && 
        <ModalAddUser userData={viewUser} open={open} setOpen={setOpen}/>
      }
      <CssBaseline />
      <Header />
      { userData && 
      <main>
        <a className='profile'>
          User ID : {userData.User_ID}<br></br>
          UserName : {userData.User_Name}<br></br>
          Password : xxxxxxxxxx <button>Edit</button> <br></br> 
          Department : {userData.Department}
        </a>

      </main>}

    </ThemeProvider>
  );
}