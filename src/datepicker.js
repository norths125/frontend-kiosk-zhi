import React,{useState} from "react";

function DatePick(){
    return(
        <>
        <h1>Selected Date : {date} </h1>
        <input type="date" onChange={e=setDate(e.target.value)}></input>
        </>
    )
}export default DatePick;