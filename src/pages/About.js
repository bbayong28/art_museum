import React from 'react'
import { FiMap, FiClock, FiMail, FiPhone } from "react-icons/fi";

const About = () => {
  return (
    <div className='About'>
        <h2>About</h2>
      <div className="container">
        <div className='left'>
          <img src={process.env.PUBLIC_URL + "/assets//img/about.jpg"} alt=''/>        
          <div className="info">
            <p className='address'>
              <FiMap className='icon' />
              부산시 동래구 금강로 12번길
            </p>
            <p className='time'>
              <FiClock className='icon'/>
              화요일 - 일요일 : 10 AM - 6 PM (월요일 휴무)
            </p>
            <p className='email'>
              <FiMail className='icon'/>
              hankook@hankook.com
            </p>
            <p className='number'>
              <FiPhone className='icon'/>
              +82 51-758-2239
            </p>
          </div>
        </div>
        <div className='right'>
          <p className='desc'>
            2020년 4월에 개관한 한국미술관은 1,000평에 지상2층으로 이루어져 있는데, 다양한 크기의 여러 개의 전시 공간으로 이루어져있습니다. 다양한 곡면과 백색의 전시공간으로 가급적 인조광을 배제하고 자연광을 끌어 들여 은은하고 차분한 분위기를 연출하며 시시때때로 변하는 빛의 향연을 볼 수 있는 것이 특징입니다. 도시의 지역 관객들이 작품에 접근하기 좋은 도심에 위치해 있으며 건축물 자체만으로 즐거움을 선사하는 공간이 됩니다.<br/><br/>
            한국미술관은 동시대 유명 미술작가들의 주요 작품과 그 흐름을 회수 할수 있는 기회를 보여드립니다. 작가들의 개인전과 합작, 국내 국외 아티스트들의 전시를 감상 하실수 있습니다.전시 뿐 아니라 카페, 서점, 레스토랑 등 다양한 문화공간이 입점해 다양한 경험을 드릴 수 있습니다<br/><br/>2020년 4월에 개관한 한국미술관은 1,000평에 지상2층으로 이루어져 있는데, 다양한 크기의 여러 개의 전시 공간으로 이루어져있습니다. 다양한 곡면과 백색의 전시공간으로 가급적 인조광을 배제하고 자연광을 끌어 들여 은은하고 차분한 분위기를 연출하며 시시때때로 변하는 빛의 향연을 볼 수 있는 것이 특징입니다. 도시의 지역 관객들이 작품에 접근하기 좋은 도심에 위치해 있으며 건축물 자체만으로 즐거움을 선사하는 공간이 됩니다.<br/><br/>
            한국미술관은 동시대 유명 미술작가들의 주요 작품과 그 흐름을 회수 할수 있는 기회를 보여드립니다. 작가들의 개인전과 합작, 국내 국외 아티스트들의 전시를 감상 하실수 있습니다.전시 뿐 아니라 카페, 서점, 레스토랑 등 다양한 문화공간이 입점해 다양한 경험을 드릴 수 있습니다.<br /><br />
            2020년 4월에 개관한 한국미술관은 1,000평에 지상2층으로 이루어져 있는데, 다양한 크기의 여러 개의 전시 공간으로 이루어져있습니다. 다양한 곡면과 백색의 전시공간으로 가급적 인조광을 배제하고 자연광을 끌어 들여 은은하고 차분한 분위기를 연출하며 시시때때로 변하는 빛의 향연을 볼 수 있는 것이 특징입니다. 도시의 지역 관객들이 작품에 접근하기 좋은 도심에 위치해 있으며 건축물 자체만으로 즐거움을 선사하는 공간이 됩니다.<br/><br/>
            한국미술관은 동시대 유명 미술작가들의 주요 작품과 그 흐름을 회수 할수 있는 기회를 보여드립니다. 작가들의 개인전과 합작, 국내 국외 아티스트들의 전시를 감상 하실수 있습니다.전시 뿐 아니라 카페, 서점, 레스토랑 등 다양한 문화공간이 입점해 다양한 경험을 드릴 수 있습니다.<br /><br />
            2020년 4월에 개관한 한국미술관은 1,000평에 지상2층으로 이루어져 있는데, 다양한 크기의 여러 개의 전시 공간으로 이루어져있습니다. 다양한 곡면과 백색의 전시공간으로 가급적 인조광을 배제하고 자연광을 끌어 들여 은은하고 차분한 분위기를 연출하며 시시때때로 변하는 빛의 향연을 볼 수 있는 것이 특징입니다. 도시의 지역 관객들이 작품에 접근하기 좋은 도심에 위치해 있으며 건축물 자체만으로 즐거움을 선사하는 공간이 됩니다.<br/><br/>
            한국미술관은 동시대 유명 미술작가들의 주요 작품과 그 흐름을 회수 할수 있는 기회를 보여드립니다. 작가들의 개인전과 합작, 국내 국외 아티스트들의 전시를 감상 하실수 있습니다.전시 뿐 아니라 카페, 서점, 레스토랑 등 다양한 문화공간이 입점해 다양한 경험을 드릴 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About