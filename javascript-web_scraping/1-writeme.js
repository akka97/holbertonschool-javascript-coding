#!/usr/bin/node
const fs = require("fs");

fs.writeFile(process.argv[], 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
