import React ,{useState} from 'react';
 function StadFrom (){ 

    
    const[dropdown , setDropdown]= useState(" ");
  
    return(
    <form >
        <h3 style={{height: "32px",
width: "132px",
left: "16px",
top: "69px",
}} >From:{dropdown}</h3>
        
        <select   value ={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
        <option value="Stockholm">Stockholm</option>
        <option value="Göteborg">Göteborg</option>
        <option value="Karlstad">Karlstad</option>
        <option value="Malmö">Malmö</option>
        <option value="Örebro">Örebro</option>
        <option value="Umeå">Umeå</option>
        <option value="luleå">luleå</option>
        </select>
    </form>)
    

}


export default StadFrom;
