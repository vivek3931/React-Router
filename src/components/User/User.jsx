import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
  return (
    <div className='font-bold text-3xl flex items-center justify-center py-4 bg-orange-700 text-white'>User:{userid}</div>
  )
}

export default User