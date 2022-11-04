const mongoose = require('mongoose');

const client = mongoose.connect('mongodb://127.0.0.1:27017/TodoList', {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
});

module.exports = client;