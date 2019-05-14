const app = require("./components/server.js");
const cliente = require("./components/twitter.js");

const server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
const server_host = process.env.YOUR_HOST || "0.0.0.0";

app.listen(server_port, server_host, function() {
	console.log(`Application is up on port ${server_port}.`);
});

cliente.tweetar(`Hello! I'm the new Marcelo's Twitter Bot`);