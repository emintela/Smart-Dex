import React from 'react'
import './Swap.css'
import { FaFacebook, FaTwitter, FaInstagram, FaArrowDown } from 'react-icons/fa';
import ethIcon from "../../assets/ethIconblue.png"
import daiIcon from "../../assets/daiIcon.png"

const Swap = (props) => {
  return (
    <div className="swap">
        <div className="swap-container">
            <div className="top">
                <div className='top-left'>
                    <p>Swap</p>
                    <p>Limit</p>
                    <p>P2P</p>
                </div>
                <div className='top-right'>
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                    <FaInstagram className="icon" />
                </div>
            </div>
            <hr></hr>
            <div className='bottom'>
                <div className="sell">
                    You Sell
                    <div className='center-contents'>
                        <div className='center-contents-left' onClick={props.handleSwapModel}
                        /*
                            we will open the swap Modal component here whenever clicked
                            user can view more cryptos and all the attributes and values
                            will be passed as props to other or children components
                         */
                        >
                            <p><img src={ethIcon} alt="icon"/></p>
                            <p>ETH</p>
                            <p><FaArrowDown /></p>

                        </div>
                        <div className='center-contents-right'
                            /*
                                we will open the swap Modal component here whenever clicked
                                user can view more cryptos and all the attributes and values
                                will be passed as props to other or children components
                             */
                        >
                            <p><input type="text" id=""/></p>

                        </div>

                    </div>
                    <div className='bottom-contents'>
                        <div className='bottom-contents-left'>
                            <p>Ethereum</p>

                        </div>
                        <div className='bottom-contents-right'>
                            <p>~ $ 2,546.455</p>

                        </div>

                    </div>
                </div>
                <div className="buy">
                    You Buy
                    <div className='center-contents'>
                        <div className='center-contents-left' onClick={props.handleSwapModel}
                            /*
                                we will open the swap Modal component here whenever clicked
                                user can view more cryptos and all the attributes and values
                                will be passed as props to other or children components
                             */
                        >
                        <p><img src={daiIcon} alt="icon"/></p>
                            <p>DAI</p>
                            <p><FaArrowDown /></p>

                        </div>
                        <div className='center-contents-right'>
                               <p><input type="text" id="" placeholder='$ 2,546.455'/></p>

                        </div>

                    </div>
                    <div className='bottom-contents'>
                        <div className='bottom-contents-left'>
                            <p>Dai StableCoin</p>

                        </div>
                        <div className='bottom-contents-right'>
                            <p>~ $ 2,546.455(0.19%)</p>
                        </div>

                    </div>
                </div>
                <div className="conversion">
                ETH / DAI ; 1 ETH = 2,530.00 DAI (~~~)



                </div>
                <div className='trade-button' 
                    
                    /*
                        we will open the Connect Modal component and also execute the
                        transactions here whenever clicked
                        user can view more cryptos and all the attributes and values
                        will be passed as props to other or children components
                     */
                >
                    <p>Connect Wallet</p>
                </div>

            </div>
            

        </div>
       
        
    </div>
  )
}

export default Swap