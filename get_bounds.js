const fs = require('fs');
// We don't have three.js in pure node easily without transpiling if it's ES modules, but we can read the package.json.
// Let's just use a simple regex or check the file size, actually, I'll just write a script that loads it if three is installed.
