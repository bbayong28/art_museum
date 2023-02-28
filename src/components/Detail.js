import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { WORK } from '../data/data'


const Detail = () => {

  const { id } = useParams();
  const [works, setWorks] = useState()

  useEffect(() => { 
    let works = WORK.find((works) => works.id === parseInt(id))
    if (works) { 
      setWorks(works)
    }
  },[])

  return (
    <div className='Detail'>
      {   
        works
          ?
          (
            <section className='singlePage'>
              <div className="container">
                <div className='top'>
                  <img src={process.env.PUBLIC_URL + "/assets/img/work0" + works.id + ".jpg"} alt={works.id} />
                </div>
                <div className="bottom">
                  <h2>{works.title}</h2>
                  <p>{works.desc}</p>
                  <p>Author : {works.artist}</p>
                </div>
              </div>
            </section>
          )
          : null
      }
    </div>
  )
}

export default Detail