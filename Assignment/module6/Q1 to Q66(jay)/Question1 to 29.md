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

### e.x. var b; b=10; , let c; c=40; , let c=401; , const j=100; , const j=50

## Q.3 Define a Data Types in js?

### ans.->there are 6 type of data types in js.String,number,Boolean,null,defined,primitive

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

### e.x.let length = 16;,let weight = 7.5

### boolean means either true or false

### let y=true;let x=false

### defined  means giving value to something data like

### E.x. a=10

### primitive data types are predefined data types e.x. string,boolean,number,null,defined

### if condition is right then answer is true,otherwise answer is false

### e.x. if(1<2){(true)}else{(false)}

### string is defined with '23' with this and {}with this bracket

### e.x.{'jay',123,"a","b","c"} etc

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

### undeclare means it is not declare yet in program of js

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
  var=prompt("enter the base value of a triangle");
  var=prompt("enter the height value of a triangle");
  result=(baseValue*heightValue)/2;
  console.log(`the area of triangle is ${result}`);
</script>
```

### Output: 23 base value,height value 16

### so the area of triangle is 184

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
    getDaysForGivenMonth(currentMonth + 5) +
    getDaysForGivenMonth(currentMonth + 6) +
    getDaysForGivenMonth(currentMonth + 7) +
    25;

  console.log(getRemainingDays);
</script>
```

### output is 243 days remaining in upcoming christmas

## Q.10 What is Condition Statement?

### ans. condition statement means condition written inside bracket

### either condition is true or condition is false

### when condition is false then it is executing second condition after first condition

### e.x.:- if(condition1){statement}else{(condition2)}

### e.x.2:- if(1<2){(true)}else{(false)}

## Q.11 Find circumference of Rectangle formula : C = 4 \* a ?

## ans

###

```html
 <script>
  var=prompt("enter the length value of a rectangle");
  var=prompt("enter the width value of a rectangle");
  result=(lengthValue+widthValue)*2;
  console.log(`the area of rectangle is ${result}`);
</script>
```

### ans. the value of length is 23, and the value of width is 16

### result=78

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
celsius = (fahrenheit - 32) / 9 / 5;
console.log(celsius);
</script>
```

### ans.the value of fahrenheit is 32 so the answer is=0.0444444

## Output:hello

## Q.14 Write a JavaScript exercise to get the extension of a filename.?

### Ans

```html
<script>
  function getFileExtension(filename) {
    var getFileExtension = filename.split(".").pop();
    return getFileExtension;
  }
  var result = getFileExtension("javascriptdom.html");
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

## Q.16 What is the result of the expression (true && 1 &&"hello")?

### ans

```html
<script>
  console.log(true && 1 && "hello");
</script>
```

## Output: hello

## Q.17 What is the result of the expression true && false || false && true?

## ans

```html
<script>
  console.log((true && false) || (false && true));
</script>
```

### Output:false

## Q.18 What is a Loop and Switch Case in JavaScript define that ?

### ans. loop means program is running for that state and then after it will repeat again and again this thing called as loop

### e.x. if(condition){(statement1)}else{(statement2)}

### switch case

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
  var number = 1;
  if (number >= 0) {
    console.log("number is positive");
  }
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
  }
  var number = -2;
  if (number <= 0) {
    console.log("number is negative");
  }
  var number = 1;
  if (number >= 0) {
    console.log("number is positive");
  }
</script>
```

## Output: number is zero ,number is negative ,number is positive

## Q.25 Write to find number is even or odd using ternary operator in JS?

### Ans

```html
<script>
  2 / 3 ? console.log("number is odd") : console.log("number is even");
  2 / 8 ? console.log("number is even") : console.log("number is odd");
</script>
```

## Output: number is odd , number is even

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
  let num1 = 8;
  let num2 = 6;
  let num3 = 10;
  num1 > num3
    ? num1 < num3
      ? console.log("num1 is Maximum number")
      : console.log("num3 is Maximum number")
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
  day = 1;
  switch (new Date().getDay()) {
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

### Output:Monday

## ii. Vowel or Consonant using switch case in JS? (Conditional looping logic Question)

## ans

```html
<script>
  var ch = "u";
  // var ch = "B";
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
    // default:
    case "B":
      console.log("consonant");
      break;
  }
</script>
```

### output:Vowel

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
