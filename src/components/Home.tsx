import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()



    const handleClick = () => {
        navigate('/dashboard')
    }

  return (
   <div className='home'>
    <h3 className='mb-4'>Please click Here for go to the Next page.</h3>
    <button className="uk-button uk-button-primary" onClick={handleClick}>CLICK HERE</button>
   </div>
  )
}

export default Home
