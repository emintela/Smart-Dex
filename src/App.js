

import logo from './logo.svg';
import './index.css';
import Header from './Header/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Swap from './pages/Swap';
import Farm from './pages/Farm';
import Pool from './pages/Pool';
import Sidebar from './components/sidebar/Sidebar';
import {BsArrowUpRightSquare} from 'react-icons/bs'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Gainers from './components/Gainers/Gainers';
import { QueryClient,QueryClientProvider } from 'react-query';
import { useQuery } from 'react-query';
import Donut from './components/Donut/Donut';
import Barchart from './components/BarChart/Barchart';
import Losers from './components/Losers/Losers';
import News from './components/News/News';
import Sep from './components/Sep';
import Stake from './pages/Stake';
import Launchpad from './pages/Launchpad';
import Buy from './pages/Buy';




function App() {
 
//const [cryptos,setCryptos] = useState({})

  
/*
  useEffect(() => {

    const fetchData = async( ) => {
        try {
            const res = await axios.get(`https://famous-quotes4.p.rapidapi.com/random`, {
                headers: {
                    
                    'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
                    'x-rapidapi-key': '4e02e0c1c2mshf7e7e94694b6bfbp1f9dfdjsnfed200bf71f0',
                },
                params: { category: 'all', count: '1' },
            });
            
            
         setData(res.data[0].text)

         console.log(data)
      
           
        
        } catch (err) {
            console.log(err);
        }
    };

// Trigger the API Call
console.log(data)

fetchData() 



},[ ]);*/


// fetch data using react query

const [color,setColor] = useState(false)


const changeColor=()=>{
  if(window.scrollY >= 60){
    setColor(true)
  }else{
    setColor(false)
  }
}

window.addEventListener('scroll', changeColor)



//

const fetchData = async( )=>{
  const data = await axios.get("https://coinranking1.p.rapidapi.com/coins",
     { params:
       {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          'tiers[0]': '1',
          orderBy: 'change',
          orderDirection: 'desc',
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

const {isLoading,data,error} = useQuery('users',fetchData)



if (isLoading) return (<h2>Loading....</h2>)
if(error) return error.message


console.log(data)

  return (
  
    
    <div className='main-page'>
      
      <div className='left'>
          <img className="side-icon" src="assets/images/logo-white.png" alt='inner'/>
          <hr/>
          
           <Sidebar/>
      </div>
      
      <div className='right'>

       

          <div className='right-top'>
              <Header/>
              <hr></hr>
        
          <div className ={ color ? "right-middle color" : "right-middle"}>
            
            <div className='right-middle-inner'>
             Market Cap:  <span><BsArrowUpRightSquare/>   5%</span>
             <hr></hr>
             <div className='inner-inner'>
              <h2>$ 1.02B  </h2>
              <button>FREE</button>
             </div>
             <div className='more-details'>
              View Market Cap, Trending and More...
             </div>
             
            </div>
            <div className='right-middle-inner'>
             Market Cap:  <span><BsArrowUpRightSquare/>   5%</span>
             <hr></hr>
             <div className='inner-inner'>
              <h2>$ 1.02B  </h2>
              <button>FREE</button>
             </div>
             <div className='more-details'>
              View Market Cap, Trending and More...
             </div>
             
            </div>
            <div className='right-middle-inner'>
             Market Cap:  <span><BsArrowUpRightSquare/>   5%</span>
             <hr></hr>
             <div className='inner-inner'>
              <h2>$ 1.02B  </h2>
              <button>FREE</button>
             </div>
             <div className='more-details'>
              View Market Cap, Trending and More...
             </div>
             
            </div>
            <div className='right-middle-inner'>
             Market Cap:  <span><BsArrowUpRightSquare/>   5%</span>
             <hr></hr>
             <div className='inner-inner'>
              <h2>$ 1.02B  </h2>
              <button>FREE</button>
             </div>
             <div className='more-details'>
              View Market Cap, Trending and More...
             </div>
             
            </div>
            

          </div>
         </div>
         <div className='sep'>
          <br></br> <br></br><br></br><br></br>  <br></br> <br></br><br></br><br></br> <br></br>   <br></br><br></br>
         
         </div>
        <div className='right-bottom'>
              <div className='right-bottom-left'>
                  <div className='right-bottom-left-top'> 
                       <div className='donut-chart'>
                          <h2>Summary of Dexes TVL</h2>
                  
                              <Donut/>

                       </div>
                      <div className='bar-chart'>
                         <h2>Summary of Dexes TVL</h2>
                        
                        <Barchart/>
                     </div>

              </div>
              <div className='right-bottom-left-middle'>
                <div className='tpgainers'>
                  <h2>Top Gainers</h2>
                {
              data.data.data.coins.map((coin)=>{
                return(
                  <Gainers rank={coin.rank} 
                  name={coin.name} 
                  symbol ={coin.symbol}
                  icon={coin.iconUrl} mkcap={coin.marketCap} percent={coin.change}
                  price = {coin.price}
                 

                  />
                )
              })
             }
                </div>

            


                <div className='losers'>
                  <h2>Top Losers</h2>
                  <Losers/>
                </div>
                
              
             

              </div>
              <div className='right-bottom-left-bottom'>
              <div className='newsbtm'>
                  <h2>Latest DeFi News</h2>
                  <News/>

                </div>

              </div>


            </div>


            <div className='right-bottom-right'>
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/swap" element={<Swap/>}> </Route>
                  <Route path="/farm" element={<Farm/>}></Route>
                  <Route path="/pool" element={<Pool/>}> </Route>
                  <Route path="/stake" element={<Stake/>}> </Route>
                  <Route path="/launchpad" element={<Launchpad/>}> </Route>
                  <Route path="/buy" element={<Buy/>}> </Route>

       
              </Routes>

              

            </div>

            
             

          </div>
      
      </div>
  
    </div>
   
    
  );

 
}

export default App;
