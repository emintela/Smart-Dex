import React from 'react'
import {BsFolderSymlink,BsGear} from 'react-icons/bs'
import{AiOutlineLike} from 'react-icons/ai'
import{BiCommentDots} from 'react-icons/bi'
import'./Sep.css'

const Sep = () => {
  return (
    <div className='sep'>
        <br/>
        <div><h1>....</h1></div>
        <BsGear className='icon'/>
        <BsFolderSymlink className='icon'/>
        <AiOutlineLike className='icon'/>
        <BiCommentDots className='icon'/>
        <div><h1>....</h1></div>
       
        
     
        
    </div>
  )
}

export default Sep