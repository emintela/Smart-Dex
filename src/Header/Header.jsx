import React from 'react'
import { useState ,useEffect } from 'react';
import './Header.css'
import {MdRepeatOn,MdShuffleOn} from "react-icons/md";
import { FaBeer,FaHamburger, FaCommentsDollar } from "react-icons/fa";
import Model from '../Model/Model';
import TokenList from '../TokenList/TokenList';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";


const Header = () => {
    const[connectWallet,setConnectWallet]= useState()
    const[openModel,setOpenModel] = useState(false)
    const [openTokenBox,setOpenTokenBox] = useState(false)
    const [bgColor , setBgColor] = useState(false)


    //function to change header bg color on scroll
    const changeBgColor = ()=>{
        if(window.scrollY>=90){
            setBgColor(true)
        }else{
            setBgColor(false)
        }
    }

    window.addEventListener('scroll', changeBgColor)


  return (
    <div className={bgColor?"header bg-color":"header"}>
        <div className='logo-div'>
            
            <h1><Link to="/"> Smart<span className='span-text'>Dex</span> </Link></h1>

        </div>

        <nav className='nav'>
            <ul className={bgColor ? "menu-items bg-color":"menu-items"}>
                <li> <Link to="/swap">Swap </Link></li>
                <li><Link to="/pool"> Pool </Link></li>
                <li><Link to="/stake"> Stake </Link></li>
                <li><Link to="/buy"> Buy With Card </Link></li>
                <li><Link to="/launchpad"> LaunchPad </Link></li>
            </ul>
            
        </nav>

       <div className='search'>
           <form className='search-form'>
                <GiHamburgerMenu/>
                
                <input type='text' id='search' name='search' placeholder='Search....'></input>
                <HiMagnifyingGlassPlus/>
            </form>

            
       </div>
            

       
        <div>
                {/* Tokens list */}
             {openTokenBox &&(
                <TokenList tokenData="hey" setOpenTokenBox={setOpenTokenBox}/>
              )}
        </div>

        <div className='icons'>
            <p className='icon-paragraph'>
             <img alt='icon' src="assets/images/ETHEREUM-ICON_Black_small.webp" alt="ethers" />
              <button onClick={()=>setOpenTokenBox(true)}>Network</button>
              
               
             
            </p>
            
            <p className='icon-paragraph'>
            ... 
               <button onClick={()=>{setOpenModel(true)}}>Address </button>
               
            
               </p>
              
            <div>
               
            {openModel &&(
                  <Model setOpenModel={setOpenModel} connectWallet="Connect"/>
               )}

            </div>
               
          

        </div>
       
        
    </div>
  )
}

export default Header