var fetch = require('node-fetch');
var _ = require('lodash');


var url = 'http://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
fetch(url).then(response=>{
	response.json().then(processJokes, handleError);
});

function printJokes(jokesList){
	_.each(jokesList, (joke)=>{
		console.log('- ' + joke);
	});
};

function processJokes(jokeJson){
	jokesList = _.map(jokeJson.value, (jokeObject)=>{
		return jokeObject.joke;
	});
	printJokes(jokesList);
};

function handleError(err){
	throw new Error(err);
}
