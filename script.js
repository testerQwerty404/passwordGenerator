//ciekawee
//https://www.geeksforgeeks.org/python-program-check-validity-password/


var latin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var latinB = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var pl = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];
var plB = ["Ą", "Ć", "Ę", "Ł", "Ń", "Ó", "Ś", "Ź", "Ż"];
var digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var dia = ["!", "@", "#", "$", "^", "&", "%", "*", "(", ")", "+", "=", "-", "[", "]", "\"", "/", "{", "}", "|", ":", "<", ">", "?", ",", "."];
var space = ["&nbsp;"];



var form = {
	size: 0,
	
	firstLetter: "none",

	latin: false,
	latinNum: 0,

	latinB: false,
	latinBNum: 0, 

	pl: false,
	plNum: 0,

	plB: false,
	plBNum: false,

	digit: false,
	digitNum: 0,

	dia: false,
	diaNum: 0,


	space: false,
	spaceNum: 0,

	merged: [],
}




function generate() {
form.size = document.getElementById('size').value;
form.firstLetter = document.getElementById('firstLetter').value;
form.latin = document.getElementById('latin').value;
form.latinB = document.getElementById('latinB').value;
form.pl = document.getElementById('pl').value;
form.plB = document.getElementById('plB').value;
form.digit = document.getElementById('digit').value;
form.dia = document.getElementById('dia').value;
form.space = document.getElementById('space').value;
form.latinNum = document.getElementById('latinNum').value;
form.latinBNum = document.getElementById('latinBNum').value;
form.plNum = document.getElementById('plNum').value;
form.plBNum = document.getElementById('plBNum').value;
form.digitNum = document.getElementById('digitNum').value;
form.diaNum = document.getElementById('diaNum').value;
form.spaceNum = document.getElementById('spaceNum').value;

var individual = getIndividual();
var individualSize = individual.length;


//First letter check-in

var first = getFirstLetter(form.firstLetter);

if(first.length==1) 
{
var numberLeft = (form.size-1) - individualSize;
} 
else 
{


var numberLeft = form.size - individualSize;


}



console.log("numberLeft = " + numberLeft);
var group = []; 
if(numberLeft > 0 )  {
var allSigns = getMergedArrays();
var group = giveMeArrayAndNumber(allSigns, numberLeft);
}


var result = merge(individual, group);

result = shuffleArray(result);

if(first.length==1) 
{



console.log("result")
console.log(result)

result = merge(first, result);



} 



document.getElementById("result").innerHTML = result.join("");
}




function getFirstLetter(firstLetterStatus){
var result = [];

//console.log("firstLetterStatus");

//console.log(firstLetterStatus);

switch(firstLetterStatus){


	case "none":
	break;

	case "latin":
	result = giveMeArrayAndNumber(latin, 1);
	break;

	case "latinB":
	result = giveMeArrayAndNumber(latinB, form.latinBNum);
	break;

	case "pl":
	result = giveMeArrayAndNumber(pl, form.plNum);
	break;

	case "plB":
	result = giveMeArrayAndNumber(plB, form.plBNum);
	break;

	case "digit":
	result = giveMeArrayAndNumber(digit, form.digitNum);
	break;

	case "dia":
	result = giveMeArrayAndNumber(dia, form.diaNum);
	break

	case "space":
	result = giveMeArrayAndNumber(space, form.spaceNum);
	break

}

//console.log("result w getFirstLetter");

//console.log(result);

return result;
}












function getIndividual(){
var test = [];

if(form.latin == "2") {
	var result = giveMeArrayAndNumber(latin, form.latinNum);
	merge(test, result)
}

if(form.latinB == "2") {
	var result = giveMeArrayAndNumber(latinB, form.latinBNum);
	merge(test, result)
}

if(form.pl == "2") {
	var result = giveMeArrayAndNumber(pl, form.plNum);
	merge(test, result)
}

if(form.plB == "2") {
	var result = giveMeArrayAndNumber(plB, form.plBNum);
	merge(test, result)
}

if(form.digit == "2") {
	var result = giveMeArrayAndNumber(digit, form.digitNum);
	merge(test, result) 
}

if(form.dia == "2") {
	var result = giveMeArrayAndNumber(dia, form.diaNum);
	merge(test, result)
}


if(form.space == "2") {
	var result = giveMeArrayAndNumber(space, form.spaceNum);
	merge(test, result)
}



return test;
}





function getMergedArrays(){


var test = [];

if(form.latin == "1") test = merge(test, latin);
if(form.latinB == "1") test = merge(test, latinB);
if(form.pl == "1") test = merge(test, pl);
if(form.plB == "1") test = merge(test, plB);

if(form.digit == "1") test = merge(test, digit);
if(form.dia == "1") test = merge(test, dia);
if(form.space == "1") test = merge(test, space);

return test;


}










function merge(resultArray, newArray) {
var newArrayLen = newArray.length;
for (var t = 0; t < newArrayLen; t++){
	var g = newArray[t];
	resultArray.push(g);
}
return resultArray;
}


function giveMeArrayAndNumber(array, numOfDraws){
var result = []; 
for (var p = 0; p < numOfDraws; p++){
var sign = randomElementFrom(array);
result.push(sign);
}
return result;
}

function randomElementFrom(array){
var arrayLen = array.length;
var rand = Math.floor(Math.random() * arrayLen);
return array[rand];
}


//Kod ze strony
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffleArray(unshuffled) {
let shuffled = unshuffled
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  return shuffled;
}







