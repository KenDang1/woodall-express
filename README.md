# Woodall Express
 - npm = Node Package Manager
 
- json = JS object notation
--------------------
 start
 - npm init --yes
 then
 - npm install express
 then
 to make sure you don't push node_modules to git hub
 - create a new file ".gitignore", in side write node_modules/

require('./filename') looking inside it local folder/file
require('filename') looking outside it folder

run your server on browser
- localhost: port name goes here
- control + c to exist running node
"killall -9 node"  this kill all node running

under the first "scripts" in package.json add another "script"
- "script": "node server/server.js" 
or "script": "nodemon server/server.js"  when you npm install nodemon (npm install nodemon)
then in terminal run npm start
--------------------

GET  /comments
👆

- npm install body-parser


