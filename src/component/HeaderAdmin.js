import React,{ useState } from 'react';
import {FiMenu,FiX} from "react-icons/fi";
import './Header.css'
import Button from '@mui/material/Button';

function Header() {
    
    const [click,setclick] = useState(false);
    const handClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false);
    const handleLogout = (event) =>{
        event.preventDefault();
        localStorage.removeItem('token');
        window.location = '/login'
      }

  return (
    <div className='header'>
        <div className='container'>
            <div className='header-con'>
                <div className='logo-container'>
                  <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem_of_the_Expressway_Authority_of_Thailand.svg/600px-Emblem_of_the_Expressway_Authority_of_Thailand.svg.png' ></img>
                </div>
                <ul className={click ? "menu active":"menu"}>
                    <li className='menu-link' onClick={closeMobileMenu}>
                        <Button variant="variant" color="inherit" href='homeAdmin'>HOME</Button>
                    </li>
                    <li className='menu-link'>
                        <Button variant="variant" color="inherit"  href='ManageAdmin'>MANAGE</Button>
                    </li>
                    <li className='menu-link'>
                        <Button variant="variant" color="inherit"  href='LiveAdmin'>LIVE</Button>
                    </li>
                    <li className='menu-link'>
                        <Button variant="variant" color="inherit"  href='Request'>REQUEST</Button>
                    </li>
                    <li className='menu-link'>
                        <Button variant="variant" color="inherit"  href='User'>USER</Button>
                    </li>
                    <li className='menu-link'>
                        <Button variant="contained" color="error"  onClick={handleLogout}>LOGOUT</Button>
                    </li>
                </ul>
                <div className='mobile-menu' onClick={handClick}>
                    {click ?(
                        <FiX />
                    ):(
                        <FiMenu />
                    )}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header