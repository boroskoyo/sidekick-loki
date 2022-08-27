require('dotenv').config();
const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");
const { onTrigger } = require('@runsidekick/sidekick-client')

const options = {
  transports: [
    new LokiTransport({
        host: 'https://logs-prod-eu-west-0.grafana.net',
        json: true,
        basicAuth: process.env.loki_auth,
        labels: { job: 'sidekick-logs' }
      })
  ]
};
const logger = createLogger(options);

function ingestFunc () {
    return async function (data) {
        logger.info(JSON.stringify(data));
    }
}

const sidekickClient = {
    sidekick_host : process.env.sidekick_host, //this is not mandatory if you are wokring with Sidekick Cloud
    sidekick_email : process.env.sidekick_email, 
    sidekick_password : process.env.sidekick_password, 
    tracepointFunction : ingestFunc(), //you can also write a seperate function to ingest your snaphots
    logpointFunction : ingestFunc(),
    stdout : false, // enable console log
}

onTrigger(sidekickClient);
