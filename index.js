const execProcess = require("./exec_process.js");
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/myform', async (req, res) => {
  const text = req.query.text;
  var result = await start(text);
  result = result.replace(/(?:\r\n|\r|\n)/g, '<br>');
  // console.log(result);
  res.send('Your Text: ' + result);
});

function start(repo) {
  var git = repo.substring(repo.lastIndexOf('/') + 1);
  const dir = git.substring(0, git.length - 4);
  const cmd = "sh ./git.sh " + repo + " " + dir;

  return new Promise(function (resolve, reject) {
    execProcess.result(cmd, (err, resp, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp);
      }
    })
  })
}

app.listen(3000)

// host deploy script