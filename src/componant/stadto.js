import React ,{useState} from 'react';
 function StadTo (){ 

    
    const[dropdown , setDropdown]= useState(" ");
    return(
    <form id="grid" 
    style={{height: "32px",
        width: "132px",
       
        top: "69px"
        
    }}>
        <article id="flex2">
        <h3 style={{height: "22px",
width: "62px",
left: "36px",
top: "69px",
margin:"0"}}>To:{dropdown}</h3>
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
        </article>
    </form>)

}

export default StadTo;
