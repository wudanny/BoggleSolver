function Set(){
}

Set.prototype.add = function(element){
	this[element] = true;
}

Set.prototype.delete = function(element){
	return delete this[element];
}


Set.prototype.toArray = function(){
	var setArray=[];
	for (var key in this) {
  		if (this.hasOwnProperty(key)) {
    		setArray.push(key); 
  		}
	}
	return setArray;
}

module.exports.Set = Set;
