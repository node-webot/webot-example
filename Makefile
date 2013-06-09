start:
	@export DEBUG=webot* && npm start

clear:
	@clear

test: clear
	@export DEBUG="webot* -*verbose" && export WX_TOKEN=test123 && ./node_modules/.bin/mocha
