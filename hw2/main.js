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
	showStringArgumentsLength(12, 4, "a", "text");
});

// function getStringArgumentsCount() {
//   var count = 0;
  
//   for (var i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] === 'string') {
//       count++;
//     }
//   }
  
//   return count;
// };


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

// function getArgumentsSum() {
//   var sum = 0;
  
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
  
//   return sum;
// }


// как только в инпут впишут слово "JavaScript", то сразу чекбокс справа перешёл в зачеканное состояние
jQuery('input[type="text"]').on('keyup', function (e) {
  if (e.target.value === 'JavaScript') {
    jQuery('input[type="checkbox"]').prop('checked', true);
  }
});


// Сделать перед сабмитом формы проверку всех инпутов и если хоть один не прошёл её, то выводить сообщение с помощью функции alert() и откланять сабмит формы через метод события preventDefault(). В первом поле должны быть только числа, во втором только буквы a, b, c и d, чекбокс должен быть зачекан, один из инпутов в четвёртой группе должен быть зачекан.
jQuery('form').on('submit', function (event) {
  var errors = [];
  var numbers = jQuery('[name="numbers"]').val();
  if (!valid(numbers, '0123456789')) {
    errors.push('Invalid numbers');
  }
  
  var letters = jQuery('[name="letters"]').val();
  if (!valid(letters, 'abcd')) {
    errors.push('Invalid letters');
  }
  
  if (!jQuery('[name="agreement"]').prop('checked')) {
    errors.push('Agreement is unchecked');
  }
  
  var types = jQuery('[name="type"]');
  var type = types.filter(function (i, type) {
    return type.checked;
  });
  if (type.length === 0) {
    errors.push('Type is unchecked');
  }
  
  if (errors.length > 0) {
    event.preventDefault();
    alert(errors.join("\n"));
  }
});

function valid(string, symbols) {
  if (string.length === 0) {
    return false;
  }
  
  for (var i = 0; i < string.length; i++) {
    if (symbols.indexOf(string.charAt(i)) === -1) {
      return false;
    }
  }
  
  return true;
}


// Разбейте эту строку кода на три отдельные функции и сделайте вызов первой функции так чтобы в консоли появился такой же результат как и после выполнения этой строки кода
// (function (a) { 
// 	console.log(a(function (b) { 
// 		return b + b; 
// 	}));
// }) (function (c) { return c(2) * c(3); } );




function logResult(getResult) {
  console.log(getResult(sum));
}

function sum(b) {
  return b + b;
}

function multiply(wrapper) {
  return wrapper(1) * wrapper(1);
}

logResult(multiply);



});