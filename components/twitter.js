const Twitter = require("twitter");

const cliente = new Twitter({
	consumer_key: process.env.consumer_key,
	consumer_secret: process.env.consumer_secret,
	access_token_key: process.env.access_token_key,
	access_token_secret: process.env.access_token_secret
});

cliente.tweetar = (tweet) => {
	console.log("tweet=", tweet);
	cliente.post("statuses/update", { status: tweet }, function(
		error,
		tweet,
		response
	) {
		if (error) console.log("error", error);
		else console.log("Tweet sent.");
	});
};

module.exports = cliente;