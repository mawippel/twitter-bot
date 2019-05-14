# twitter-bot

Create a config.env file in the root of the application, just like this example:
```
consumer_key=XXXXXXXXXXXXXXXXXXXXX
consumer_secret=XXXXXXXXXXXXXXXXXXXXX
access_token_key=XXXXXXXXXXXXXXXXXXXXX
access_token_secret=XXXXXXXXXXXXXXXXXXXXX 
```

To start the app, just run:
```
node -r dotenv/config app.js dotenv_config_path=<config.env PATH>
```
