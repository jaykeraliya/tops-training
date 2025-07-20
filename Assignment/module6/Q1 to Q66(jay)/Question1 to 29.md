# Q.1 What is JavaScript. How to use it?

## Ans. JavaScript is a scripting,programming language

### javascript allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else

### JavaScript allows you to implement complex features on web pages

### displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc

### user have to write code in script which is inside in body element

### then user have to run in browser and then go to inspect option and then go to console to see output of js code

## Q.2 How many type of Variable in JavaScript?

### Ans

### There are 3 types of variable in javascript:- Let, var,const

### In variable let user can declare,re-declare number using this type of variable in js program and initialization can be done

### in var user can’t redeclare number using this type of variable in js program, but it’s value can be changed

### in const user can’t redeclare number value in js program and not change it’s value in this type of variable

### e.x

```html
<script>
var b; 
var b=10;
let c; c=40; 
let c=401; 
const j=100;
const j=50;
</script>
```

## Q.3 Define a Data Types in js?

### ans.->there are 8 type of data types in js.String,number,Boolean,array,object,null,defined,undefined

### number declaration is done by giving value to someone

### null it means giving null value to someone

### e.x

```html
<script>
let x = null;
    console.log("Value of x=" + x);
</script>
```

### Output Value of x=null

### e.x

```html
<script>
let length = 16;,let weight = 7.5;
</script>
```

### boolean means either true or false

###

```html
<script>
let y=true;let x=false;
</script>
```

### defined  means giving value to something data like

### undefined means value isn't given to data

### E.x

<script>
var a=10;//defined//
var a;//undefined//
</script>

### string is defined with '23' with this and {}with this bracket

###

```html
<script>
var a={'jay',123,"a","b","c"};
</script>
```

### array is define [] big brackets and inside bracket there is data stored

# e.x

```html
<script>
  var j=["Jay","Sushil","Sushant","Kapil"];
  </script>
```

### number is defined with defined with given value to data like length value is 24

```html
<script>
  var length=24;
  </script>
```

### object is make with{} brackets and inside object there is data written in form of object and value is also given

```html
<script>
var obj={
  name:"Jay",
  age:24,
  Dob:16th Nov,
}
</script>
```

## Q.4 Write a mul Function Which will Work Properly When invoked With Following Syntax

### ans

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let y = 2;
      let j = 3;
      result = y * j;
      console.log(result);
    </script>
  </body>
</html>
```

### output:6

### mul is doing multiplication of two numbers

### result is shown in console cause using js in html code with script

## Q.5 What the deference between undefined and undeclare in JavaScript?

### Ans.difference is explain as under

### undefined it means nothing is define in program of js

### suppose i define x in js without any value it is called undefined

### undeclare means it is not declare yet in program of js

### it is user have to declare which is needed in program without it, it is called undeclared
```html
<script>
  let x;
  console.log(x);

  const y;
  console.log(y);
  </script>
```
## Q.6 Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. Using console.log() print out the following quote by Mother Teresa

### Ans

```html
<script>
  console.log(
    "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
  );
</script>
```

### Output:"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another"

## Q.7 Check if type of '10' is exactly equal to 10. If not make it exactly equal?

### Ans

```html
<script>
  let y = 10;
  console.log(y == 10);
  let y = "10";
  console.log(y === 10);
</script>
```

### true,false

## Q.8 Write a JavaScript Program to find the area of a triangle?

### ans

```html
<script>
  // function area(base,height){
  // return base,height;
  // }
  var baseValue=parseFloat(prompt("enter the base value of a triangle"));
  var heightValue=parseFloat(prompt("enter the height value of a triangle"));
  var result=(baseValue*heightValue)/2;
  console.log(`the area of triangle is ${result}`);
</script>
```

### Output: 23 base value,height value 24

### so the area of triangle is 276

## Q.9 Write a JavaScript program to calculate days left until next Christmas?

## ans

```html
<script>
  function getDaysForGivenMonth(month) {
    switch (month) {
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
        return 31;
      case 1:
        return 28;
      case 3:
      case 5:
      case 8:
      case 10:
        return 30;
    }
  }

  // console.log(getDaysForGivenMonth(2));
  currentMonth = new Date().getMonth();
  console.log(currentMonth);
  totalDaysInThisMonth = getDaysForGivenMonth(currentMonth);
  // console.log(totalDaysInThisMonth);
  currentDateOfThisMonth = new Date().getDate();
  // console.log(currentDateOfThisMonth);
  daysLeftInCurrentMonth = totalDaysInThisMonth - currentDateOfThisMonth;
  // console.log(getMonthDaysCount);

  getRemainingDays =
    daysLeftInCurrentMonth +
    getDaysForGivenMonth(currentMonth + 1) +
    getDaysForGivenMonth(currentMonth + 2) +
    getDaysForGivenMonth(currentMonth + 3) +
    getDaysForGivenMonth(currentMonth + 4) +
    25;
  console.log(getRemainingDays);
</script>
```

### output is 163 days remaining in upcoming christmas

## Q.10 What is Condition Statement?

### ans

### condition means it is having some statement for execute code

### in if condition is true then if's code is run and then program is finished

## if's condition is false then program is execute else condition and then program is complete

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var x=10;
        var y=20;
        if(x>y){
            console.log("hello world");
        }
        else if (y<=x){
            console.log("hello america");
        }
        else{
           console.log("hello India");
        }
    </script>
</body>
</html>
```

### output is hello India

### explanation the first condition is x>y which is false so if's statement is not execute

### in second the else if condition y is less than x but not less than equal to so second condition is false

### in third and last else it is used for if upper 2 conditions are false then else's statement at output is printed

## Q.11 Find circumference of Rectangle formula : C = 4 \* a ?

## ans

###

```html
 <script>
      var length = parseFloat(prompt("enter the value of length"));
      var width = parseFloat(prompt("enter the value of width"));

      var circ = 2 * (length + width);
      window.alert(`the circumference of rectangle is: ${circ} `);
</script>
```

### ans. the value of length is 22, and the value of width is 22

### result=88

## Q.12 WAP to convert years into days and days into years?

### ans

```html
<script>
  var days = 1095;
  years = parseInt(days / 365);
  console.log(years);

  var years = 5;
  days = parseInt(years * 365);
  console.log(days);
</script>
```

### output: 3 years,1825 days

## Q.13 Convert temperature Fahrenheit to Celsius? (Conditional logic Question)

### ans

```html
<script>
var fahrenheit = Number(prompt("Enter the value of fahrenheit"));
celsius = (fahrenheit - 32) / 5 / 9;
console.log(celsius);
</script>
```

### ans.the value of fahrenheit is 78 so the answer is=1.0222

## Q.14 Write a JavaScript exercise to get the extension of a filename.?

### Ans

```html
<script>
  function getFileExtension(filename) {
    var FileExtension = filename.split(".").pop();
    return FileExtension;
  }
  var result = getFileExtension("pattern.html");
  console.log(result);
</script>
```

### output:html

### Q.15 What is the result of the expression(5 > 3 && 2 <4)?

### ans

```html
<script>
  console.log(5 > 3 && 2 < 4);
</script>
```

### Output:true

### explanation 5>3 are true(1) and 2<4 are true(1) in and if both condition are true output are  true in and

## Q.16 What is the result of the expression (true && 1 &&"hello")?

### ans

```html
<script>
  console.log(true && 1 && "hello");
</script>
```

## Output: hello

### in logical first condition true(1)&&1 so output is 1 and then he is checking other condition which is string so anyone is in string with number the output is user get string

## Q.17 What is the result of the expression true && false || false && true?

## ans

```html
<script>
  console.log((true && false) || (false && true));
</script>
```

### Output:false

### true(1)&& false(0) 1 and 0's and is false logic both condition are 1 then output is 1

### false(0) && true (1) again 0 and 1's and is false so output is false both condition are 1 then output is 1

## Q.18 What is a Loop and Switch Case in JavaScript define that ?

### ans. loop means program is running for that state and then after it will repeat again and again this thing called as loop

```html
<script>
  var str="";
  for(i=0;i<= 5;i++){
    for(j=0;j<i;j++){
      str=str+"*";
      }
      str=str+'\n';
  }
  console.log(str);
</script>
```

## for loop was main aim to used for print a value or pattern after execute a code

## for loop is print value after running block of code

### switch case

```html
<script>
  day = 6;
  switch (day()) {
    case 0:
      day="Sunday";
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
  }
</script>
```

### explanation if user have to perform different actions on different conditions then switch case is used for it

### if day is 0 then console.log is print sunday in browser

### if day=1 then it is print monday in browser

### if day's number in  between 0 to 6 if it's changing then day is changed according to console.log

## switch case is used for checking multiple true condition and default used for errored or wrong value entered

## Q.19 What is the use of is Nan function?

### ans. nan means not a number

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nan function</title>
    <p>isNaN() returns true if a value is NaN:</p>
  </head>
  <body>
    <p id="jk"></p>
    <script>
      var result = "Is 123 NaN?" + isNaN(123) + "<br>" + "Is 0 NaN?" + isNaN(0);
      document.getElementById("jk").innerHTML = result;
    </script>
  </body>
</html>
```

### output isNaN() returns true if a value is NaN

### Is 123 NaN?false

### Is 0 NaN?false

### if NaN true it is return it's value, e.x. infinite

### nan is true in program then code will return the value for nan,infinite

## Q.20 What is the difference between && and || in JavaScript?

## ans.-> In and logical operator if both condition are true then output is 1(true)

### ->In or logical operation any 1 condition is true then output is 1

      ```html
      <script>
        console.log(5 && 3 && 2 && 0);
        console.log(5 || 3 || 2 || 1);

</script>
```

## Output: 0,5

### explanation the first is true then he is checking second condition in and if both conditions have 1,1 then after output is 1

### 5&&3 output is 5 and 2&&0 output is 0

### 5&&0 output is 0

### 5||3 output is 5 whenever using or in logical operator then any 1 condition is true then output of first condition is consider as final output

### if there are multiple condition then he is checking for it then after giving final output  

## Q.21 What is the use of Void (0)?

### ans.->it means it is not return any value or output with anything

### ->Or can be said it is empty with nothing process done inside program with this

### void's meaning is it's return undefined ,what ever return in bracket,void() it is returning undefined

###

```html
<script> 
"Javascript:void(0)"
</script>
```

## Q.22 Check Number Is Positive or Negative in JavaScript?

### Ans

```html
<script>
  var number = -2;
  if (number <= 0) {
    console.log("number is negative");
  }
  else{
  if (number >= 0) {
    console.log("number is positive");
  }}
</script>
```

## output:number is negative, number is positive

## Q.24 Write to check whether a number is negative, positive or zero?

### Ans

```html
<script>
  var number = 0;
      if (number == 0) {
        console.log("number is zero");
      } else if (number >=0) {
        console.log("number is positive");
      } else {
        console.log("number is negative");
      }
</script>
```

## Output: number is zero ,number is negative ,number is positive according to number input in starting where the number is define in var

## Q.25 Write to find number is even or odd using ternary operator in JS?

### Ans

```html
<script>
  (3%2) ? console.log("number is odd") : console.log("number is even");
  (4/2) ? console.log("number is even") : console.log("number is odd");
  (10 % 2) ? console.log("number is even") : console.log("number is odd");
</script>
```

## Output: number is odd , number is even,number is odd

## Q.26 Write find maximum number among 3 numbers using ternary operator in JS?

### ans

```html
<script>
  let num1 = 8;
  let num2 = 6;
  let num3 = 10;
  num1 > num3
    ? num1 < num3
      ? console.log("num1 is Maximum number")
      : console.log("num3 is Maximum number")
    : num2 > num3
    ? console.log("num2 is Maximum number")
    : console.log("num3 is Maximum number");
</script>
```

## Output: num3 is Maximum number

## Q.27 Write to find minimum number among 3 numbers using ternary operator in JS?

### ans

```html
<script>
  let num1 = 1;
  let num2 = 6;
  let num3 = 10;
  num1 > num3
    ? num1 < num3
      ? console.log("num1 is Maximum number")
      : console.log("num1 is Minimum number")
    : num2 < num3
    ? console.log("num2 is Minimum number")
    : console.log("num3 is Maximum number");
</script>
```

### Output: num2 is Minimum number

## Q.29 Write to show

## i. Monday to Sunday using switch case in JS?

```html
<script>
  day = 6;
  switch (day) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
  }
</script>
```

### Output:Saturday

## ii. Vowel or Consonant using switch case in JS? (Conditional looping logic Question)

## ans

```html
<script>
  // var ch = "u";
  var ch = "B";
  switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      console.log("vowel");
      break;
    default:
    case "B":
      console.log("consonant");
      break;
  }
</script>
```

### output:consonant

```html
<script>
  var ch = "u";
  var ch = "B";
  switch (ch) {
    case "u":
    case "B":
    case "c":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      console.log("vowel");
      break;
    case "B":
      console.log("consonant");
      break;
  }
</script>
```

### output: Consonant
