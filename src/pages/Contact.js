import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

//npm i @emailjs/browser

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_r9ndmh4',
      'template_kasacja',
      form.current,
      '-6mp9uTKXbD9nctI_'
    )
      .then((result) => {
        console.log(result.text);
        console.log("maessage sent")
      },
      (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <div className='Contact'>

      <div className='backImg'>
        <img src={process.env.PUBLIC_URL + "/assets/img/account.jpg"} alt='' />
        <div className='text'>
          <h3>Contact us</h3>
          <p>전시회 및 이벤트 소식을 이메일 수신 원하시면 우편목록에 가입하도록 요청하실 수 있습니다.</p>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      
    </div>
  )
}

export default Contact