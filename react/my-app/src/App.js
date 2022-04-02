import { useState } from "react";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textform from "./componets/Textform";
function App() {
  
  // you can change the color of body so you don't go have to change particular component one by one 
  // document.body.style.backgroundColor='white' 
  let modtext="Enable dark mode";
  const [modevalue,setdarkmode]=useState('light');//dark mode is enable or not
  const changemode=()=>{
    if(modevalue==="light")
    {
      setdarkmode('dark');
      modtext="Enable dark mode"
      // document.body.style.backgroundColor='black' 
    }
    else
    {
      setdarkmode('light');
      modtext="Enable dark light"
      // document.body.style.backgroundColor='white' 
    }
  }
  return (
  <>
   <Navbar title="TextEditors" about="About" mode={modevalue} toggleMode={changemode} modtext={modtext}></Navbar>
   <Textform mode={modevalue}></Textform>
   <About/>
  </>
 
  );
}
export default App;
