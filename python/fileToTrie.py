import trie

def fileToTrie(fileName):
	# converts a file with the dictionary into a trie. Words in file should be seperated by lines
	trieDict=trie.Trie()
	readFile=open(fileName,"r")
	for line in readFile:
		word=line[:-1]
		trieDict.add(word)
	readFile.close
	return trieDict

def groupFileToTrie(listOfNames):
	# converts a group of files with the dictionary into a trie. Words in a file should be seperated by lines
	trieDict=trie.Trie()
	for filename in listOfNames:
		readFile=open(fileName,"r")
		for line in readFile:
			word=line[:-1]
			trieDict.add(word)
		readFile.close
	return trieDict