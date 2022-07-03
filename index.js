#!/home/thatguy/.nvm/versions/node/v17.2.0/bin/node

const childProc = require('child_process')
const os = process.platform
const myArgs = process.argv[2]
if(os.toLowerCase().includes('linux')){
childProc.exec(`open   https://www.google.com/search?q=${myArgs}`,error=>{
	if(error) console.log(error)
})
}else {
	childProc.exec(`start chrome https://www.google.com/search?q=${myArgs}`,error=>{
		if(error) console.log(error)
	})
}
