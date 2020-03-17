import React, {Component} from 'react';
import './register.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {postRegister} from "../../store/actions/registerActions";

class Register extends Component {

    state = {
      email: '',
      password: ''
    };

    changeInputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    newUser = async () => {
        const User = {
            username: this.state.email,
            password: this.state.password
        };
        await this.props.postRegister(User);
    };

    render() {
        return (
            <div className="Register">
                <NavLink to="/">Go Home</NavLink>
                <form>
                <div>
                    <input type="email" placeholder="Create a username" onChange={this.changeInputHandler} name="email"/>
                </div>
                <div>
                    <input type="password" placeholder="Create a password" onChange={this.changeInputHandler} name="password"/>
                </div>
                <div>
                    <button onClick={this.newUser}>Register</button>
                </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postRegister: (user) => dispatch(postRegister(user)),
});

export default connect(null, mapDispatchToProps)(Register);