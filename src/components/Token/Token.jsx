import React from 'react'
import {useState ,useEffect} from 'react'
import Toggle from '../Toggle/Toggle'
import './Token.css'
import {BsGear} from 'react-icons/bs'

const Token = ({setOpenSetting}) => {
  return (
    <div className='token'>
      <div className='token_box'>
        <div className='token_box_heading'>
          <h4>Setting</h4>
         <BsGear className='gear' onClick={()=>setOpenSetting(false)}/>

        </div>
        <hr></hr>
        <p className='token_box_para'>
          Slipppage Tolerance{""}
          <img  src="assets/images/settings-gear.svg"
            width={20}
            height={20}
  
          />

        </p>
        <div className='token_box_input'>
          <button>Auto</button>
          <input type="text" placeholder='0.10%'/>

        </div>
        <p className='token_box_para'>
          Slipppage Tolerance{""}
          <img  src="assets/images/settings-gear.svg"
            width={20}
            height={20}
  
          />

        </p>
        <div className='token_box_input'>
        <input type="text" placeholder='30'/> 
          <button>Minutes</button>
          

        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Interface Settings</h2>
        <div className='token_box_toggle'>
           <p className='token_box_para'> Transaction Deadline</p>
           
            <Toggle label="No" />
        </div>
        
      </div>

    </div>
  )
}

export default Token