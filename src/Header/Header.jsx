import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/Smart Dex Logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ethIcon from "../assets/ethIconblue.png";
import { ethers } from 'ethers';
//import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme
} from '@web3modal/ethers/react'




//import { BrowserProvider } from "ethers";



const Header = () => {
  

  /*const connectWallet = async () => {
    if (window.ethereum) {
      try {
        
       const  provider = new ethers.BrowserProvider(window.ethereum)
       
       const userAccount = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0];
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        console.log(address)
        console.log(provider)
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  };

  const connect2 = ()=>{
    let signer = null;

    let provider;

if (window.ethereum == null) {

    // If MetaMask is not installed, we use the default provider,
    // which is backed by a variety of third-party services (such
    // as INFURA). They do not have private keys installed,
    // so they only have read-only access
    console.log("MetaMask not installed; using read-only defaults")
    provider = ethers.getDefaultProvider()
    console.log(provider)
    
       

} else {

    // Connect to the MetaMask EIP-1193 object. This is a standard
    // protocol that allows Ethers access to make all read-only
    // requests through MetaMask.
    provider = new ethers.BrowserProvider(window.ethereum)

    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    signer =  provider.getSigner();
    //const address =  signer.getAddress();
       // setWalletAddress(address);
        //console.log(address)

    
}

  }*/

  // connect using web3 modal

  const projectId = '45fd5751c92525c807db6a97a8076149'

  // 2. Set chains
  // 2. Set chains
const chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
  },
  {
    chainId: 42161,
    name: 'Arbitrum',
    currency: 'ETH',
    explorerUrl: 'https://arbiscan.io',
    rpcUrl: 'https://arb1.arbitrum.io/rpc'
  },
  {
    chainId: 137,
    name: 'Polygon',
    currency: 'MATIC',
    explorerUrl: 'https://polygonscan.com',
    rpcUrl: 'https://polygon-rpc.com'
  },
  {
    chainId: 10,
    name: 'Optimism',
    currency: 'ETH',
    explorerUrl: 'https://optimistic.etherscan.io',
    rpcUrl: 'https://mainnet.optimism.io'
  },
  {
    chainId: 56,
    name: 'Binance Smart Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed.binance.org'
  },
  {
    chainId: 43114,
    name: 'Avalanche',
    currency: 'AVAX',
    explorerUrl: 'https://snowtrace.io',
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc'
  },
  {
    chainId: 250,
    name: 'Fantom',
    currency: 'FTM',
    explorerUrl: 'https://ftmscan.com',
    rpcUrl: 'https://rpcapi.fantom.network'
  },
  {
    chainId: 42220,
    name: 'Celo',
    currency: 'CELO',
    explorerUrl: 'https://explorer.celo.org',
    rpcUrl: 'https://forno.celo.org'
  },
  {
    chainId: 1284,
    name: 'Moonbeam',
    currency: 'GLMR',
    explorerUrl: 'https://moonscan.io',
    rpcUrl: 'https://rpc.api.moonbeam.network'
  },
  {
    chainId: 1313161554,
    name: 'Aurora',
    currency: 'ETH',
    explorerUrl: 'https://aurorascan.dev',
    rpcUrl: 'https://mainnet.aurora.dev'
  },
  {
    chainId: 42262,
    name: 'Oasis',
    currency: 'ROSE',
    explorerUrl: 'https://explorer.emerald.oasis.dev',
    rpcUrl: 'https://emerald.oasis.dev'
  },
  {
    chainId: 66,
    name: 'OKExChain',
    currency: 'OKT',
    explorerUrl: 'https://www.oklink.com/okexchain',
    rpcUrl: 'https://exchainrpc.okex.org'
  },
  {
    chainId: 61,
    name: 'Ethereum Classic',
    currency: 'ETC',
    explorerUrl: 'https://blockscout.com/etc/mainnet',
    rpcUrl: 'https://www.ethercluster.com/etc'
  },
  {
    chainId: 421611,
    name: 'Arbitrum Rinkeby Testnet',
    currency: 'ETH',
    explorerUrl: 'https://rinkeby-explorer.arbitrum.io',
    rpcUrl: 'https://rinkeby.arbitrum.io/rpc'
  },
  {
    chainId: 80001,
    name: 'Mumbai Testnet',
    currency: 'MATIC',
    explorerUrl: 'https://mumbai.polygonscan.com',
    rpcUrl: 'https://rpc-mumbai.matic.today'
  }
];


// 3. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a AppKit instance
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true ,// Optional - defaults to your Cloud configuration
  themeMode: 'dark',
  auth: {
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'apple'], // add social logins (this will create a non-custodial wallet)
    showWallets: true,
    walletFeatures: true
  },
  // show tokens
  //...
  tokens: {
    1: {
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      image: 'token_image_url' //optional
    },
    137: {
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      image: 'token_image_url' //optional
    }
  },
  enableSwaps: true,
  allWallets:'SHOW'
  /*'--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-accent-color': '#f0f2f5',
    '--w3m-accent-fill-color': '#1565e6',
    '--w3m-background-color': 'linear-gradient(156.8deg, rgb(30, 144, 231) 27.1%, rgb(67, 101, 225) 77.8%)',
    '--w3m-color-mix': '#00DCFF',
    '--w3m-color-mix-strength': 20*/
 
  
  
})


/*
    <button onClick={() => modal.open()}>Connect Wallet</button>
        <button onClick={() => modal.open({ view: 'Networks' })}>Choose Network</button>
        <button onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>

*/


 // 4. Use modal hook
 const modal = useWeb3Modal()
 const state = useWeb3ModalState()
 const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme()
 const events = useWeb3ModalEvents()



  return (
    <header className="header">
      <div className="logo-name">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="name">Smart DEX</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="social-icons">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
        |
        <div className='connect'>
       
       <div>
       <w3m-account-button />

       </div>
        <div>
        <w3m-network-button />
        </div>
        
       
      
     
      
        </div>
      </div>
    </header>
  );
};

export default Header;
