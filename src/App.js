import React from 'react';
import {  
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/"><h1>Hi, this is home page</h1></Route>    
      <Route exact path="/starred"><h1>Hi, this is starred page</h1></Route>
      <Route><h1>Hi, this is 404 page</h1></Route>
  </Switch>
  );
}

export default App;
