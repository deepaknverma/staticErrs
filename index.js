/* 
* @module: StaticErrs using jsJint.
* @Author: Deepak Verma
* @Date:   2015-08-25 09:16:56
* @Last Modified by:   Deepak Verma
* @Last Modified time: 2015-09-11 06:50:56
*/

// TODO: work in progress to integrate reporting and logging

var staticErrs = require("./lib/staticerrs.js");

staticErrs('./lib/', function(err, data){
	if(err){
		console.log(err);
	}
	
	console.log(data);
});
