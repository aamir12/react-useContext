import * as React from 'react';
import './style.css';
import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponent from './FunctionContextComponent';
export const ThemeContext = React.createContext(false);
/**
 * createContext is used to share data between different component 
 * 1)Create context 
 *  export const ThemeContext = React.createContext(false);
 * 2) Wrap the component where we want to share the data 
 *  <ThemeContext.Provider value={darkTheme}></ThemeContext.Provider>
 * 3) In the class component we can access the data by using 
 *  <ThemeContext.Consumer>
        {(darkTheme) => { 
          Other compoent
        }}
    </ThemeContext.Consumer>
    4) In functional compnent; it is very easy to access data 
     const darkTheme = React.useContext(ThemeContext);
     
 */
export default function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}
