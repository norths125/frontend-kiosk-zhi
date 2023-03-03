import React ,{useState,useEffect} from 'react';
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
import ModalAddUser from '../dia';
import HeaderAdmin from '../component/HeaderAdmin';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const theme = createTheme();

export default function Album() {
  const [open,setOpen]=useState(false)
  const [kioskData, setKioskData] = useState([])
  const [viewKiosk, setViewKiosk] = useState(null)

    useEffect(() => {
      checkToken()
      getKiosk()
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

    const getKiosk =  async () => {
      const token = localStorage.getItem('token')
      fetch('http://localhost:3333/kiosk', {
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
            setKioskData(data.kiosk)
          }else{
            alert('get Kiosk failed')
          
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
    const navigate = useNavigate();
    const MANAGE = () => {
      navigate('/Manage');
    };
    const LIVE = () => {
      navigate('/Live');
    };
    const PROFILE = () => {
      navigate('/Profile');
    };
    const HOME = () => {
      navigate('/Home');
    };
    const Managegetid = (kiosk) => {
      // navigate('/Managegetid');
      setViewKiosk(kiosk)
      console.log(kiosk)
      setOpen(true)
    };

  return (
    <ThemeProvider theme={theme}>
      {viewKiosk && open && 
        <ModalAddUser kioskData={viewKiosk} open={open} setOpen={setOpen}/>
      }
      <CssBaseline />
      <HeaderAdmin />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',pt: 8,pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Add</Button>
              <Button variant="outlined">Delete</Button>
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {kioskData.map((kiosk) => (
              <Grid item key={kiosk.Kiosk_ID} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{// 16:9 
                      pt: '56.25%',
                    }}
                    image="https://www.exat.co.th/wp-content/uploads/2020/11/exat-project.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Kiosk ID: {kiosk.Kiosk_ID}
                    </Typography>
                    <Typography>
                      Kiosk floor : {kiosk.Kiosk_ID} , 
                      Detail : {kiosk.Kiosk_Detail}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button variant="variant" color="inherit" onClick={Managegetid}>Managegetid</Button> */}
                    <Button size="small" onClick={() => Managegetid(kiosk)}>View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}