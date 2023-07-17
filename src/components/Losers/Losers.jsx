import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import {FaTwitterSquare,FaGithub} from 'react-icons/fa'
import {BsArrowUpRightSquare,BsArrowDownRightSquareFill,BsArrowUpRightSquareFill} from 'react-icons/bs'
import millify from 'millify';
import { useQuery } from 'react-query';
import axios from 'axios';
import "../Gainers/Gainers.css"


const Losers = () => {
    //fetch data
    const fetchDt = async( )=>{
        const data = await axios.get("https://coinranking1.p.rapidapi.com/coins",
           { params:
             {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                timePeriod: '24h',
                'tiers[0]': '1',
                orderBy: 'change',
                orderDirection: 'asc',
                limit: '10',
                offset: '0'
            },
        headers: {
          'X-RapidAPI-Key': '4e02e0c1c2mshf7e7e94694b6bfbp1f9dfdjsnfed200bf71f0',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }}
        
        )
      
        return data
      }
      
      const {isLoading,data:dt,error} = useQuery('losers',fetchDt)
      
      
      
      if (isLoading) return (<h2>Loading....</h2>)
      if(error) return error.message
      
      
     
      
      

    return(
        <div>
        {
            dt.data.data.coins.map((coin)=>{
              return(
                <div className='card-wrap'>
                   <div className='gainers'>
                       <div className='gainers-top'> 
                   <div>
                    
                        <img src={coin.iconUrl} alt="icon" className='icon'/> 
                   </div>
                     <p>
                       <h3>{coin.symbol}</h3>-( {coin.name})
                      </p>
                  
               
                
               
            </div>
            <hr></hr>
            <div className='gainers-body'>
                <p>  
                  Rank # : {coin.rank} 
                    <br/>
                  Market Cap :  {new Intl.NumberFormat('en-US',
                              { style: 'currency', currency: 'USD',maximumFractionDigits: 5 }).format(coin.marketCap)}
                    <br/>
                  24 h Volume: $ <br/>
                 <h3> Price: {new Intl.NumberFormat('en-US',
                              { style: 'currency', currency: 'USD',maximumFractionDigits: 9  }).format(coin.price)} <br/>
                  Percent Change: % <span className={coin.change >= 0 ? "green":"red"}> 
                    {coin.change} {coin.change>=0 ? <BsArrowUpRightSquareFill />:<BsArrowDownRightSquareFill/> }
                   </span>  <br/> </h3>
                  <br/>
                </p>
    
            </div>
            <hr></hr>
            <div className='gainers-bottom'>
                <Link to="facebook.com"><BsFacebook className='icon2'/> </Link>
                <Link to="twitter.com"> <FaTwitterSquare  className='icon2'/> </Link>
                <Link to="coingecko.com"> <FaGithub className='icon2' /></Link>
                <Link to="geckoterminal.com"> <FaGithub  className='icon2'/> </Link>
               
    
            </div>
            
        </div>
        </div>
    
             )
            })
           } 
          
          </div>
    
    )

}

export default Losers