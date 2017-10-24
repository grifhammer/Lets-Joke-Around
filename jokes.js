var fetch = require('node-fetch');
var _ = require('lodash');


var url = 'http://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
fetch(url).then(response=>{
	response.json().then(jokeJson=>{
		jokesList = jokeJson.value;
		_.each(jokesList, (joke)=>{
			console.log('- ' + joke.joke);
		});
	});
});
