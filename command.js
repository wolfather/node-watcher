'use strict';

const exec = require('child_process').exec

module.exports = (commandCall) => {
	const commandConfig = {
		encoding 	: 'utf8',
		timeout 	: 0,
		maxBuffer 	: 200*1024
	}

	exec(commandCall, commandConfig ,(error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		//console.log(`stderr: ${stderr}`);
	});
}