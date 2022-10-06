const fs = require("fs");

fs.writeFileSync("file.txt", "My name is Lika");
fs.appendFileSync("file.txt", "\n" + "Hello Lika");
