//Task #1
//var a = 4
//alert ("S= "+ a*a);

//Task2
/*
var speedCar1 = +prompt("Input speed of the first car","");
var speedCar2 = +prompt("Input speed of the second car","");
var distanceBefore = +prompt("Input initial distance between two cars","");
var travelTime = +prompt("Input travelling time","");
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
alert("x2 = " + (-b - Math.sqrt(d)) / (2 *a ));
*/

// Task #4
/*
var num = +prompt("Input any value", "");
if (num > 0) {
	num = ++num;
	} else if (num < 0) {
	num -= 2;
	} else num = 10;
alert ("Now this value is " + num);
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
		} else sum = num1 + num2;
} else if (num1 > num3) {
			sum = num1 + num2;
			} else sum = num2 + num3;

alert("Sum = "+ sum);	
	*/

//Task #6
/*
var val = +prompt("Input any value","");
if (val == 0) {
	alert("нулевое число");
	} else
		if (val > 0) {
			if (val%2 == 0) {
				alert("положительное четное число");
			} else alert("положительное нечетное число");				
		} else if (val%2 == 0) {
					alert("отрицательное четное число");
				} else alert("отрицательное нечетное число");
*/		

// Task #7
//var a = +prompt("Input any value","");
//var b = +prompt("Input any value","");
//alert(true == a > 2 && b <= 3);

//Task #8
var a = +prompt("Input any value","");
var b = +prompt("Input any value","");
var c = +prompt("Input any value","");
alert(true == a < b && b < c);












	
	
	
	
	
	
	