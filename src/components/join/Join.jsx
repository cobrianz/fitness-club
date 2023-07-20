import React, { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
  return (
        <div className="join" id='join__us'>
            <div className="left__j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right__j">
                <form ref={form} className='email__container'>
                    <input type="email" name="user__email" id="" placeholder='Email'/>
                     <button className='btn btn__j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join