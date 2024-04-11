import React from 'react'
import { Link } from 'react-router-dom'
import p9 from "../Assets/p9.jpg"
const Feedback = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px] z-5'>
      <div className='text-center'>
        <span className='bg-neutral-100 text-orange-800 rounded-full h-6 text-sm 
      font-medium px-2 py-1 uppercase'>Feedback</span>
      
      <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
        Your feedback
        <span className='bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text'>
          {" " }matters for us</span>
        </h2>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-6xl'>
          Your feedback is invaluable to us in improving our hospital services. Please share your thoughts to help us enhance your experience.
          Your input matters greatly.
        </p>
        <div className='flex justify-center my-5'>
        <img  className=" rounde-lg w-1/2 border border-blue-700
             shadow-blue-400 mx-2 my-4" src={p9} alt="p9" />
        </div>
        <div className="lg:flex justify-center space-x-12 items-center">
  <Link
    to="/Feedback"
    className="bg-gradient-to-r from-blue-400 to-red-700 py-2 px-3 rounded-md"
  >
    Feedback Form
  </Link>
  <p className="text-gray-600">Login here:</p>
  <Link
    to="/Login"
    className="bg-gradient-to-r from-blue-400 to-red-700 py-2 px-3 rounded-md"
  >
    Login
  </Link>
</div>

        </div>
    </div>
  )
}

export default Feedback