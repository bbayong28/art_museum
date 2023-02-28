import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WORK } from '../data/data'
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";

const Works = () => {

  let navigate = useNavigate()

  return (
    <section className='Works'>
      <div className="container grid">
        {
          WORK.map((work, i) => { 
            return (
              <div
                className='box boxItems'
                key={work.id}
                onClick={() => { navigate(`/detail/${work.id}`) }}
              >
                <div className='img'>
                  <img src={process.env.PUBLIC_URL + "/assets/img/work0" + work.id + ".jpg"} alt={work.id} />
                </div>
                <div className='details'>
                  <div className='tag'>
                    <AiOutlineTags className='icon' />
                    <span>&#35;{work.category}</span>
                  </div>
                  <h3>{work.title}</h3>
                  <p>{work.desc.slice(0, 100)}...</p>                  
                  <span className='date'><AiOutlineClockCircle className='icon'/>{work.date}</span>
                </div>
              </div>
            )
          })
        }
      </div>
        

    </section>
  )
}

export default Works