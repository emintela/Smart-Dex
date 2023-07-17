import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import {FaTwitterSquare,FaGithub} from 'react-icons/fa'
import {BsArrowUpRightSquare,BsArrowDownRightSquareFill,BsArrowUpRightSquareFill} from 'react-icons/bs'
import "./Gainers.css"
import millify from 'millify';
import Sep from '../Sep';

const Gainers = (props) => {
  return (
    <div className='sep2'>
    <div className='card-wrap'>
    <div className='gainers'>
        <div className='gainers-top'> 
            <div>
            
               <img src={props.icon} alt="icon" className='icon'/> 
            </div>
              <p>
               <h3>{props.symbol}</h3>-( {props.name})
               </p>
              
           
            
           
        </div>
        <hr></hr>
        <div className='gainers-body'>
            <p>
            Rank # : {props.rank} 
                <br/>
              Market Cap :  {new Intl.NumberFormat('en-US',
                          { style: 'currency', currency: 'USD',maximumFractionDigits: 5 }).format(props.mkcap)}
                <br/>
              24 h Volume: $ <br/>
             <h3> Price: {new Intl.NumberFormat('en-US',
                          { style: 'currency', currency: 'USD',maximumFractionDigits: 9 }).format(props.price)} <br/>
              Percent Change: % <span className={props.percent >= 0 ? "green":"red"}> 
                {props.percent} {props.percent>=0 ? <BsArrowUpRightSquareFill />:<BsArrowDownRightSquareFill/> }
               </span>  <br/> </h3>
              <br/>
            </p>

        </div>
        <hr></hr>
        <div className='gainers-bottom'>
            <Link to="facebook.com"><BsFacebook className='icon2'/> </Link>
            <Link to="twitter.com"> <FaTwitterSquare  className='icon2'/> </Link>
            <Link to="coingecko.com"> <FaGithub  className='icon2'/></Link>
            <Link to="geckoterminal.com"> <FaGithub className='icon2'/> </Link>
           

        </div>
        
    </div>
   
      
    </div>
    <div>
    <Sep/>
    </div>
    </div>
  )
}

export default Gainers