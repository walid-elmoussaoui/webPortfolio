import React from 'react'
import HeaderNave from './Components/header/header-nave.jsx'
import Home from './Components/Home/home.jsx'
import Skils from './Components/skils/skils.jsx'
import Project from './Components/project/project.jsx'
import Service from './Components/service/service.jsx'
import Contact from './Components/footer/contact/contact.jsx'


const App = () => {
  return (
    <div>
      <HeaderNave />
      <Home/>
      <Skils />
      <Project />
      <Service />
      <Contact />
    </div>
  )
}

export default App
