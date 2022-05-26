const { truncate } = require('lodash');
const mongoose = require('mongoose');

//const url = 'mongodb://127.0.0.1:27017/callBuddDB';
//const url = 'mongodb://127.0.0.1:27017/Demo';
const url = 'mongodb://127.0.0.1:27017/Harshit_fcb63bc4-7cee-4dbe-be2a-311ee7c43e09'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
    useFindAndModify: false,
});
const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})

module.exports = db;
