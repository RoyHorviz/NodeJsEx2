//nikita sigalov roy horviz 49/2

//An array for saving the names of the text files
const arrNames = [
  "text1.txt",
  "text2.txt",
  "text3.txt",
  "text4.txt",
  "text5.txt",
  "text6.txt",
  "text7.txt",
  "text8.txt",
  "text9.txt",
  "text10.txt",
];

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/input");

let outputContent = ""; // Variable to store the output

const number = arrNames.length;
let lines = "";

for (let i = 0; i < number; i++) {
  const textIn = fs.readFileSync(`${dirPath}/text${i + 1}.txt`, "utf-8");
  const arr = textIn.split("\r\n");

  // Display the content organized by file name and the content taken from it
  outputContent += `Content from text${i + 1}.txt:\n`;
  for (let j = 0; j <= i && arr[j] !== ""; j++) {
    outputContent += arr[j] + `\n`;
  }
  outputContent += "\n----------------------------\n"; // Separator line between files
}

fs.writeFileSync(`./output.txt`, outputContent); // Write to the file
console.log("The final output has been written to output.txt.");
