import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import artists from "./Components/artists/artists";
import albums from "./Components/albums/albums";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={artists}/>
                <Route path="/albums/:id" component={albums}/>
            </Switch>
        </div>
    )
  }
}

export default App;
