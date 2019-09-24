const sentence = "hello there from lighthouse labs";
let offSet = 50
for (const char of sentence) {
  setTimeout(() => { process.stdout.write(char) }, offSet);
  offSet += 50;
}
setTimeout(() => { console.log() }, 50 * sentence.length);