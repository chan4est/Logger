var exec = require('child_process').exec;

function parseOutput(output) {
  output = String(output);
  var result = "";
  const arrayOfLines = output.match(/[^\r\n]+/g);
  for (i in arrayOfLines) {
    if (arrayOfLines[i].includes('Author')) {
      result += arrayOfLines[i] += '\n';
    } else if (arrayOfLines[i].includes('Date')) {
      result += arrayOfLines[i] += '\n\n';
    }
  }
  return result;
}

var result = function (command, cb) {
  console.log(command)
  var child = exec(command, function (err, stdout, stderr) {
    if (err != null) {
      return cb(new Error(err), null);
    } else if (typeof (stderr) != "string") {
      return cb(new Error(stderr), null);
    } else {
      return cb(null, parseOutput(stdout));
    }
  });
}

exports.result = result;