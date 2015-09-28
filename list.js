function ListDAO(){

	if(false === (this instanceof listDAO)){
		console.log('Warning. listDAO called without new');
		return new listDAO;
	}

	var mongoose = require('mongoose');
	var db = require('./db');
	
	var itemSchema = new mongoose.Schema({
		item : String
	});

	this.ItemObj = mongoose.model('Item', itemSchema);

	this.createItem = function(item, callBack){
		var newObj = new this.ItemObj(item);
		newObj.save(function(err, item){
			callBack(err, item);			
		}); 

	}

	this.retrieveAllItems = function(callBack){
		this.ItemObj.find(function(err, items){
			callBack(err, items);
		});
	}

	this.retrieveOneItem = function(obj, callBack){
		this.ItemObj.find(obj, function(err, item){
			callBack(err, item);
		});
	}

	this.deleteItem = function(obj, callBack){
		this.ItemObj.remove(obj, function (err, result) {
        	callBack(err, result);
   		});
	}

	this.updateItem = function(param, newObj, callBack){
		this.ItemObj.update(param, newObj, function (err, result) {
       		callBack(err, result);        
    	});
	}
}

module.exports.ListDAO = ListDAO;