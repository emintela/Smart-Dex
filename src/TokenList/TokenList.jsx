import React from 'react'
import './TokenList.css'

const TokenList = ({tokenData , setOpenTokenBox}) => {
  const data = [1,2,3,4,5,6,7]
  return (
    <div className='tokenList'>

      <div className='tokenList-head'>
      <div className='token-title'>
        <h2> Your Token List </h2>

      </div>
      

        <img src="assets/images/gearIconWhite.webp" width={50} height={50} onClick={()=> setOpenTokenBox(false)}/>

      
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className='mid'>
      <button className='mid-button'><h2>View and Sell NFTs</h2></button>
      <button className='mid-button'><h2>Buy Crypto With CC</h2></button>
      </div>
      
      <br></br>
      <hr></hr>
      <br></br>
      

      {data.map((el,i)=>(
        <div className='tokenlist-box'>
          <div className='tokenlist-box-info'>
            <p className='tokenlist-box-info-symbol'>
             HEY
             </p>
             <p>
              <span>34</span>GOLD COIN
             </p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default TokenList