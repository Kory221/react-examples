import { useState } from 'react';
import './App.css';


/*
//Person ne fait pas partie de cet APP.. Il s'agit juste d'un assignment de
//la leçon "more on state" et j'ai utiliser cet App juste pour afficher Person sur le 
//local Server
//(voir assignment dans le fichier Person.jsx

import Person from './Person.jsx'

function App() {
  return ( 
  <Person />
  );
}
*/

 
const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [count, setCount] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    if (backgroundColor !== color) {
       setCount(count + 1);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
      <div className='countDiv'>Count : {count}</div>
    </div>
  );
}

export default App;
