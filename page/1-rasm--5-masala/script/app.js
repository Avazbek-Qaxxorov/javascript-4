let a = Number(prompt("Listening kiriting"));
let b = Number(prompt("Reading kiriting"));
let c = Number(prompt("Speaking kiriting"));
let d = Number(prompt("Writing kiriting"));

let result = (a + b + c + d) / 4;

if(result === 5) {
     document.write("Chidasa bo'ladi " + result);
}
else if(result === 6) {
     document.write("Yaxshi " + result);
}
else if(result === 7) {
     document.write("Juda yaxshi " + result);
}
else if(result === 8) {
     document.write("A'lo darajada " + result);
}
else if(result === 9) {
     document.write("Juda ham zo'r " + result);
}
else {
     document.write("Sizning IELTSdan to'plagan balingiz " + result);
}