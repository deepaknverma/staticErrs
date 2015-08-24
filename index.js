var fs 	= require("fs");
var jsHint = require("jsHint");
var fs = [];

module.exports = staticErrs(location, function(err, cb) {
	
	// Get list of files
	process.argv.forEach(function(val, index, array) {
		files.push(val);
	});

	for(var i=2; i<files.length; i++) {
		fs.readFile(files[i], function(err, data) {  // fs.readFile(files[i], [options], function(args)
			if(err) {
				console.log('Error:' + err);
			}

			if(jsHint(data.toString())) {
				console.log('File ' + File[i] + ' has no Errors.');
			} else {
				console.log('Errors in file ' + File[i]);
				console.log('');

				var out 	= jsHint.data(),
					errors 	= out.errors;

				for(var j=0; j<errors.length; j++) {
					console.log(errors[j].line + ':' + errors[j].character + ' -> ' + errors[j].reason + ' -> ' + errors[j].evidence);
				}

				// List Globals
				console.log('Globals: ');
				for(j=0; j<out.globals.length; j++) {
					console.log(' ' + out.globals[j]);
				}
			}
		});
	}
});