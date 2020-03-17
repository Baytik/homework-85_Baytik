import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchHistory} from "../../store/actions/trackActions";

class TrackHistory extends Component {

    componentDidMount() {
        this.props.fetchHistory()
    }

    render() {
        console.log(this.props.tracks)
        return (
            <div className="trackHistory">
                here
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tracks: state.tracksHistories.tracksHistories,
});

const mapDispatchToProps = dispatch => ({
    fetchHistory: () => dispatch(fetchHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);