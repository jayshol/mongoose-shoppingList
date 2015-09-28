						
var listDAO = require('./list').listDAO;
var lists = new listDAO();

exports.create = function(item, req, res){
	/**/

	lists.createItem({item:item}, function(err, inserted){
		if(err){
			 console.log(err);
			 res.end('Error');
		} else {
			res.end('Item Added.');
		}

	});

}

exports.retrieveAll = function(req, res){	
	lists.retrieveAllItems(function(err, items){
		if(err){
			console.log(err);	
			res.end('Error');
		} else {
			items.forEach(function(item, i){
				res.write(i + "." + item + "\n");
			});
			res.end();
		}			
	});	
}

exports.retrieveOne = function(req, res, param){
	lists.retrieveOneItem({item:param}, function(err, item){
		if(err){
			console.error(err);
			res.end('Error');
		}else{			
			res.write('Item is :' + item[0].item);
			res.end();
		}
	});	
}

exports.delete = function(req, res,id) {
	lists.deleteItem({item:id}, function(err, result){
		if (err){
			 console.error(err);
			 res.end('Error')	;
		} else {
			res.write('Item deleted successfully.');
        	res.end();
		}        
	});    
}

exports.update = function(req, res, param, newItem) {
	lists.updateItem({item: param}, {item:newItem}, function(err, result){
		if(err){
			res.end(err);
		} else {
			res.write('Item updated.');
        	res.end();
		}
	});    
}
