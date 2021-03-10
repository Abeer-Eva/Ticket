import React ,{useState} from 'react';
 function StadTo (){ 

    
    const[dropdown , setDropdown]= useState(" ");
    return(
    <form style={{height: "32px",
        width: "132px",
        left: "192px",
        top: "69px"
        
    }}>
        <h3>To:{dropdown}</h3>
        <select  style={{  left: "172px",
        top: "69px"}} value ={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
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

export default StadTo;
