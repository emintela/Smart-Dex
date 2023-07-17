import React from 'react'
import './Toggle.css'

const Toggle = ({label}) => {
  return (
    <div className='toggle'>
        <div className='toggle_switch_box'>
            <input type="checkbox"
            className='toggle_checkbox'
            name={label}
            id = {label}
            
            />

            <label className='toggle_label' htmlFor={label}>
                <span className='toggle_inner'/>
                <span className='toggle_switch'/>
            </label>
        


        </div>

    </div>
  )
}

export default Toggle