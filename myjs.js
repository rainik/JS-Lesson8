//Task #1
//var a = 4
//alert("S= " + a * a);

//Task2
/*
var speedCar1 = +prompt("Input speed of the first car", "");
var speedCar2 = +prompt("Input speed of the second car", "");
var distanceBefore = +prompt("Input initial distance between two cars", "");
var travelTime = +prompt("Input travelling time", "");
var distanceAfter = Math.abs(travelTime * (speedCar1 + speedCar2) - distanceBefore);
alert("The distance between cars is " + distanceAfter + " kilometers after "+ travelTime + " hour(s) of journey.");
*/

// Task #3
/*
var a = 5;
var b = 15;
var c = 10;
var d = b * b - 4 * a * c;
alert(d);
alert("x1 = " + (-b + Math.sqrt(d)) / (2 * a));
alert("x2 = " + (-b - Math.sqrt(d)) / (2 * a));
*/

// Task #4
/*
var num = +prompt("Input any value", "");
if (num > 0) {
	num = ++num;
} else if (num < 0) {
	num -= 2;
} else  {
	num = 10;
}
alert("Now this value is " + num);
	*/

// Task #5	
/*
var num1 = +prompt("Input any value","");	
var num2 = +prompt("Input any value","");	
var num3 = +prompt("Input any value","");
var sum;
if (num1 > num2) {
	if (num3 > num2) {
		sum = num1 + num3;
	} else {		
		sum = num1 + num2;
	}
} else if (num1 > num3) {
	sum = num1 + num2;
} else {sum = num2 + num3;}

alert("Sum = "+ sum);	
	*/

//Task #6 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Variant 1 (Некрасивый)
/*
var val = +prompt("Input any value","");
if (val == 0) {
	alert("нулевое число");
} else {
		if (val > 0) {
			if (val%2 == 0) {
				alert("положительное четное число");
			} else {
				alert("положительное нечетное число");
				}
			}
		else if (val%2 == 0) {
		alert("отрицательное четное число");
	} else {
		alert("отрицательное нечетное число");
	}
}
*/
//Variant 2 (покрасивше)
var val = +prompt("Input any value","");
if (val == 0) {
	alert("нулевое число");
} else { 
	if (val > 0) {
		result = "Положительное ";
	} else {
		result = "Отрицательное ";
	}
	if (val % 2 == 0) {
		result += "четное число";
	} else {
		result += "нечетное число";
	}
	alert (result);
}

	

// Task #7
//var a = +prompt("Input any value","");
//var b = +prompt("Input any value","");
//alert(a > 2 && b <= 3);

//Task #8
/*
var a = +prompt("Input value of A ","");
var b = +prompt("Input value of B ","");
var c = +prompt("Input value of C ","");
alert(true == a < b && b < c);
*/

//Task #9 !!!!!!!!!!!!!!!!!!!!!!!!
// Подумать над реализацией без логики.. только на IFах
//Variant 1 (некрасивый)
/*
var a = +prompt("Input value of A ","");
var b = +prompt("Input value of B ","");
var c = +prompt("Input value of C ","");
var d = +prompt("Input value of D ","");
*if (a && b) {
	if (c == a && c !=d ) {
		alert("Number 4");
	} else {
		alert("Number 3");
	}
} else if (a == c) {
		alert ("Number 2");
	} else {
		alert("Number 1");
}

// Variant 2 (Красивше)
var a = +prompt("Input value of A ","");
var b = +prompt("Input value of B ","");
var c = +prompt("Input value of C ","");
var d = +prompt("Input value of D ","");
if (a == b && b == c) {
	alert("Number 4");
} else if (a == b && b == d) {
	alert ("Number 3");
} else if (a == c && c == d) {
	alert ("Number 2");
} else {
	alert ("Number 1");
}

*/
//Task #10
/*
var k = +prompt("Input value of K ","");
switch (k) {
	case 1:
		alert("плохо");
		break;
	case 2:
		alert("неудовлетворииельно");
		break;
	case 3:
		alert("удовлетворительно");
		break;
	case 4:
		alert("хорошо");
		break;	
	case 5:
		alert("отлично");
		break;
	default:
		alert("ошибка");
}
*/
// Task #11
/*
var month = +prompt("Input month number ","");
switch (month) {
	case 1:
	case 2:
	case 12:
		alert("Зимааааа");
		break;
	case 3:
	case 4:
	case 5:
		alert("Весна");
		break;
	case 6:
	case 7:
	case 8:
		alert("Леееето");
		break;
	case 9:
	case 10:
	case 11:
		alert("Осень");
		break;
	default:
		alert("Нет такого месяца");
}
*/
// Task #12
/*
var a = +prompt("Input value of variable A ","");
var b = +prompt("Input value of varable B ","");
var action = +prompt("Input action number: 1 - сложение, 2 - вычитание, 3- умножение, 4 - деление ", "");
if (b == 0 && action == 4) {
	alert("You can't divide to 0");
} else {
	switch(action) {
		case 1:
			alert (a + b);
		break;
		case 2:
			alert (a - b);
		break;
		case 3:
			alert (a * b);
		break;
		case 4:
			alert (a / b);
		break;
		default: 
		alert("Недопустимая операция");
	}
}
*/
	
	
	