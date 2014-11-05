function TrieNode(){
	this.prefix=0;
	this.word=0;
	this.children=[];
}

TrieNode.prototype.addNode=function(character){
	if(!this.hasChar(character)){
		var newNode = new TrieNode();
		this.children[character] = newNode;
	}
}

TrieNode.prototype.hasChar = function(character){
	return character in this.children;
}

TrieNode.prototype.getCharNode = function(character){
	if(this.hasChar(character)){
		return this.children[character];
	}
	return undefined;
}




function Trie(){
	this.head=new TrieNode();
}



Trie.prototype.addWord = function(word){
		word=word.toLowerCase();
		this.addWordToTrie(word, this.head);
}

Trie.prototype.addWordToTrie = function(word, node){
	if(word.length <= 0 ){
		node.word = node.word + 1;
	}else{
		node.prefix = node.prefix + 1;
		var firstChar = word.substr(0,1);
		var restOfWord = word.substr(1);

		if(!node.hasChar(firstChar)){
			node.addNode(firstChar);
		}

		var nextNode = node.getCharNode(firstChar);
		this.addWordToTrie(restOfWord, nextNode);
	}
}

Trie.prototype.isWord = function(word){
	word=word.toLowerCase();
	var wordCount = this.wordCount(word, this.head);

	if(wordCount > 0){
		return true;
	}else{
		return false;
	}
}

Trie.prototype.wordCount = function(word, node){
	if(word.length <= 0){
		return node.word;
	}else{
		var firstChar = word.substr(0,1);
		var restOfWord = word.substr(1);

		if(!node.hasChar(firstChar)){
			return 0;
		}else{
			var nextNode = node.getCharNode(firstChar);
			return this.wordCount(restOfWord, nextNode);
		}
	}
}

Trie.prototype.isPrefix = function(word){
	word = word.toLowerCase();
	var prefixCount = this.prefixCount(word, this.head);

	if(prefixCount > 0){
		return true;
	}else{
		return false;
	}
}

Trie.prototype.prefixCount = function(word, node){
	if(word.length <= 0){
		return node.prefix;
	}else{
		var firstChar = word.substr(0,1);
		var restOfWord = word.substr(1);

		if(!node.hasChar(firstChar)){
			return 0;
		}else{
			var nextNode = node.getCharNode(firstChar);
			
			return this.prefixCount(restOfWord, nextNode);
		}
	}

}

module.exports.Trie=Trie;






