import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Greetings</h1>
    <Hello name="Julian"/>
    <Hello name="Escudero"/>
  </div>
)

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))