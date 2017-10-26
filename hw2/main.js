$(document).ready(function() {


 // функция которая возвращает количество переданных аргументов
function showArgumentsLength() {
	alert(arguments.length);		
};

$("#showArgumentsLength").on("click",function() {
	showArgumentsLength(1, 4, "a")
});


// функция которая возвращает количество аргументов, которые являются строками
function showStringArgumentsLength() {
	var stringQuantity = 0;
	var args = [];
	for (var i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
		if(typeof(args[i]) === "string"){
			stringQuantity += 1;
		}
	}
	alert(stringQuantity);		
};

$("#showStringArgumentsLength").on("click",function() {
	showStringArgumentsLength(12, 4, "a", "text")
});


// функция которая возвращает сумму значений всех переданных аргументов
function showSumArguments() {
	var sumArguments = 0;
	var argsArray = [];
	for (var i = 0; i < arguments.length; i++) {
		argsArray[i] = arguments[i];
		sumArguments += argsArray[i];
	}
	alert(sumArguments);		
};

$("#showSumArguments").on("click",function() {
	showSumArguments(11, 4, 2, 5)
});







});