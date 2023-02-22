import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';
import { SLIDE } from '../data/data'; 


const Mainslide = () => {

  const [IDX, setIDX] = useState();
  useEffect(() => {
      setIDX(0)
  }, []);
  const mainSlide = useRef(null);
  const setting = {
      arrows: false,
      slidesToShow: 3,
      //dots: true,
      afterChange: index => setIDX(index),
      //autoplay: true,
      autoplaySpeed: 5000,
      // fade: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  }

  return (
    <div className='Home'>
      <section className='MainVisual'>
        <Slider {...setting} ref={mainSlide}>
          {
            SLIDE.map((slide, idx) => { 
              return (
                <figure key={slide.id} className={'box ' +'item0' + slide.id + (idx == IDX ? 'on' : '')}>
                  <img src={process.env.PUBLIC_URL + "img/slide0" + slide.id + ".png"} alt={slide.title} />
                  <div className="inner">
                    <p className='tit'>{slide.title}</p>
                    <Link to={slide.link} className='more'>
                      more
                    </Link>
                  </div>
                </figure>  
              )
            })
          }
        </Slider>
        <div className="slideArrows">
            <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-angle-left'></i></button>
            <button onClick={() => mainSlide.current.slickNext()}><i className='xi-angle-right'></i></button>
        </div>
      </section>      
    </div>
  )
}

export default Mainslide