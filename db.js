var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error',function(err){
	console.log('error');
});

db.on('connected', function(){
	console.log('Database Connection is open');
});

db.on('disconnected', function(){
	console.log('Database connection disconnected');
});

process.on('SIGINT', function(){
	db.close(function(){
		console.log('Database connection is closed.');
		process.exit(0);
	});
});

