import React from 'react'
import './SearchToken.css'
import { useState } from 'react'

const SearchToken = ({openToken ,tokens, tokenData}) => {
  const[active, setActive] = useState(0)
  const coin = [
    {
      img:'',
      name:'Eth',
    },
    {
      img:'',
      name:'WEth',
    },
    {
      img:'',
      name:'EDD',
    },
    {
      img:'',
      name:'MINT',
    }
    ,
    {
      img:'',
      name:'WBTC',
    }
  ]

  return (
    <div className='searchToken'>
      <div className='searchToken_box'>
        <div className='searchToken_box_heading'>
          <h4>Select a Token</h4>
          <img alt="close" src="assets/images/gearIconWhite.webp"
            width={50}
            height={50}
            onClick = {()=>openToken(false)}
          />

        </div>
        <div className='searchToken_box_search'>
           <div className='searchToken_box_search_img'>
              <img src="assets/images/searchIcon.png"
               width={20}
               height={20}
               alt="search"
              />

           </div>
           <input type="text" placeholder="Search..." />

        </div>
        <div className='searchToken_box_token'>

          {
            coin.map((el,i)=>(
              <span key={i+1} className={active == i+1 ? `${active}` : ""}
               onClick={()=>(setActive(i+1), tokens({
                 name : el.name,
                 image : el.img
               }))}
              >
              
              <img
                src={el.img || "assets/images/ethereum-logo-gray.webp"}
                alt='image'
                width = {30}
                height ={30}
              />
              
              {el.name}

              </span>
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default SearchToken