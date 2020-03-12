const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    counter: {
        type: Number,
        required: true
    },
    album: {
        type: String,
        required: true
    }
});

const Track = mongoose.model('Track', TrackSchema);

module.exports = Track;