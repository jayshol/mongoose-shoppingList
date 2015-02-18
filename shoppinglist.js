var http = require('http'),
	url = require('url'),
	items = require('./items');

var server = http.createServer(function(req, res){
	function getParam(reqURL){
		var pathName = url.parse(reqURL).pathname;
		return pathName.slice(1);
	}

	switch(req.method){
		case 'POST':
			case 'POST' : 
			var item = "";
			req.setEncoding('utf8');
			req.on('data', function(chunk){
				item += chunk;
			});

			req.on('end', function(){
				items.create(item);
				res.end('Item added\n');
			});
			break;
		case 'GET' :
			var param = getParam(req.url);			
			if(param !== ''){				
				items.retrieveOne(req, res, param);
			}else{
				items.retrieveAll(req, res);						
			}
			break;
		case 'DELETE' :	
			var param = getParam(req.url);			
			items.delete(req, res, param);
			break;
		case 'PUT' :
			var param = getParam(req.url);
			var item = "";
			req.setEncoding('utf8');
			req.on('data', function(chunk){
				item += chunk;
			});

			req.on('end', function(){			
				items.update(req, res, param, item);					
			});						
	}
});

server.listen(3000, function(){
	console.log('Server listening at port 3000');
});