var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

var child;

if(process.platform === 'win32') {
	child = spawn('cmd', ['/c', 'node-gyp configure build'], {stdio: 'inherit'});
} else {
	child = spawn('node-gyp', ['configure', 'build'], { stdio: 'inherit' });
}

child.on('close', function () {
	require('./checkplatform');
});
