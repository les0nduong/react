
import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.clickHandle}> {props.title} </button>
  )
}

const StatisticLine = (props) => {
  return (
    <td>{props.text} {props.number}</td>
  )
}

const History = (props) => {
  if (props.all === 0) {
    return (
      
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <tr>
      <StatisticLine text="Good" number={props.good} />
      <StatisticLine text="Bad" number={props.bad} />
      <StatisticLine text="Neutral" number={props.neutral} />
      <StatisticLine text="Average" number={props.avg} />
      <StatisticLine text="All" number={props.all} />
      </tr>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const handleGood = () => {
    const updated = good + 1
    setAvg((updated - bad) / (updated + bad + neutral))
    setGood(updated)
    setAll(updated + neutral + bad)
  }
  const handleNeutral = () => {
    const updated = neutral + 1
    setNeutral(updated)
    setAll(updated + good + bad)
    setAvg((good - bad) / (updated + good + bad))
  }
  const handleBad = () => {
    const updated = bad + 1
    setAvg((-updated + good) / (updated + good + neutral))
    setBad(updated)
    setAll(updated + neutral + good)
  }
  return (
    <div>
      <Button title="Good" clickHandle={handleGood} />
      <Button title="Bad" clickHandle={handleBad} />
      <Button title="Neutral" clickHandle={handleNeutral} />
      <History all={all} good={good} bad={bad} neutral={neutral} avg={avg} />


    </div>
  )
}

export default App