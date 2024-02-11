const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    Comment: {
        type: String,
        required: true
    },
    User: {
        type: String,
        required: true
    }
});

const postSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    User: {
        type: String,
        required: true
    },
    Comments: [{
        type: commentSchema,
        required: false
    }]
});

const comSchema = mongoose.Schema({
    Community: {
        type: String,
        required: true
    },
    Posts: [postSchema]
});

const Coms = mongoose.model('Coms', comSchema);
module.exports = Coms;
