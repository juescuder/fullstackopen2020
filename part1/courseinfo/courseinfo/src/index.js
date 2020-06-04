import React, { userState, useState } from 'react';
import ReactDOM from 'react-dom';

//-------------------------PART 1 -----------------------------
// const Header = (props) => {

//   return(
//     <h1>{props.course}</h1>
//   )
// }

// const Content = (props) => {

//   return(
//     <p>
//       {props.title} {props.excerciseCount}
//     </p>
//   )
// }

// const Total = (props) => {

//   return(
//     <div>
//       <p>
//         Number of excercises: {props.total}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of component',
//       exercises: 14
//     }
//   ]
  
// return (
//   <div>
//     <Header course={course}/>
    
//     {parts.map(x => {
//       return (<Content title={x.name} excerciseCount={x.exercises} />)
//     })}

//     <Total total={parts.reduce((a, b) => a+(b['exercises'] || 0), 0)}/>
//   </div>
//   )
// }

//-------------------------PART 2 -----------------------------

// const Hello = ({name, age}) => {

//   const bornYear = () => new Date().getFullYear() - age

//   return(
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
  
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26+10}/>
//       <Hello name={name} age={age}/>
//     </div>
//   )
// }
// ReactDOM.render(<App/>, document.getElementById('root'))

//-------------------------PART 3 -----------------------------

// const App = (props) => {
  
//   const [counter, setCounter] = useState(0)

//   setTimeout(  
//     () => setCounter(counter+1),
//     1000
//   )

//   return (
//     <div>{counter}</div>
//   )
// }

//-------------------------PART 4 -----------------------------

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text="Plus"/>
      <Button handleClick={decreaseByOne} text="Minus"/>
      <Button handleClick={setToZero} text="Zero"/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))