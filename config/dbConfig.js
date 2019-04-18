var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://AdminUser:Admin123@mynewcluster-6kkpq.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("we're connected!")
});