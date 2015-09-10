# staticErrs

A  simple node wrapper using jshint to find syntax error.

**There are two different methods available:**

1. Pass location to the function and method will look for  	all the files within the location specified.
	
		var staticErrs = require('./lib/staticerrs.js');

		staticErrs('./lib/', function(err, data){
			if(err)
				console.log(err);
			
			console.log(data);
		});
	

2. If no location passed, method will look for all the folders 	present in the root level.

		var staticErrs = require('./lib/staticerrs.js');

		staticErrs(function(err, data){
			if(err)
				console.log(err);
			
			console.log(data);
		});

========================================================================================		
## Future scope:

1. Ability to define file types
2. Handler to output to multiple modules for consumption of logs.



