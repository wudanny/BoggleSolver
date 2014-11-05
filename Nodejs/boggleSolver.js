function BoggleSolver(dictionaryFile){
	this.trie=require("./trieDictionary.js").dictionaryToTrie(dictionaryFile);
	this.visited=[];
	this.grid=[];
	this.sets=require("./set");
	this.setOfWords=new this.sets.Set();
}

BoggleSolver.prototype.solveGrid = function(gridToSolve){
	if(!this.isValidGrid(gridToSolve)){
		return [];
	}

	this.grid = gridToSolve;
	this.visited = this.createVisitedGrid(gridToSolve);
	this.setOfWords = new this.sets.Set();
	this.solveGridOnAllPositions();
	var arrayOfWords = this.setOfWords.toArray();
	return arrayOfWords;
}

BoggleSolver.prototype.isValidGrid = function(gridToValidate){
	if(gridToValidate instanceof Array && gridToValidate.length > 0){
		if(gridToValidate[0] instanceof Array && gridToValidate[0].length > 0){
			return true;
		}
	}

	return false;
}

BoggleSolver.prototype.createVisitedGrid = function(gridToCreate){
	var visited = [];

	for(var row = 0; row < gridToCreate.length; row++){
		var visitedRow = [];
		for(var col = 0; col < gridToCreate[row].length; col++){
			visitedRow.push(false);
		}
		visited.push(visitedRow);
	}

	return visited
}


BoggleSolver.prototype.solveGridOnAllPositions = function(){
	for(var row = 0; row < this.grid.length; row++){
		for(var col = 0; col < this.grid[row].length; col++){
			this.findWord("", row, col);
		}
	}
}

BoggleSolver.prototype.findWord = function(wordSoFar, row, col){
	if(row < 0 || row >= this.grid.length || col < 0 || col >= this.grid[row].length || this.visited[row][col]){
		return;
	}

	var newWordSoFar = wordSoFar + this.grid[row][col];

	if(this.trie.isWord(newWordSoFar)){
		this.setOfWords.add(newWordSoFar);
	}

	if(this.trie.isPrefix(newWordSoFar)){
		this.visited[row][col] = true;
		for(var i = -1; i < 2; i++){
			for(var j = -1; j < 2; j++){
				this.findWord(newWordSoFar, row + i, col + j);
			}
		}
		this.visited[row][col] = false;
	}
	return;
}

module.exports.BoggleSolver=BoggleSolver;


