import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, num}) => (
  <tr>
  <td>{text}</td>
  <td>{num}</td>
  </tr>
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
      <table style={{float: 'left', listStyle: 'none'}}>
        <thead></thead>
        <tbody>
          <Statistic text='good' num={good}/>
          <Statistic text='neutral' num={neutral}/>
          <Statistic text='bad' num={bad}/>
          <Statistic text='all' num={good + neutral + bad}/>
          <Statistic text='average' num={good + neutral + bad / 3}/>
          <Statistic text='positive' num={positive}/>
        </tbody>
        <tfoot></tfoot>
      </table>
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