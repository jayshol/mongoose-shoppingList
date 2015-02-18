var mongoose = require('mongoose');
var db = require('./db');
var itemSchema = new mongoose.Schema({
	item : String
});
var ItemObj = mongoose.model('Item', itemSchema);


exports.create = function(item){
	var newObj = new ItemObj({item:item});
	newObj.save(function(err, item){
		if(err) return console.log(err);			
	});
}

exports.retrieveAll = function(req, res){	
	ItemObj.find(function(err, items){
		if(err) return console.error(err);
		items.forEach(function(item, i){
			res.write(i + "." + item + "\n");
		});
		res.end();
	});
}

exports.retrieveOne = function(req, res, param){
	ItemObj.find({item:param}, function(err, item){
		if(err) return console.error(err);
		console.log(item[0]);
		res.write('Item is :' + item[0].item);
		res.end();
	});
}

exports.delete = function(req, res,id) {
    ItemObj.remove({item:id}, function (err, result) {
        if (err) return console.error(err);
        res.write('item deleted successfully.');
        res.end();
    });
}

exports.update = function(req, res, param, newItem) {
    ItemObj.update({item: param},{item:newItem}, function (err, result) {
        if (err) return console.error(err);
        res.write('Item updated.');
        res.end();
    });
}
