import trie
import fileToTrie

class BoggleSolver:
	"""find all possible words formed in a grid of chars
		within the given dicationary. Handles adjacent movements 
		between grids including diagonal movements. 8 possible movements from 
		one position on the grid. No repeats
	"""

	def __init__(self, dictionaryText):
		# the file name of the dictionary is passed in
		self.dictionary=fileToTrie.fileToTrie(dictionaryText)


	def solveGrid(self, grid):
		#produce a set of words given a valid grid. A valid grid is any rectangluar grid.

		if self.isValidGrid(grid):
			self.numRow=len(grid)
			self.numCol=len(grid[0])
			self.boogleGrid=grid
			self.setOfWords=[]
			self.visitedGrid=[[False for i in range(self.numCol)] for j in range(self.numRow)]

			for row in range(self.numRow):
				for col in range(self.numCol):
					self.dfs("", row, col)

			self.setOfWords=set(self.setOfWords)
			return self.setOfWords
		else:
			return []


	def isValidGrid(self, grid):
		# checks if it's a valid rectangluar grid
		if len(grid) <= 0:
			return False

		col=len(grid[0])

		for row in range(len(grid)):
			if len(grid[row]) != col:
				return False

		return True



	def dfs(self, word, row, col):
		#checks all possible combination of valid words in the grid

		if row < 0  or row >= self.numRow or col < 0 or  col >= self.numCol or self.visitedGrid[row][col]:
			return
		
		newWord=word+self.boogleGrid[row][col]

		if self.dictionary.isWord(newWord):
			self.setOfWords.append(newWord)

		if self.dictionary.isPrefix(newWord):
			self.visitedGrid[row][col]=True

			for i in range(-1,2):
				for j in range(-1,2):
					self.dfs(newWord, row+i, col+j)
					
			self.visitedGrid[row][col]=False

		return

