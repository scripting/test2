const myProductName = "helloworld", myVersion = "0.4.1";    
function everyMinute () { 
	console.log ("\neveryMinute: " + new Date ().toLocaleTimeString ());
	}
console.log ("\n" + myProductName + " v" + myVersion + "\n");
utils.runEveryMinute (everyMinute);
