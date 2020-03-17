import React, {Component} from 'react';
import './tracks.css';
import {connect} from "react-redux";
import {fetchTrack} from "../../store/actions/trackActions";

class Tracks extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchTrack(id);
    }

    render() {
        return (
            <div className="tracks">
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
    tracks: state.tracks.tracks,
});

const mapDispatchToProps = dispatch => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);