import React from 'react'
import './PopUP.css'

function PopUps(props) {
  return (props.trigger) ?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={()=> props.setTrigger(false)}>Close</button>
            {props.children}

        </div>
      
    </div>
  ) : "";
}

export default PopUps
