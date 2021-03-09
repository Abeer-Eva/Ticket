import React ,{useState} from 'react';
 function Gender (){ 

    
    const[dropdown , setDropdown]= useState(" ");
    return(
    <form>
        <h3>Gender:{dropdown}</h3>
        <select value ={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
        <option value="Han">Han</option>
        <option value="Hon">Hon</option>
        <option value="Hen">Hen</option>
      
        </select>
    </form>)

}

export default Gender;
