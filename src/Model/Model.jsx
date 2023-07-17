import React from 'react'
import { useState,useEffect } from 'react'
import './Model.css'

const Model = ({setOpenModel,connectWallet}) => {
  //different wallet options
  const walletMenu = ["MetaMask","Coinbase","Wallet","WalletConnect"]

  return (
    <div className='model'>
      <div className='model-box'>
        <div className='model-box-heading'>
          <p>Connect a Wallet</p>
          <div className='model-box-heading-img'> 
                  <img src="assets/images/gearIconWhite.webp" width={50} height={50} onClick={()=> setOpenModel(false)}/>
          </div>
          
        </div>
        <div className='model-box-wallet'>
        
           {walletMenu.map((el,i)=>(
            <p key={i+1} onClick={()=> connectWallet()}>
              {el}
            </p>

           ))}

        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <p className='model-box-para'>
          By Connecting a wallet, you agree to the terms and conditions<br/>
          as set forth...

        </p>
      </div>

    </div>
  )
}

export default Model