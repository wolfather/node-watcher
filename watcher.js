'use strict';

const fs = require('fs'),
	command = require('./command')

module.exports = (fileOrDir, commandToExec)=> {
	if(String === typeof fileOrDir && String === typeof commandToExec) {
		const watcherConfig = {
			folder : {
				persistent: true,
				recursive: true
			},
			file: {
				persistent: true,
				interval: 1000
			}
		}

		fs.stat(fileOrDir, (err, s) =>{
			if(s.isDirectory()) {
				//console.log(s)
				fs.watch(fileOrDir, 
					watcherConfig.folder,
					()=> {
						//console.dir(`The directory ${fileOrDir} was changed.`)
						command(commandToExec)
					})
				return `directory ${fileOrDir}`
			} 
			else {
				fs.watchFile(fileOrDir, 
					watcherConfig.file,
					() =>{
						//console.log(`The file ${fileOrDir} was changed`)
						command(commandToExec)
					})
				return `file  ${fileOrDir}`
			}
		})
	}
	else{
		return ('The parameters should be strings in both of them')
	}
	
}
