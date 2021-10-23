// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  return {...state, ...action}
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setCount] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () => setCount({count: state.count + step})
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
