import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span><span>Your</span>
          </div>
          <div><span>Ideal body</span></div>

          <div><span>
            In here we will help you to shape and build your
            ideal body and live up your live to the fullest.
          </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className='hero-image'/>
        <img src={hero_image_back} alt="" className='hero-image-pack' />
      
      <div className="calories">
        <img src={calories} alt="" />
        <div>
        <span>Calories Burned</span><span>220 kcal</span>

        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Hero