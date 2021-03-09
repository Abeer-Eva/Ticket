import React ,{useState} from 'react';
 function Antal (){ 

    
    const[dropdown , setDropdown]= useState(" ");
    return(
    <form>
        <h3>Antal Biljetter:{dropdown}</h3>
        <select value ={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="barn">barn</option>
        <option value="familj">familj</option>
        <option value="student">student</option>
        </select>
    </form>)

}

export default Antal;
