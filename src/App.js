
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Productlist from './components/Productlist';

function App() {

  const [headerCount,setHeaderCount]=useState(0);
  const [popup1,setpopup]=useState(0)
  return (
    <div className="App">
      <Header headerCount={headerCount} popupS={(s)=>{setpopup(s)}}/>
      <Productlist productAddedcount={(c)=>{setHeaderCount(c)}} popup1={popup1} popupClose={(s)=>{setpopup(s)}}/>
      
    
    </div>
  );
}

export default App;
