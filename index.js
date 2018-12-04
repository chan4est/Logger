var execProcess = require("./exec_process.js");

function start(repo) {
  var git = repo.substring(repo.lastIndexOf('/') + 1);
  const dir = git.substring(0, git.length - 4);
  const cmd = "sh ./git.sh " + repo + " " + dir;
  execProcess.result(cmd, function (err, response) {
    if (!err) {
      console.log(response);
      return (response)
    } else {
      console.log(err);
    }
  });
}

start('https://github.com/domharrington/node-gitlog.git')

// host deploy script