import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans__container">
      <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i)=>(
        <div className="plan" key={i}>
          {plan.icon}
          <span>{plan.name}</span>
          <span>$ {plan.price}</span>

          <div className="features">
            {plan.features.map((Feature, i)=>(
              <div className="feature">
              <img src={whiteTick} alt="" />
              <span key={i}>{Feature}</span>
              </div>
            ))}
          </div>
           <div>
            <span>See more benefits →</span>
            </div>
           <button className='btn'>Join Now</button>
        </div>
        ))}

      </div>
    </div>
  )
}

export default Plans