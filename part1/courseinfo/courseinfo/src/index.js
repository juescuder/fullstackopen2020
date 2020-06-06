import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Label = ({text, num}) => (
  <label>{text} {num}</label>
)

const GiveFeedback = ({ setGood, setNeutral, setBad }) => (
  <div>
    <h1>give feedback</h1>
    <Button onClick={setGood} text='good'/>
    <Button onClick={setNeutral} text='neutral'/>
    <Button onClick={setBad} text='bad'/>
  </div>
)

const Statistics = ({ good, neutral, bad }) => {
  
  let content = (
    <label>No feedback given</label>
  )

  if(good + neutral + bad > 0)
  {
    let positive = 0;

    if(good > 0)
      positive = good * 100 / (neutral + bad + good)

    content = (
      <ul style={{float: 'left', listStyle: 'none'}}>
        <li><Label text='good' num={good}/></li>
        <li><Label text='neutral' num={neutral}/></li>
        <li><Label text='bad' num={bad}/></li>
        <li><Label text='all' num={good + neutral + bad}/></li>
        <li><Label text='average' num={good + neutral + bad / 3}/></li>
        <li><Label text='positive' num={positive}/></li>  
      </ul>
    )
  }
  
  return (
    <div>
    <h1>statistics</h1>
    {content}
  </div>
  )
}

const App = (props) => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <GiveFeedback setGood={() => setGood(good+1)} 
                    setNeutral={() => setNeutral(neutral+1)}
                    setBad={() => setBad(bad+1)}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))