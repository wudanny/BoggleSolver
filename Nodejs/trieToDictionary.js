var dictionaryToTrie = function(fileName){
	var fs = require('fs'),
		tries = require('./trie'),
		readline = require('readline');

	var trieDict = new tries.Trie();

	fs.readFileSync(fileName).toString().split('\n').forEach(function (line) { 
    	trieDict.addWord(line);
	});
	
	return trieDict;
}

module.exports.dictionaryToTrie = dictionaryToTrie;



