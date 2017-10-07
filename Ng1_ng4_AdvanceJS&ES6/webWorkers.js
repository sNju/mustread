// JavaScript (in browsers) is single threaded application which mean we cannot run more than one script at the same time

//now webworkers provides a mechanism to respond a separate script in background for webapp
//where we can do any type of calculation without disturbing the ui

//Web Worker has no access
// window object
// document object
// parent object

//we cannot do any dom manipulation inside the worker

//Wob Worker has access to
//Navigator Object 

//useragent,geolocation cookeyenabled
//the location object(read-only)
//(host,hostname,href,pathname..etc)
//XMLHttpRequest//time interval//application cache
//importing external script using the importScript() method

// myWorker.terminate();


this.onmessage=function(e){
	if(e.data.addThis !== undefined){
		this.postMessage({result:e.data.addThis.num1+e.data.addThis.num2})
	}
	
}