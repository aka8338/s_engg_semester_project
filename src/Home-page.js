import React from 'react'
import Feedback from './Components/Feedback'
import About from './Components/Home'

const HomePage = () => {
  return (
    <>

      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <About />
        <Feedback/>
      </div>
      
    </>
  )
}
export default HomePage;