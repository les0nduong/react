import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const score = {}

  for (let i = 0; i < anecdotes.length; i++) {
    score[i] = 0
  }
  const [selected, setSelected] = useState(getRandomInt(anecdotes.length))

  const [scoreObj, setScore] = useState(score)


  const [maxVoteIndex, setMaxVoteIndex] = useState(0)

  const getQ = () => {
    const rnd = getRandomInt(anecdotes.length)
    setSelected(rnd)
  }


  const handleVote = () => {
    const newScore = {
      ...
      scoreObj
    }
    console.log(newScore)
    newScore[selected] = newScore[selected] + 1

    let maxVoteIndexUpdate = maxVoteIndex

    for (const key in newScore) {
      if (newScore[key] > newScore[maxVoteIndexUpdate]) {
        maxVoteIndexUpdate = key
      }
    }


    setMaxVoteIndex(maxVoteIndexUpdate)
    setScore(newScore)
  }
  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
     Has  {scoreObj[selected]} votes
      </div>
      <div>
        <button onClick={getQ}>Pick a Quote</button>
        <button onClick={handleVote}>Vote this Quote</button>
      </div>
      <div>
        <h1>
          Anecdotes with the most votes
        </h1>
        <div>
          "{anecdotes[maxVoteIndex]}" has {scoreObj[maxVoteIndex]} votes
        </div>
      </div>
    </>)
}

export default App