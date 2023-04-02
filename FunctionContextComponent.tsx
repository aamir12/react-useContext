import * as React from 'react';
import { ThemeContext } from './App';

export default function FunctionContextComponent() {
  const darkTheme = React.useContext(ThemeContext);

  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  //it realy combersume process using consumer
  // return (
  //   <ThemeContext.Consumer>
  //     {(darkTheme) => {
  //       return <div>Function Theme {darkTheme ? 'Dark' : 'Light'}</div>;
  //     }}
  //   </ThemeContext.Consumer>
  // );

  return <div style={themeStyle}>Functional Component</div>;
}
