import React, { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogTitle} from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';


const ModalAddUser = (props) => {
    const {kioskData,open,setOpen} = props
    const [isShowkiosk,setisShowkiosk] = useState(false)

    useEffect(() => {
        if(kioskData) {
            console.log("2" + kioskData.Kiosk_ID)
        }
      },[])

    const handleClose = () => {
        setOpen(false)
        
    }

    const showkiosk = () =>{
        setisShowkiosk(true)
    }



    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
                maxWidth="700px"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Kiosk_ID : {kioskData.Kiosk_ID}<br></br>
                    <input type='date'></input><br></br>
                    <input type='time'></input>

                      <br></br>
                    <select name="frame" id="frame">
                        <option value="volvo">1 frame</option>
                        <option value="saab">2 frames</option>
                        <option value="opel">3 frames</option>
                        <option value="audi">4 frames</option>
                    </select><br></br>
                    <select name="repeat" id="repeat">
                        <option value="volvo">ทำซ้ำในอีก 1 วัน</option>
                        <option value="saab">ทำทุกครั้งใน 1 สัปดาห์</option>
                        <option value="opel">ทำทุกวันเป็นเวลา 1 สัปดาห์ </option>

                    </select>
                    <br></br>
                    <button onClick={isShowkiosk} >Next</button>
                </DialogTitle>
                <DialogContent>
                    
                </DialogContent>
            </Dialog>


            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
                maxWidth="700px"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Kiosk_ID : {kioskData.Kiosk_ID}<br></br>
                    <input type='date'></input><br></br>
                    <input type='time'></input>

                      <br></br>
                    <select name="frame" id="frame">
                        <option value="volvo">1 frame</option>
                        <option value="saab">2 frames</option>
                        <option value="opel">3 frames</option>
                        <option value="audi">4 frames</option>
                    </select><br></br>
                    <select name="repeat" id="repeat">
                        <option value="volvo">ทำซ้ำในอีก 1 วัน</option>
                        <option value="saab">ทำทุกครั้งใน 1 สัปดาห์</option>
                        <option value="opel">ทำทุกวันเป็นเวลา 1 สัปดาห์ </option>

                    </select>
                    <br></br>
                    <button onClick={isShowkiosk} >Next</button>
                </DialogTitle>
                <DialogContent>
                    
                </DialogContent>
            </Dialog>





       
        </>
    )
}

export default ModalAddUser