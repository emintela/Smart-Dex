import React from 'react'
import { Link } from 'react-router-dom'
import {BsFolderSymlink,BsSafe2Fill} from 'react-icons/bs'
import{AiOutlineLike} from 'react-icons/ai'
import{BiCommentDots} from 'react-icons/bi'
import millify from 'millify';
import { useQuery } from 'react-query';
import axios from 'axios';
import "./News.css"

const News = () => {


    const fetchNws = async( )=>{
        const data = await axios.get("https://bing-news-search1.p.rapidapi.com/news/search",
        {
            params:
                   {
                    q: 'defi', count: '7', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'
                  },
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '4e02e0c1c2mshf7e7e94694b6bfbp1f9dfdjsnfed200bf71f0',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
          }
        }
        )
           
      
        return data
      }
      
      const {isLoading,data:newsdt,error} = useQuery('news',fetchNws)
      
      
      
      if (isLoading) return (<h2>Loading....</h2>)
      if(error) return error.message
      
      
      console.log(newsdt)
  return (
    <div>

    {
        newsdt.data.value.map((news)=>{
          return(
            <div className='cd-wrap'>
               <div className='gainers'>
                   <div className='newstp'> <p><BsSafe2Fill className='icon'/> {news?.provider?.datePublished}</p>
                    <p className='icon'><h1>....</h1></p> 
                   </div>
                   <hr/>
                   <div className='gainers-tp'> 
                     
                       <h2>{news.name}</h2>
                   </div>
                   <hr></hr>
        <div className='gainers-bdy'>
            
                <br/>
                <p>
              <img src={news?.image?.thumbnail?.contentUrl} alt="news"/>
            
                {news.description > 100 ?
                `${news.description.substring(0,100)}...`
                : news.description}
              </p>
           

        </div>
        <hr></hr>
        <div className='btm'>
            <BsFolderSymlink className='icon'/>
           <AiOutlineLike className='icon'/>
           <BiCommentDots className='icon'/>

        </div>
        
    </div>
    </div>

         )
        })
       } 
      
      </div>
     
  )
}

export default News