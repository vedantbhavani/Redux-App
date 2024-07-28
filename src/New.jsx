import React from 'react'
import {useSelector} from 'react-redux'

const New = () => {
    const count = useSelector((s)=> s.words)
  return (
    <div>
        <h1>New count is {count}</h1>
    </div>
  )
}

export default Newa
