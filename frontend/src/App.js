import React, {Component} from 'react';
import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import artists from "./Components/artists/artists";
import albums from "./Components/albums/albums";
import tracks from "./Components/tracks/tracks";
import register from "./Components/register/register"
import login from "./Components/login/login";
import {connect} from "react-redux";
import trackHistory from "./Components/trackHistory/trackHistory";

class App extends Component {
  render() {
    return (
        <div className="App">
            {!this.props.user ? (
                <NavLink to="/login" className="login-user">Login</NavLink>

            ) : (
                <>
                <a href="/" className="login-user">Logout</a>
                <NavLink to="/track_history" className="login-user">Track History</NavLink>
                </>
            )}
            <Switch>
                <Route path="/" exact component={artists}/>
                <Route path="/albums/:id" component={albums}/>
                <Route path="/track/:id" component={tracks}/>
                <Route path="/register" component={register}/>
                <Route path="/login" component={login}/>
                <Route path="/track_history" component={trackHistory}/>
            </Switch>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.user.user
});

export default connect(mapStateToProps)(App);
