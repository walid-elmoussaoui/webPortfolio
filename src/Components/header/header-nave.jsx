import React from 'react'
import './header-nave.css'
const HeaderNave = () => {
  return (
    <div>
      <nave className='header-nave'>
        <img className='prfile nave' src="/src/assets/prfil.png" alt="profile" />
        <a  href="#home">Home</a>
        <a  href="#about">prject</a>
        <a  href="#service">service</a>
        <a href="#contact">Contact</a>
        <a  href="https://www.linkedin.com/in/walid-el-moussaoui-502625387/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDOKkH63MRTijxiWoEaol6w%3D%3D"><img className='linkedin' src="/src/assets/linkedin.png" alt="linkedin.png" /></a>
      </nave>
    </div>
  )
}

export default HeaderNave
