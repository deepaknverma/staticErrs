var staticErrs = require("./lib/staticerrs.js");

//var errs = new staticErrs();

staticErrs('./lib/', function(err, data){
	if(err){
		console.log(err);
	}

	console.log(data);
})