fs.writeFile(
"sample.txt",
"Hello World. Welcome to Node.js File System module.",
(err) =>{
    if (err) throw err;
    console.log("File created!");
}
);