import React from 'react';
import NavBar from './NavBar'

const App = (props) => {

    document.title = 'stephanie diaz'
    const { children } = props
    return (
    <div id="app" >
      <NavBar />
    { children }
    </div>
	);

}

export default App;
