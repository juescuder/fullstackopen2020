import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0));

  function nextAnecdote ()
  {
    let random = Math.floor(Math.random() * ((props.anecdotes.length - 1) + 1));
    setSelected(random);
  }

  function addVote (slctd)
  {
    let copy = [...votes];
    copy[slctd] += 1;
    setVotes(copy);
  }
  
  return (
    <div>
      <div>
        <p>{props.anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
      </div>
      <div>
        <button onClick={() => addVote(selected)}>vote</button>
        <button onClick={() => nextAnecdote(selected)}>next anecdote</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))