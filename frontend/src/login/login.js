import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {loginUser} from "../store/actions/registerActions";

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    changeInputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    loginUserHandler = async () => {
        const Login = {
            username: this.state.username,
            password: this.state.password
        };
        await this.props.loginUser(Login);
    };

    render() {
        return (
            <>
                <div className="login-block">
                    {this.props.loginError && (
                        <p className="error">{this.props.loginError.error}</p>
                    )}
                    <div>
                        <input type="text"
                               placeholder="Enter your login"
                               onChange={this.changeInputHandler}
                               name="username"
                        />
                    </div>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={this.changeInputHandler}
                        name="password"
                    />
                </div>
                <button onClick={this.loginUserHandler}>Login</button>
                <NavLink to="/register" className="register">Don't have an account? Register</NavLink>
            </>
        );
    }
}

const mapStateToProps = state => ({
    loginError: state.user.loginError,
    user: state.user.user
});

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);