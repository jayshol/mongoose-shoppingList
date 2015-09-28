
var chai = require('chai');
var expect = chai.expect;
var listDAO = require('../list').listDAO;
var listObj = new listDAO();

describe('Suite01', function(){

	it('should test create method', function(done){
		listObj.createItem({item:'Grapes'}, function(err, item){
		//	console.log(item);
			expect(item).to.be.json;
			expect(item.item).to.equal('Grapes');
			done();
		});
	});

	it('should test list method', function(done){
		listObj.retrieveAllItems(function(err, items){
			expect(items).to.be.an.Array;
			expect(items[0].item).to.be.a('string');
			expect(items).to.have.length;
			done();
		});
	});

	it('should test listAll method', function(done){
		listObj.retrieveOneItem({item:'Grapes'}, function(err, item){
			//console.log(item);
			expect(item[0]).to.be.json;
			expect(item).to.have.length(1);
			expect(item[0].item).to.equal('Grapes');
			done();
		});
	});

	it('should test update method', function(done){
		listObj.updateItem({item:'Grapes'}, {item:'GrapeFruit'}, function(err, item){
			expect(err).to.be.null;
			expect(item).to.equal(1);
			done();
		});
	});

	it('should test delete method', function(done){
		listObj.deleteItem({item:'GrapeFruit'}, function(err, item){
			expect(err).to.be.null;
			expect(item).to.equal(1);
			done();
		});
	});

});