import React from 'react'
import cardstyle from './cardstyle.css'
import truck from "../images/truck.svg"
import item from "../images/itemimg.svg"
import item2 from "../images/itemimg2.svg"
import item3 from "../images/itemimg3.svg"
import rigth from "../images/rigth.svg"
import left from "../images/left.svg"




export const Card = () => {
  return (
    <><div className='trading'>
    <p>Trading Now</p>
    <div>
    <button>L</button>
    <button>R</button>
    </div>
  </div>
    <section className='section3'>
      
      <div className="cardMain">
        <div className='img-lable'>Hot</div>
        <img src={item} alt="" className='Img-item' />
        <div className="name-card">Playstation 5</div>
        <div className="deliverd">1 Day <img src={truck} alt="" /></div>
        <div className="price-card">
          <p>Start on</p>
          <p>500/month</p>
        </div>
        <button><div>Rent Now</div></button>

      </div>
      <div className="cardMain">
        <div className='img-lable2'>New</div>
        <img src={item2} alt="" className='Img-item' />
        <div className="name-card">GamingPC</div>
        <div className="deliverd">1 Day <img src={truck} alt="" /></div>
        <div className="price-card">
          <p>Start on</p>
          <p>500/month</p>
        </div>
        <button><div>Rent Now</div></button>

      </div>
      <div className="cardMain">

        <img src={item3} alt="" className='Img-item' />
        <div className="name-card">Playstation 5</div>
        <div className="deliverd">1 Day <img src={truck} alt="" /></div>
        <div className="price-card">
          <p>Start on</p>
          <p>500/month</p>
        </div>
        <button><div>Rent Now</div></button>

      </div>
      <div className="cardMain">
        <img src={item2} alt="" className='Img-item' />
        <div className="name-card">Playstation 5</div>
        <div className="deliverd">1 Day <img src={truck} alt="" /></div>
        <div className="price-card">
          <p>Start on</p>
          <p>500/month</p>
        </div>
        <button><div>Rent Now</div></button>

      </div>
      <div className="cardMain">

        <img src={item3} alt="" className='Img-item' />
        <div className="name-card">Playstation 5</div>
        <div className="deliverd">1 Day <img src={truck} alt="" /></div>
        <div className="price-card">
          <p>Start on</p>
          <p>500/month</p>
        </div>
        <button><div>Rent Now</div></button>

      </div>
      <div className="cardMain">

        <img src={item} alt="" className='Img-item' />
        <div className="name-card">Playstation 5</div>
        <div className="deliverd">1 Day <img src={truck} alt="" /></div>
        <div className="price-card">
          <p>Start on</p>
          <p>500/month</p>
        </div>
        <button><div>Rent Now</div></button>

      </div>



    </section>
    </>
  )
}