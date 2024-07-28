import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counter'

const App = () => {
  const count = useSelector((state) => state.counter)
  const counts = useSelector((s) => s.words)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count is {count}</h1>
      <h1>{counts}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
export default App