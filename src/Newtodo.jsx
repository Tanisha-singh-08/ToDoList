import { Button } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ListCom from "./ListCom";


const Newtodo=()=>{

    const [item, setItem]=useState("");

    const [newitem,setNewItem]=useState([]);

    const itemEvent=(event)=>{
            setItem(event.target.value);
    }

        setNewItem((prevVal)=>{
            return ([...prevVal,item])

        });
        setItem("");
    
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" value={item} placeholder="Add an Item" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItems} >
                        <AddIcon/>
                    </Button>
                    <br/>
                    <ol>
                        {/* <li>{item}</li> */}

                        {newitem.map((val,index)=>{
                            return <ListCom key={index} text={val}/>
                        })
                        }
                    </ol>
                </div>
            </div>
        </>

    );

                    }                    
                    
export default Newtodo;
