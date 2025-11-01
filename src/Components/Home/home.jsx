import React from 'react'
import './home.css'
import './glitch.css'
function home() {
  return (
    <div className='home'>
      <div className='h2'>👋 Hi, I’m Walid El-Moussaoui</div>
      <div className='homatext'>
        I’m an Ambitious & Passionate <b className='glitch'> Full-Stack Web Developer</b>
        . I build fast, responsive, and scalable web applications using the latest technologies.
      </div>
        <div>
            <a href="http://" >Available for remote work</a>
        </div>
        <p className='border'></p>
    </div>
  )
}

export default home
