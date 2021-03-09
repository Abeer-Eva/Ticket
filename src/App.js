import React ,{Component} from 'react';


import './App.css';
import Antal from './componant/antal';
import Boka from './componant/bookning';
import MyApp from './componant/calander';
import Gender from './componant/gender';


import { Kund } from './componant/kund';
import StadFrom from './componant/stadfrom';
import StadTo from './componant/stadto';
function App () {
  
 

  return (
    <div className="App">
     
       
    
      <StadFrom/>
      <StadTo/>
      <MyApp/>
      <Gender/>
      <Antal/>
      <Kund/>
      <Boka/>
    
    </div>
  );
}

export default App;
 
 
  