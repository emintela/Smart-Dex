import React from 'react'
import './Sidebar.css'
import { AiFillSetting ,AiOutlineSetting,AiOutlineLogout} from "react-icons/ai";
import { FaRegUserCircle,FaEnvelopeOpenText ,FaQuestionCircle,FaUserEdit} from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import {FcComboChart} from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {FaTwitterSquare,FaGithub} from 'react-icons/fa'



const Sidebar = () => {
  return (
    <div className='sidebar-container'>
    <ul className='side-menu'>
        <li className='sidemenu-item'>
            <a className='side-link'>
                <FcShop className='side-icon'/>
               
               <div className='link-text'>
                  My Profile
               </div>
            </a>
             

        </li>
        <li className='sidemenu-item'>
            <a className='side-link'>
               <FcComboChart className='side-icon'/>
               
               <div className='link-text'>
                   
                   Edit Profile
               </div>
            </a>
             
        </li>

        <li className='sidemenu-item'> 
        <a className='side-link'>
               <FaEnvelopeOpenText className='side-icon'/>
               <div className='link-text'>
                  Inbox

               </div>
            </a>
        </li>
        <li className='sidemenu-item'> 
        <a className='side-link'>
               <AiOutlineSetting className='side-icon'/>
               <div className='link-text'>
                  Settings

               </div>
        </a>
        
        </li>
        <li className='sidemenu-item'> 
        <a className='side-link'>
                <FaQuestionCircle className='side-icon'/>
               <div className='link-text'>
                   Help

               </div>
            </a>
        
        </li>
        <li className='sidemenu-item'>
        <a className='side-link'>
               <AiOutlineLogout className='side-icon'/>
               <div className='link-text'>
                  Log out

               </div>
        </a>
             
        </li>
        
       
    </ul>

<hr></hr>
<div className='separator'>

</div>
<div className='social-icons'>

<BsFacebook className='social'/>
<img src="assets/images/geco.png" alt="gecoterminal" className='social'/>
<FaTwitterSquare className='social'/>
<FaGithub className='social'/>
<br></br>

</div>
<hr></hr>
<div>
    <br></br>
    <br></br>
    <br></br>
</div>

</div>


)
  
}

export default Sidebar