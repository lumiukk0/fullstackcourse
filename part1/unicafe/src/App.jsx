import { useState } from 'react'


const Button = ({ onClick, text }) => (  
  <button onClick={onClick}>    
    {text}  
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
    setTotal(good + neutral + bad)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)

    setTotal(good + neutral + bad)
  }
  const handleBad = () => {
    setBad(bad + 1)

    setTotal(good + neutral + bad)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text='good' />      
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h2>Statistics</h2>
      <p>good, {good}</p>
      <p>neutral, {neutral}</p>
      <p>bad, {bad}</p>
    </div>
  )
}
export default App
