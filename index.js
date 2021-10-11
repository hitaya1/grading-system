//add your students github handles
const studs = ['1', '2', '3', '4', '5', '6']
//change the name of checkpoint you're going to check
const checkpoint = 'Checkpoint-React-v2'
//dont forget to npm i shelljs
const shell = require('shelljs')


for (let stud of studs) {
  shell.exec(`git clone git@github.com:${stud}/${checkpoint}.git ${stud}`)
}
