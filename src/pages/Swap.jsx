import React from 'react'
import { useState,useContext,useEffect } from 'react'
import SearchToken from '../components/SearchToken/SearchToken'
import Token from '../components/Token/Token'
import './Swap.css'


const Swap = ({accounts, tokenData}) => {

  const [openSetting, setOpenSetting] = useState(false)
  const [openToken , setOpenToken] = useState(false)
  const [openTokensTwo , setOpenTokensTwo] = useState(false)

  //token1
  const [ tokenOne , setTokenOne ] = useState({
    name:"",
    image:"",
  })

  const [ tokenTwo , setTokenTwo ] = useState({
    name:"",
    image:"",
  })
  

  return (
    <div className='swap'>

      <div className='swap_box'>

        <div className='swap_box_heading'>
              <p> <h2>Swap</h2> </p>
              <div className='swap_box_heading_img'>
                  <img src="assets/images/gearIconWhite.webp" width={50} height={50} onClick={()=>setOpenSetting(!openSetting)}/>
              </div>
          
          </div>


          <div className='swap_box_input'>
            <div>
          
            <input type='text' placeholder='0' />
            </div>

            <div>
           
            <button onClick={()=>setOpenToken(true)}>
              <img alt="ether" src={tokenOne.image || "assets/images/ETHEREUM-ICON_Black_small.webp"}
              width={20}
              height={20}/>
              {/* img src={tokenOne.image || images.etherlogo} 
              {tokenOne.name || "ETH"*/}
              {tokenOne.name || "W11"}
              {
                console.log(tokenOne.name)
              }
              <small> 67 </small>
            </button>
            </div>
          </div>
          
          <div className='swap_box_input'> 

          <input type='text' placeholder='0' />
            <button onClick={()=>setOpenTokensTwo(true)}>
              <img alt="ether" src={tokenTwo.image || "assets/images/ETHEREUM-ICON_Black_small.webp" }
              width={20}
              heigh={20}/>
              {/* img src={images.image || images.etherlogo} 
              {tokenOne.name || "ETH"*/}
              {tokenTwo.name || "ETH"}
              <small>6709</small>
            </button>


          </div>

         <div>
          
          {
            accounts ? <button className='swap_box_button'>Swap </button> :
            <button className='swap_box_button' onClick={()=>(alert('connecting...'))}>
              Connect Wallet
            </button>
          }
          

        </div>
        <div>
       {openSetting && <Token openSetting={setOpenSetting}/>}
      {openToken && (<SearchToken 
                 openToken={setOpenToken}
                 tokens={setTokenOne}
                tokenData={tokenData}/>)}
      
      {openTokensTwo && (<SearchToken 
                 openToken={setOpenTokensTwo}
                 tokens={setTokenTwo}
                 tokenData={tokenData}/>)}


       </div>
      
           
        
       </div>
       
      
      
    </div>
  )

  }
export default Swap 