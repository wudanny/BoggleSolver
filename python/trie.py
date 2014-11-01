
class TrieNode:
	#Trie node data structure

	def __init__(self):
		self.prefix=0
		self.word=0
		self.paths={}



class Trie:
	#Trie Tree

	def __init__(self):
		self.head=TrieNode()

	def add(self, word):
		#add a word to the Trie 

		word=word.lower()
		self.addToTrie(word, self.head)


	def addToTrie(self, word, node):
		if len(word) <= 0:
			node.word += 1
		else:
			node.prefix += 1
			firstChar=word[0]
			restWord=word[1:]

			if firstChar in node.paths:
				nextNode=node.paths[firstChar]
			else:
				nextNode=TrieNode()
				node.paths[firstChar]=nextNode

			self.addToTrie(restWord, nextNode)

	def isWord(self, word):
		#checks if the word is in the trie
		
		word=word.lower()
		numWords=self.wordCount(word, self.head)

		if numWords > 0:
			return True
		else:
			return False

	def wordCount(self, word, node):
		if len(word) <= 0:
			return node.word
		else:
			firstChar=word[0]
			restWord=word[1:]
				
			if firstChar not in node.paths:
				return 0
				
			nextNode=node.paths[firstChar]
			return self.wordCount(restWord, nextNode)

	def isPrefix(self, word):
		#checks if the word is a prefix to another word

		word=word.lower()
		numPrefix=self.prefixCount(word, self.head)

		if numPrefix > 0:
			return True
		else:
			return False

	def prefixCount(self, word, node):
		if len(word) <= 0:
			return node.prefix
		else:
			firstChar=word[0]
			restWord=word[1:]

			if firstChar not in node.paths:
				return 0

			nextNode=node.paths[firstChar]
			return self.prefixCount(restWord, nextNode)



