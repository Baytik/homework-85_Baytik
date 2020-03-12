import React, {Component} from 'react';
import './App.css';
import artists from "./Components/artists/artists";
import {Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Switch>
                <Route exact component={artists}/>
            </Switch>
        </div>
    )
  }
}

export default App;
