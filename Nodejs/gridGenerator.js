//if you want a 5x5 grid
// var gridPotentials = ["aaafrs",
// 				"aaeeee",
// 				"aafirs",
// 				"adennn",
// 				"aeeeem",
// 				"aeegmu",
// 				"aegmnn",
// 				"afirsy",
// 				"bjkqxz",
// 				"ccenst",
// 				"ceiilt",
// 				"ceilpt",
// 				"ceipst",
// 				"ddhnot",
// 				"dhhlor",
// 				"dhlnor",
// 				"dhlnor",
// 				"eiiitt",
// 				"emottt",
// 				"ensssu",
// 				"fiprsy",
// 				"gorrvw",
// 				"iprrry",
// 				"nootuw",
// 				"ooottu"];

//if you want a 4x4 grid
// var gridPotentials = [["AAEEGN"],
// 				["ELRTTY"],
// 				["AOOTTW"],
// 				["ABBJOO"],
// 				["EHRTVW"],
// 				["CIMOTU"],
// 				["DISTTY"],
// 				["EIOSST"],
// 				["DELRVY"],
// 				["ACHOPS"],
// 				["HIMNQU"],
// 				["EEINSU"],
// 				["EEGHNW"],
// 				["AFFKPS"],
// 				["HLNNRZ"],
// 				["DEILRX"]];

//6x6 grid
var gridPotentials = ["aaafrs",
				"aaeeee",
				"aafirs",
				"adennn",
				"aeeeem",
				"aeegmu",
				"aegmnn",
				"afirsy",
				"bjkqxz",
				"ELRTTY",
				"AOOTTW",
				"ABBJOO",
				"EHRTVW",
				"CIMOTU",
				"DISTTY",
				"EIOSST",
				"DELRVY",
				"ACHOPS",
				"HIMNQU",
				"DEILRX",
				"ccenst",
				"ceiilt",
				"ceilpt",
				"ceipst",
				"ddhnot",
				"dhhlor",
				"dhlnor",
				"dhlnor",
				"eiiitt",
				"emottt",
				"ensssu",
				"fiprsy",
				"gorrvw",
				"iprrry",
				"nootuw",
				"ooottu"];


var generateGrid = function(){
	var newGrid = "";

	for(var i = 0, j = gridPotentials.length; i < j; i++){
		var letterIndex = randomInt(0, gridPotentials[i].length);
		var gridPotentialRow = gridPotentials[i];
		var letter = gridPotentialRow[letterIndex];
		newGrid += letter;
	}

	newGrid = shuffleLetters(newGrid);
	var arrayGrid = toArrayGrid(newGrid);

	return arrayGrid;
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function shuffleLetters(grid){
	for(var i = grid.length - 1; i > 0; i--){
		var toSwapIndex = randomInt(0, i + 1);
		grid = swapPosition(toSwapIndex, i, grid);
	}

	return grid;
}

function swapPosition(first, second, grid){
	var temp = grid[first];
	grid[first] = grid[second];
	grid[second] = temp;

	return grid;
}

function toArrayGrid(grid){
	var gridDimension = Math.floor(Math.sqrt(grid.length));
	var gridArray = [];

	grid = grid.toUpperCase();
	
	for(var i = 0; i < gridDimension; i++){
		var gridRow = [];

		for(var j = 0; j < gridDimension; j++){
			var gridLetterIndex = (i * gridDimension) + j;
			var gridLetter = grid[gridLetterIndex];

			if(gridLetter == "Q"){
				gridLetter = "Qu"
			}

			gridRow.push(gridLetter);
		}
		gridArray.push(gridRow);
	}

	return gridArray;
}

module.exports.generateGrid = generateGrid;
