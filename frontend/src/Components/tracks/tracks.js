import React, {Component} from 'react';
import './tracks.css';
import {connect} from "react-redux";
import {fetchTrack} from "../../store/actions/trackActions";
import {NavLink} from "react-router-dom";

class Tracks extends Component {

    state = {
        username: '',
        password: ''
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchTrack(id);
    }

    changeInputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    render() {
        return (
            <div className="tracks">
                <div className="login-block">
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
                <button>Login</button>
                <NavLink to="/register" className="register">Don't have an account? Register</NavLink>
                {this.props.tracks.map(track => (
                    <div className="track-block" key={track._id}>
                        <strong>{track.counter}</strong>
                        <h2>{track.title}</h2>
                        <p>{track.duration}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.tracks.tracks
});

const mapDispatchToProps = dispatch => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);