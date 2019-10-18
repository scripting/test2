const myProductName = "helloworld", myVersion = "0.4.1";    

const utils = require ("daveutils");

function everyMinute () { 
	console.log ("\n" + myProductName + ": " + new Date ().toLocaleTimeString ());
	}

console.log ("\n" + myProductName + " v" + myVersion + "\n");

utils.runEveryMinute (everyMinute);
