var solver = require('./solver.js'),
    boogleSolver= new solver.BoggleSolver('./dictionary.csv'),
    gridGenerator = require('./gridGenerator.js');

var pointDistribution = []
pointDistribution['A'] = 1;
pointDistribution['B'] = 3;
pointDistribution['C'] = 3;
pointDistribution['D'] = 2;
pointDistribution['E'] = 1;
pointDistribution['F'] = 4;
pointDistribution['G'] = 2;
pointDistribution['H'] = 4;
pointDistribution['I'] = 1;
pointDistribution['J'] = 8;
pointDistribution['K'] = 5;
pointDistribution['L'] = 1;
pointDistribution['M'] = 3;
pointDistribution['N'] = 1;
pointDistribution['O'] = 1;
pointDistribution['P'] = 3;
pointDistribution['Q'] = 10;
pointDistribution['R'] = 1;
pointDistribution['S'] = 1;
pointDistribution['T'] = 1;
pointDistribution['U'] = 1;
pointDistribution['V'] = 4;
pointDistribution['W'] = 4;
pointDistribution['X'] = 8;
pointDistribution['Y'] = 4;
pointDistribution['Z'] = 10;


function gridInfo(words, grid){
	this.words = words;
	this.grid = grid;
}

var changeGrid = function(){
	var currentGrid = gridGenerator.generateGrid();
	var possibleWords=boogleSolver.solveGrid(currentGrid);
	var currentWord=getWords(possibleWords);

	return new gridInfo(currentWord, currentGrid);
}

function getWords(temp){
	var arrayWords={};
	for(var i=0; i<temp.length;i++){
		var word = temp[i].toUpperCase();
		var wordPoints = getPointsFor(word);
		arrayWords[word]=wordPoints;
	}
	return arrayWords;
}

function getPointsFor(word){
	var points = 0;

	for(var i = 0; i < word.length; i++){
		points += pointDistribution[word[i]];

		if(word[i] == 'Q'){
			i++;
		}
	}
	
	return points;
}

module.exports.changeGrid = changeGrid;
