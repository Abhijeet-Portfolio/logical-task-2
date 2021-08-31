/* Author: 

*/
var no = parseInt(prompt("Please enter Number for sum"));
var n1 = no;
var a = [9,8,7,6,5,4,3,2,1];
var string = "";


for(var i = 0; i < a.length; i++) {
    for (var j = i; j < a.length; j++) {
        (a[i] + a[j] == no) ? string += a[i]+", "+a[j] : "";
    }
    string += "<br>";
}
document.write(string);

// for(var i = 0; i < a.length; i++){
//     var temp = parseInt(n1 / a[i])
//     if(temp < 1){
//         continue;
//     }
//     else {
//         for(var j = 0; j < temp; j++){
//             document.write(a[i] + " ");
//         }
//         n1 = no % a[i];
//         if(n1 == 0 || n1 == 1){
//             break;
//         }
//     }
// }

var getNumber = parseInt(prompt("Please Enter Number for Combination of alphabet"));
var number = Array.from(String(getNumber), Number);
var array = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
var n = number.length;

word(number, 0, [], n);

function word(number, cur, output, n)
{
    if (cur == n) {
        document.write(output.join("") + " ");
        return;
    }
    for(var i2 = 0; i2 < array[number[cur]].length; i2++) {
        output.push(array[number[cur]][i2]);
        word(number, cur + 1, output, n);
        output.pop(); 
        if(number[cur] == 0 || number[cur] == 1) { 
            return;
        }
    }
}














