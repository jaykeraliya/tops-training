## (Conditional looping logic Question)

## Q.30 What are the looping structures in JavaScript? Any one Example?

### ans. looping structure means it is executing particular statement if condition is true ,and another condition is executed and then go outside of loop and give output

### there are 3 types of looping structures in javascript

### for loop,if else loop(nested else if),while and do while

### let's understand if else loop with js code

### if(condition){(statement)}else{(another statement)}
###
```html
<script>
   var sum=0;
  while(number>0){
    sum+=number%10;
    number=Math.floor(number/10);
  }
   </script>
  ```
### in this type of loop condition 1st is true then execute if's statement for written in js code

### otherwise execute else's statement for js code

### Q.31 Write a print 972 to 897 using for loop in JS?

### ans

```html
<script>
  for (i = 972; i <= 897; i++) console.log(i);
</script>
```

## Q.32 Write to print factorial of given number?
### ans.
```html
<script>
var num = parseInt(prompt("Enter a positive integer: "));

      if (num < 0) {
        console.log("Error! Factorial for negative num is not existed.");
      } else if (num == 0) {
        console.log(`The factorial of ${num} is 1.`);
      } else {
        var fact = 1;
        for (i = 1; i <= num; i++) {
          fact *= i;
        }
        console.log(`The factorial of ${num} is ${fact}.`);
      }
<script>
```
### output: the factorial of 3 is 6.

## Q.33 Write to print Fibonacci series up to given numbers?
### ans.
```html
<script>
var j = 1;
      var k = 2;
      console.log(j);
      console.log(k);

      for (let i = 0; i <= 10; i++) {
        var add = j + k;
        console.log(add);
        j = k;
        k = add;
      }
    </script>
```
### output:1
###        2
###        3
###        5
###        8
###        13
###        21
###        34
###        55
###        89
###        144
###        233
###        377

## Q.34 Write to print number in reverse order e.g.: number = 64728 reverse =82746 in JS?
### ans.
```html
<script>
  var number=64728;
  let result=number.toString().split('').reverse().join("");
  console.log(result);
  </script>
```
### output:82746

## Q.35 Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?

## ans

```html
<script>
function numbersSum(number){
  var sum=0;
  while(number>0){
    sum+=number%10;
    number=Math.floor(number/10);
  }
  return sum;
}
var number=1523;
console.log(numbersSum(number));
</script>
```
### ans.11

## Q.36 Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: 5) in JS?
### ans.
```html
<script>
var summationFirstAndLastDigit=number=>
parseInt(number.toString()[0])+
parseInt(number.toString().slice(-1));

var number=1234;
console.log(summationFirstAndLastDigit(1234));
</script>
```
### output:5

## Q.37 Use console.log() and escape characters to print the following pattern in JS?

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

### ans

```html
    <script>
      str = "";
      for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
          if (j == 1 || j == 3) {
            str += i + " ";
          }
          if (j == 2) {
            str += "1" + " ";
          }
          if (j == 4) {
            str += i * i + " ";
          }
          if (j == 5) {
            str += i * i * i + " ";
          }
          str=str+"\n";
        }
      }
      console.log(str);
</script>
```

## Q.38 Use pattern in console.log in JS?

### q1

    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1

### ans
```html
<script>
      str = "";
      counter = 0;
      for (i = 1; i < 5; i++) {
        for (j = 0; j <= i; j++) {
          if (str[str.length - 1] == "1") {
            str = str + "0";
          } else {
            str = str + "1";
          }
        }
        str = str + "\n";
      }
      console.log(str);
</script>
```
### q2

    A
    B C
    D E F
    G H I J
    K L M N O


### ans.
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
      var str = "";
      characterArray = "ABCDEFGHIJKLMNO";
      counter = 0;
      for (j = 1; j <= 5; j++) {
        for (i = 0; j, i < j; i++) {
          str = str + characterArray[counter] + " ";
          counter++;
        }
        str = str + "\n";
      }
      console.log(str);
```

### output A
###        B c  
###        D E F
###        G H I J
###        K L M N O

3.  1
    2 3
    4 5 6
    7 8 9 10
    11 12 13 14 15

### ans.
    ```html
    <script>
      var str = "";
      numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      counter = 0;
      for (j = 1; j <= 5; j++) {
        for (i = 0; j, i < j; i++) {
          str = str + numberArray[counter] + " ";
          counter++;
        }
        str = str + "\n";
      }
      console.log(str);
      </script>
    ```
### output: 1
###         2 3
###         4 5 6 
###         7 8 9 10
###         11 12 13 14 15



4.

-
- -

---

---

---

### ans

```html
<script>
var str = "";
     for (i = 0; i < 5; i++) {
     for (j = 0; j < 5; j++) {
      str = str + "*";
       }
       str = str + "\n";
     }
     console.log(str);
<script>
```

## Q.39 Accept 3 numbers from user using while loop and check each numbers palindrome?
### ans.

```html
<script>
  var string = prompt('please Enter your palindrome')
        var len = string.length;
        var msg = 'is a palindrome'
        for (var i = 0; i < len / 2; i++) {
            if (string[i] != string[len - 1 - i]) {
                msg = 'not is a palindrome';
            }
        }

        console.log(`${string}: ${msg}`)
  </script>
```
### Output: 12: not is a palindrome

### (Array and object Question)

## Q.40 Write a JavaScript Program to display the current day and time in the following format. Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

## ans
```html
<script>
   var day = new Date().getDate();
      var hours = new Date().getHours();
      var minutes = new Date().getMinutes();
      var seconds = new Date().getSeconds();

      var dayInDigit = new Date().getDay();
      var dayInWord = " ";

      switch (dayInDigit) {
        case 0:
          dayInWord = "Sunday";
          break;
        case 1:
          dayInWord = "Monday";
          break;
        case 2:
          dayInWord = "Tuesday";
          break;
        case 3:
          dayInWord = "Wednesday";
          break;
        case 4:
          dayInWord = "Thursday";
          break;
        case 5:
          dayInWord = "Friday";
          break;
        case 6:
          dayInWord = "Saturday";
          break;
      }
      let time = `${hours}:${minutes}:${seconds} ${hours < 12 ? "AM" : "PM"}`;

      console.log(dayInWord);
      console.log(time);
      result = `Current day is ${dayInWord} and current time is ${time}`;
      console.log(result);
  </script>
```
### Monday
### 11:36:25 AM
### Current day is Monday and current time is 11:36:25 AM

## Q.41 Write a JavaScript program to get the current date?

## ans

```html
<script>  
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const currentDate = `${day}-${month}-${year}`;
console.log(currentDate);
</script>
```
### output:10-5-2024

## Q.42 Write a JavaScript program to compare two objects?
### ans.
```html
<script>
var obj1={
  age:15;
  dob:16/9/2009,
};
var obj2={
  age:37,
  dob:16/5/1987,
};
console.log(obj1==obj2);
console.log(obj1===obj2);
</script>
```
### output:false;
### output:false;

## Q.43 Write a JavaScript program to convert an array of objects into CSV string?
### ans.
```html
<script>
      var convertCSV = (data) =>
        [
          Object.keys(data[0]).join(","),
          ...data.map((obj) => Object.values(obj).join(",")),
        ].join("\n");

      var data = [
        { name: "bharat", age: 23, city: "Ahmedabad" },
        { name: "sushil", age: 22, city: "vadodara" },
      ];

      var csvString = convertCSV(data);
      console.log(csvString);
  </script>
  ```
### output:
### name,age,city
### bharat,23,Ahmedabad
### sushil,22,vadodara

## Q.44 Write a JavaScript program to capitalize first letter of a string?

### ans.
```html
<script>
  function capitalizeFirstLetterOfGiven(){
    var string="jay";
    console.log(string.charAt(0).toUppercase()+string.slice(1))
  }
  capitalizeFirstLetterOfGiven();
  </script>
```
### output:Jay.

## Q. 45 Write a JavaScript program to determine if a variable is array?
### ans.
```html
<script>
      function checkVarIsArray() {
        const str = "string";
        const num = 1;

        let jk = Array.isArray(str);
        console.log("Output for String: " + ans);

        jk= Array.isArray(num);
        console.log("Output for Number: " + ans);

      }

      checkVarIsArray();
    </script>
```
### Output for String: false
### Output for Number: false


## Q.46 Write a JavaScript program to clone an array?

## Q.47,Q50 What is the drawback of declaring methods directly in JavaScript objects?
### ans.
```html
<script>
      var myObject = {
        try() {
          console.log("hello");
        },
      };

      const obj1 = Object.create(myObject);
      const obj2 = Object.create(myObject);
      console.log(obj1.method === obj2.method);
    </script>
```
### output:true

## Q.48 Print the length of the string on the browser console using console.log()?

### ans

```html
<script>
  str = "abcdef";
  console.log(str.length);
</script>
```

### output:- 6

## Q.49 Change all the string characters to capital letters using toUpperCase() method?

### ans

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Character lowercase to Uppercase</title>
  </head>
  <body>
    <p id="jk"></p>
    <script>
      var text = "abc";
      var result = text.toUpperCase();
      console.log(result);
      document.getElementById("jk").innerHTML = result;
    </script>
  </body>
</html>
```

### ABC

## Q.50 What is the drawback of declaring methods directly in JavaScript objects?
```html
<script>
      const myObject = {
        try() {
          console.log("hello");
        },
      };

      const obj1 = Object.create(myObject);
      const obj2 = Object.create(myObject);
      console.log(obj1.method === obj2.method);
    </script>

```
### output:true

## Q.51 Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

### ans.
```html
<script>
  
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}-${month}-${year}`;
      console.log(currentDate);

      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}/${month}/${year}`;
      console.log(currentDate);

      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${month}-${day}-${year}`;
      console.log(currentDate);

      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${month}/${day}/${year}`;
      console.log(currentDate);
  </script>
```
### output1:13-5-2024
### output2:13/5/2024
### output3:5-13-2024
### output4:5/13/2024

## Q.52 Use indexOf to determine the position of the first occurrence of a in 30 Days OfJavaScript?

### ans

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <p>Find "30":</p>
    <p id="jay"></p>
  </head>
  <body>
    <script>
      var text = "30 days of Javascript";
      var result = text.indexOf("30");
      document.getElementById("jay").innerHTML = result;
    </script>
  </body>
</html>
```
### output:Find "30"
### 0

## Q.53 Use lastIndexOf to determine the position of the last occurrence of a in 30Days Of JavaScript?

### ans
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <p>Find "javascript":</p>
    <p id="mahesh"></p>
  </head>
  <body>
    <script>
      var text = "30 days of javascript";
      var res = text.indexOf("javascript");
      document.getElementById("mahesh").innerHTML = res;
    </script>
  </body>
</html>
```
### output:Find "javascript"
### 11

## Q.54 Form Validation in JS?
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .form {
        width: 40%;
      }
      #firstname,
      #lastname,
      #city,
      #pin code,
      #email {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div class="form">
      <form action="">
        <label for="">FirstName</label>
        <div class="FirstName">
          <input type="firstname" id="firstname" placeholder="firstname" />
        </div>
        <label for="">LastName</label>
        <div class="LastName">
          <input type="lastname" id="lastname" placeholder="lastname" />
        </div>
        <label for="">City</label>
        <div class="City">
          <input type="city" id="city" placeholder="city" />
        </div>
        <label for="">pin code</label>
        <div class="pin code">
          <input type="pin code" id="pin code" placeholder="number" />
        </div>

        <label for="">Email</label>
        <div class="email">
          <input type="email" id="email" placeholder="email" />
        </div>
        <div class="button">
          <input type="submit" id="button" value="submit" />
        </div>
      </form>
    </div>
  </body>
</html>
```

## Q.55 Form in Email, number,Password Validation?
### ans. 
### Password validation
```html
<div class="jk">
  <form action="">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" required />

    <label for="pass">Password</label>
    <input
      type="password"
      id="pass"
      name="pass"
      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z].{8,})"
      title="must contain at least one number and one uppercase and lowercase letter,and at least 8 or more characters "
    />
    <input type="submit" value="Submit" />
  </form>
</div>

<div id="message">
  <h2>Password must contain the following:</h2>
  <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
  <p id="capital" class="invalid">A <b>capital(uppercase)</b> letter</p>
  <p id="number" class="invalid">A <b>number</b></p>
  <p id="length" class="invalid">Minimum <b>8 characters</b></p>
</div>
``` 
## email validation
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
      let email = "jay@gmail.com";
      let emailPattern = /^[a-zA-Z0-9._s%+-]+@[a-zA-Z0-9.-]\.[a-zA-Z]{2,}$/;
      let isValid = emailPattern.test(email);
      console.log(isValid);
    </script>
  </body>
</html>
```

## Q.56 Dynamic Form Validation in JS?
### same as question 55

## Q.57 how many type of JS Event? How to use it ?
### ans.

### js events

### mouse events

### onclick
### onmouseover
### onmouseout
### onmousedown
### onmouseup
### onmousemove

### window events

### onload
### onunload
### onresize

### event handler

### onfocus
### onsubmit
### onblur
### onchange

### keyword

### onkeydown
### onkeyup

### focus event code is written after this.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h3>enter something here</h3>
    <input type="txt" id="input" onfocus="focusevent()" />
    <script>
      function focusevent() {
        document.getElementById("input").style.background = "pink";
      }
    </script>
  </body>
</html>
```
## Q.59 What is Bom vs Dom in JS?

### ans.
###  dom is document object model.

### user have to write it's(bom) js for accessing it.

### with the help of dom user can access both html,css in javascript.

### not only access user can change css styling too.

### e.x. of dom=document.getElementById("obj").innerHTML = personData.age;

### bom is browser object model.
### bom's code is showing browser window and props of it.
### bom include navigator,window,screen,location,history and doc.

```html
<script>
var newWindow=window.close('');
window.alert('This is an alert!');
window.setTimeout(()=>{
  console.log("Times up");
},4000);
</script>
```

## Q.60 Array vs object differences in JS?

### ans. array is set of data,data  collections which can be stored at memory locations.

### user have to write array index for accessing particular data elements in some memory locations.

### The array can store data types like Integer, Float, String, and Boolean all the primitive data types can be stored in an array.

### e.x. var array=[jay,1,2,3,1.5,3.5,true,false];

### object is store many value in a single variable.

### object store person's details, car name and many more etc.
```html
<!DOCTYPE html>
<html>
<body>

<p id="obj"></p>

<script>
let personData = {
  firstName : "Jay",
  lastName  : "Keraliya",
  age       : "24",
  eyeColor  : "blue"
};

document.getElementById("obj").innerHTML = personData.age;
</script>

</body>
</html>
```
### output:

### 24

## Q.61 Split the string into an array using split() Method?

### ans.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>the first word is:</p>
    <p id="Jk"></p>
    <script>
      const text = "Jay Keraliya.";
      let myNewArrayIs = text.split(" ");
      document.getElementById("Jk").innerHTML = myNewArrayIs[0];
    </script>
  </body>
</html>
```
### output:- the first word is:

### Jay 

## Q.62Check if the string contains a word Script using includes() method?
### ans.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>find "jay":</p>
`    <p id="jk"></p>

    <script>
      var someText = "hii jay,how are you";
      var newResult = text.includes("jay");

      document.getElementById("jk").innerHTML = newResult;
    </script>
  </body>
</html>
```
### output:
### find "jay":

### true


## Q.63 Change all the string characters to lowercase letters using toLowerCase() Method
### ans.
```html
<!DOCTYPE html>
<html>
<body>

<p id="jk"></p>

<script>
var text = "Hello";
var result = text.toLowerCase();

document.getElementById("jk").innerHTML = result;
</script>

</body>
</html>
```

### output

### hello

## Q.64 What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method

### ans

```html
<!DOCTYPE html>
<html>
<body>

<p id="john"></p>

<script>
var text = "30 days of javascript";
var letter = text.charAt(15);

document.getElementById("john").innerHTML = letter;
</script>

</body>
</html>
```
### output:s

## Q.65 copy to one string to another string in JS?
## 
```html
<script>
  </script>
```
## Q.66 Find the length of a string without using libraryFunction?

### ans.
```html
<script>
  var str="jay keraliya";
  var i=0,count=0;
  while{
    str[i]==undefined;
    i++;
    count++;
  }
console.log(count);
</script>
```
### output: 11

## • What is JavaScript?

### ans. javascript is scripting,programming language

### it is mainly used for giving dynamic features of html,css file.

## • What is the use of isNaN function?

### ans. it means it is not a number

### e.x

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

## output:isNaN() returns true if a value is NaN:

### Is 123 NaN?false
### Is 0 NaN?false

## • What is negative Infinity?

### ans. negative infinity is giving negative number with infinite value.
```html
<script>
function checkNum(smallNum) {
        if (smallNum === Number.NEGATIVE_INFINITY) {
          return "Process number as -Infinity";
        }
        return smallNum;
      }

      console.log(checkNum(-Number.MAX_VALUE));

      console.log(checkNum(-Number.MAX_VALUE * 2));
</script>
```
### output:
### -1.7976931348623157e+308
### Process number as -Infinity

## • Which company developed JavaScript?

### ans. js was created by netscape communication by brendan eich in 1995.
### netscape and eich designed js 

## • What are undeclared and undefined variables?

### ans. this are 2 type of variables

### undeclared means use haven't yet declare anything in js code(variable,number)

### undefined means user haven't yet define anything in js code

```html
<!DOCTYPE html>
<html>
<body>

<p id="john"></p>

<script>
var jay;
if (typeof jay == "undefined") {
  text = "jay is undefined";
}
document.getElementById("john").innerHTML = text;
</script>

</body>
</html>
```
### output:jay is undefined

## • Write the code for adding new elements dynamically?

### ans.
```html
<script>


</script>
```
## • What is the difference between ViewState and SessionState?
###
### ViewState	                                                          

### Maintained at page level only.	                                        

### View state can only be visible from a single page and not multiple pages.	

### It will retain values in the event of a postback operation occurring.	

### Information is stored on the client’s end only.	                    

### used to allow the persistence of page-instance-specific data.	

### ViewState values are lost/cleared when new page is loaded.

### SessionState can be cleared by programmer or user or in case of timeouts.

### SessionState

### Maintained at session level.

### Session state value availability is across all pages available in a user session.

### In session state, user data remains in the server. Data is available to user until the browser is closed or there is session expiration.

### Data is available to user until the browser is closed or there is session expiration.

### Information is stored on the server.

### used for the persistence of user-specific data on the server’s end.

## What is === operator?

### ans. this operator is checking value,type for showing 2 number are equal or not.
### e.x.a=10;
### console.log(a===10);
### ans is true

### this operator is checking type as well as value.

## • How can the style/class of an element be changed?
###
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .class1 {
        background-color: brown;
      }
      .class2 {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <div class="class1">oldClass</div>
    <div class="class2">newClass</div>
    <button onClick="changeClass()">Change Class</button>

    <script>
      function changeClass() {
        var element = document.querySelector(".class1");
        element.classList.replace("class1", "class2");
      }
    </script>
  </body>
</html>
```


## • How to read and write a file using JavaScript?

## • What are all the looping structures in JavaScript?

### Ans.there are 3 types of looping structure in js for,while(do while),if else(nested else if), do while

### if(condition1){statement}else{(condition2)}

### while loop
### syntax 
### initialization
### while(condition){
### increment/decrement
### code
### }

### do while loop
```html
<script>
let result=0;
let count=0;
do{
  result+=count;
  count++;
}while(count<=10);
console.log(result);
</script>
```
## • How can you convert the string of any base to an integer in JavaScript?

### output
### 0

## • What is the function of the delete operator?

### ans. delete operator is delete value in program.
```html
<script>
let array = [1, 2, 3, 4]

console.log(delete array[0]);
console.log(array);
<script>
```
### Output
### true
### [ <1 empty item>, 2, 3, 4]


## • What are all the types of Pop up boxes available in JavaScript?
### ans. command box, confirm box, alert box.
### alert("this is an alert!");

### prompt box for entering value in program in js
### prompt("please enter your number:");

### confirm box
### confirm("this is an alert message");

## • What is the use of Void (0)?

### ans. void's meaning is undefined.

### if user write void(0) so it's return undefined.
### javascript:void(0)

## • How can a page be forced to load another page in JavaScript?
###
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button onclick="forceLoad()">Load</button>
    <script>
      function forceLoad() {
        window.location.href = "https://www.pexels.com/";
      }
    </script>
  </body>
</html>
```

## • What are the disadvantages of using innerHTML in JavaScript?
### ans.

### It is very slow because as inner HTML already parses the content even we have to parse the content again so that's why it takes time. 

### When we have used the event handlers then the event handlers are not automatically attached to the new elements created by innerHTML.

### • Create password field with show hide functionalities
```html
<body>
  <h3>Click the button and check password</h3>
  <label>password:</label><br>
  <input type="password" id="showToHide"><br>
  <input type="checkbox" onclick="jk()">show Password

  <script>
    function jk(){
      var checker=document.getElementById("showToHide");
      if(checker.type==="password"){
        checker.type="text";
      }
      else{
        checker.type="password";
      }
    }
    </script>
    </body>
    ```