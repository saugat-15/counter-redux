import React from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {

    const navigate = useNavigate();
  return (
    <div>Welcome
        <button onClick={() => navigate('/counter')}>Counter</button>
    </div>
  )
}

export default Welcome