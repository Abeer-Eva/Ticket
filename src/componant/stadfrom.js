import React ,{useState} from 'react';
 function StadFrom (){ 

    
    const[dropdown , setDropdown]= useState(" ");
  
    return(
    <form  id="grid" >
        <article id= "flex1">
        <h3 style={{height: "22px",
width: "62px",
left: "16px",
top: "59px",
margin:"0"
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
       
        </article>
    </form>)
     console.log({dropdown});

}


export default StadFrom;
