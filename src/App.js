import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Swap from './components/Swap/Swap';
import SwapModal from './components/SwapModal/SwapModal';
import { useState } from 'react';

function App() {
  const [swapModalOpen,setSwapModalOpen] = useState(false)

  /*
   function to open or close modal for swap token.
   this function is defined here but will be pass down to 
   the swap modal as a prop since it's one of the children 
   it can also be passed to other children as needed

   */

   const handleSwapModel = ()=>{
     console.log("Swap Model Clicked !")
    
    setSwapModalOpen(prevState => !prevState)
   }
 

  return (
    <div className="main-app">
      <Header/>
      <Swap
        handleSwapModel = {handleSwapModel}
        setSwapModalOpen = {setSwapModalOpen}
        swapModalOpen = {swapModalOpen} 
      />

      {
        swapModalOpen ? <SwapModal
        handleSwapModel = {handleSwapModel}
        setSwapModalOpen = {setSwapModalOpen}
        swapModalOpen = {swapModalOpen}

      />
      :<div></div>
      }
      

    </div>
  );
}

export default App;
