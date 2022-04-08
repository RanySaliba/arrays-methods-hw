
//Ex1
var arr = [1, 2, 3, "target", "darget", "tit"];
console.log(arr.indexOf("target"));

//Ex2
var matrix = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var result = matrix.flat(3);
console.log(result);

//Ex3
var arr = ["a", "b", "c"];
var reverseArray = arr.reverse();
var joinArray = reverseArray.join("");
console.log(joinArray);

//Ex4
var arr = ["a", "b", "c"];
var first = arr.pop();
arr.unshift(first);
console.log(arr);

//Ex5
var smth = [1, 2, 3];
console.log(Array.isArray(smth));
var smthh = "smth";
console.log(Array.isArray(smthh));

//Ex6
const arr1 = ["Hello"];
const arr2 = ["FASTTRACK"];
const output = arr1.concat(arr2);
console.log(output);

//Ex7
var arr = ["a", "b", "c"];
arr[0] = "stopPoint";
arr.pop();
arr.push("stopPoint");
console.log(arr);

//Ex8
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var last2 = animals.slice(-2);
last2.reverse();
console.log(last2);