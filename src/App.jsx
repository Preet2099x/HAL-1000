import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main'
 

const App = ()=> {
  
  return (
    <>
    <div className="sidebar">
      <Sidebar/>
    </div>
    <div className="main">
      <Main/>
    </div>
    </>
    
  )
}

export default App;
