var fs 		= require("fs");
var jsHint 	= require("jsHint").JSHINT;		// jsHint: { [Function] addModule: [Function], data: [Function], jshint: [Circular] }
var files 	= [];

module.exports = function staticErrs(location, cb) {
	// Get list of files
	if(location) {
		fs.readdir(location, function (err, assets) {
			if (err) 
				return err;
			
			// loop through each file
			assets.forEach(function(f) {
				fs.readFile(location + f, function read(err, data) {  // TODO: Set Options fs.readFile(files[i], [options], function(args)
					if(err) {
						console.log('Error:' + err);
					}

					if(jsHint(data.toString())) {
						console.log('File ' + f + ' has no Errors.');
					} else {
						console.log('Errors in file ' + f);

						var out 	= jsHint.data(),
							errors 	= out.errors,
							globals = out.globals;

						for(var j=0; j<errors.length; j++) {
							if(errors[j] !== null) {
								console.log(errors[j].line + ':' + errors[j].character + ' -> ' + errors[j].reason + ' -> ' + errors[j].evidence);
							}
						}

						// List Globals
						if(globals){
							console.log('Globals: ');
							for(j=0; j<globals.length; j++) {
								console.log(' ' + globals[j]);
							}	
						}
					}
				});
			});
		});	
	} else {
		// no location passed then look for files in current directory as a fallback
		process.argv.forEach(function(val, index, array) {
    		files.push(val);
		});
	}

	function logErrors(data, cb) {
		fs.appendFile('staticErrors.txt', data, function (err) {
			if(err) return;
			cb(null, 'Error: ' + data + ' has been written in the file: staticErrors.txt');
		});	
	}
	
};