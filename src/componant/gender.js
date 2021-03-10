import React ,{useState} from 'react';
 function Gender (){ 

    const [gender,setGender]=useState('');

   const handleChange=(e)=>{
       setGender( e.target.value);
    }

    return (
      <div>
         <form>
         <h4  style={{margin:0}}>Gender : </h4>
             <input type="radio" value="male" id="male"
               onChange={handleChange} name="gender" />
             <label for="male">Male</label>
             
            <input type="radio" value="female" id="female"
              onChange={handleChange} name="gender"/>
            <label for="female">Female</label>

            <input type="radio" value="another" id="another"
              onChange={handleChange} name="gender"/>
            <label for="another">Another</label>
         </form>

         
      </div>
    );
}

export default Gender;
