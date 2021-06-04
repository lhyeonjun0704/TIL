import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import '../css/Slider.scss'



function ImageSlider(props){
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear'
      }

    return(
    <Slider {...settings}>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={props.Cheolsoon} />
          </div>
          <ul className='social-icons'> 
            <li><a href='#'><FaFacebook /></a></li>
            <li><a href='#'><FaInstagram /></a></li>
            <li><a href='#'><FaTwitterSquare /></a></li>
          </ul>
          <div className='details'>
              <h4>Hwang Cheolsoon<br /><span className='job-title'>MuscleMania</span></h4>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={props.Kangmin} />
          </div>
          <ul className='social-icons'> 
            <li><a href='#'><FaFacebook /></a></li>
            <li><a href='#'><FaInstagram /></a></li>
            <li><a href='#'><FaTwitterSquare /></a></li>
          </ul>
          <div className='details'>
              <h4>Kim Kangmin<br /><span className='job-title'>NABBA</span></h4>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={props.Minsoo} />
          </div>
          <ul className='social-icons'> 
            <li><a href='#'><FaFacebook /></a></li>
            <li><a href='#'><FaInstagram /></a></li>
            <li><a href='#'><FaTwitterSquare /></a></li>
          </ul>
          <div className='details'>
              <h4>Kim Minsoo<br /><span className='job-title'>IFBB</span></h4>
          </div>
        </div>
      </div>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='card-image'>
            <img src={props.MS} />
          </div>
          <ul className='social-icons'> 
            <li><a href='#'><FaFacebook /></a></li>
            <li><a href='#'><FaInstagram /></a></li>
            <li><a href='#'><FaTwitterSquare /></a></li>
          </ul>
          <div className='details'>
              <h4>Kim Myeongseop<br /><span className='job-title'>Mr.Korea</span></h4>
          </div>
        </div>
      </div>
    </Slider>
    )
}

export default ImageSlider;