import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ListCom=(props)=>{

  const [line,setLine]=useState(false);

  const cutIt=()=>{
  setLine(true);
  };
  return(
    <div className="todo_style">
    <span onClick={cutIt}>
      <DeleteIcon className="deleteicon"/>
    </span>
    <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
    
    {/* //now ab hm chhate hai ki element delete na ho bs strike ho by line when we hit the delete icon.. */}
    </div>
  );
}



export default ListCom;