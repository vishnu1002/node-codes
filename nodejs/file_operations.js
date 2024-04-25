const fs = require('fs')

const file = "example.txt"

var data = fs.readFileSync(file, 'utf8')
console.log(data)

fs.appendFileSync(file, '\ncontent')
var UpdatedFile = fs.readFileSync(file, 'utf8')
console.log(UpdatedFile)

fs.renameSync(file, "renamed.txt")

fs.unlinkSync("renamed.txt")
