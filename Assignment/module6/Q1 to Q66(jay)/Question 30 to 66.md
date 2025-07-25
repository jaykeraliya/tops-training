## (Conditional looping logic Question)

## Q.30 What are the looping structures in JavaScript? Any one Example?

### ans. looping structure means it is executing particular statement if condition is true ,and another condition is executed and then go outside of loop and give output

### there are 3 types of looping structures in javascript

### for loop,if else(nested else if),while and do while

### let's understand if else loop with js code

```html
<script>
  if (j < 12) {
    console.log("hey guys good morning");
  } else {
    console.log("something is wrong executed");
  }
</script>
```

### condition 1 is true then execute if's statement

### otherwise execute else statement when 1st condition is false

### Q.31 Write a print 972 to 897 using for loop in JS?

### ans

```html
<script>
  for (i = 972; i >= 897; i--) console.log(i);
</script>
```

## Q.32 Write to print factorial of given number?

### ans

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

### output: the factorial of 3 is 6

## Q.33 Write to print Fibonacci series up to given numbers?

### ans

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

### 2

### 3

### 5

### 8

### 13

### 21

### 34

### 55

### 89

### 144

### 233

### 377

## Q.34 Write to print number in reverse order e.g.: number = 64728 reverse =82746 in JS?

### ans

```html
<script>
  var number = 64728;
  let result = number.toString().split("").reverse().join("");
  console.log(result);
</script>
```

### output:82746

## Q.35 Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?

## ans

```html
<script>
  function numbersSum(number) {
    var sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  var number = 1523;
  console.log(numbersSum(number));
</script>
```

### ans.11

## Q.36 Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: 5) in JS?

### ans

```html
<script>
  var summationFirstAndLastDigit = (number) =>
    parseInt(number.toString()[0]) + parseInt(number.toString().slice(-1));

  var number = 1234;
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
  var str = "";
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
    }
    str += "\n";
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
  for (i = 1; i < 5; i++) {
    for (j = 0; j <= i; j++) {
      if (str[str.length - 1] == "1") {
        str = str + " " + "0";
      } else {
        str = str + " " + "1";
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

### ans

```html
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
</script>
```

### output A

### B c

### D E F

### G H I J

### K L M N O

3. 1
   2 3
   4 5 6
   7 8 9 10
   11 12 13 14 15

### ans

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

### 2 3

### 4 5 6

### 7 8 9 10

### 11 12 13 14 15

4.

- \*\*
  ***
  ***
  ***

### ans

```html
<script>
var str = "";
     for (i = 0; i <= 5; i++) {
     for (j = 0; j < i; j++) {
      str = str + "*";
       }
       str = str + "\n";
     }
     console.log(str);
<script>
```

## Q.39 Accept 3 numbers from user using while loop and check each numbers palindrome?

### ans

```html
<script>
  var string = prompt("please Enter your palindrome");
  var len = string.length;
  var msg = "is a palindrome";
  for (var i = 0; i < len / 2; i++) {
    if (string[i] != string[len - 1 - i]) {
      msg = "not is a palindrome";
    }
  }

  console.log(`${string}: ${msg}`);
</script>
```

### Output: 12: not is a palindrome

### (Array and object Question)

## Q.40 Write a JavaScript Program to display the current day and time in the following format. Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

## ans

```html
<script>
  function CurrentDayAndTime() {
    const now = new Date();

    const day = now.toLocaleString("default", { weekday: "long" });

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    const lastDigitOfSeconds = seconds % 10;

    console.log(`Today is ${day}.`);
    console.log(
      `Current Time is ${hours} ${ampm}: ${minutes} : ${lastDigitOfSeconds}`
    );
  }

  CurrentDayAndTime();
</script>
```

### Today is Saturday

### Current Time is 9 AM: 18 : 5

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

### output:19-07-2025

## Q.42 Write a JavaScript program to compare two objects?

### ans

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

### output:false

### output:false

## Q.43 Write a JavaScript program to convert an array of objects into CSV string?

### ans

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

### output

### name,age,city

### bharat,23,Ahmedabad

### sushil,22,vadodara

## Q.44 Write a JavaScript program to capitalize first letter of a string?

### ans

```html
<script>
  var str = "jk";
  var capitalizedLetterStr = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(capitalizedLetterStr);
</script>
```

### output:Jk

## Q. 45 Write a JavaScript program to determine if a variable is array?

### ans

```html
<script>
  function ArrayCheck(variable) {
    if (Array.isArray(variable)) {
      console.log("The variable is an array.");
    } else {
      console.log("The variable is NOT an array.");
    }
  }

  ArrayCheck([1, 2, 3]);
  ArrayCheck("Hello");
</script>
```

### Output : The variable is an array

### Output :The variable is NOT an array

## Q.46 Write a JavaScript program to clone an array?

```html
<script>
  function cloneArray(arr) {
    const cloned0 = arr.slice();

    const cloned1 = [...arr];

    const cloned2 = Array.from(arr);

    console.log("Original Array:", arr);
    console.log("Cloned using slice():", cloned0);
    console.log("Cloned using spread operator:", cloned1);
    console.log("Cloned using Array.from():", cloned2);
  }

  cloneArray([1, 2, 3, 4]);
</script>
```

## Q.47,Q50 What is the drawback of declaring methods directly in JavaScript objects?

### ans

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

### drawbacks

### 1. Performance Issues

### Related to memory inefficiency, creating new copies of the function for every object instance can impact performance

### especially when creating many instances. This is less efficient than sharing a single function across all instances

### 2. Memory Inefficiency

### When you declare methods directly in objects (as opposed to using a prototype)

## every instance of the object will have its own copy of that method. This can lead to increased memory usage when creating multiple instances of the object, because the function is duplicated for each object instance

### 3. Inconsistent this Binding

### Methods declared directly inside objects can sometimes have unexpected behavior with the this keyword, especially when passed around as callbacks or event handlers

### 4. Memory Waste: If you create many such objects (e.g., in a loop), each one gets its own copy of the method in memory

### 5. Slower Performance: More functions = more memory allocations = more work for the JavaScript engine

## Q.48 Print the length of the string on the browser console using console.log()?

### ans

```html
<script>
  var str = "abcdef";
  console.log(str.length);
</script>
```

### output:- 6

## Q.49 Change all the string characters to capital letters using toUpperCase() method?

### ans

```html
    <script>
      var text = "abc";
      var result = text.toUpperCase();
      console.log(result);
      </script>
  </body>
</html>
```

### output: ABC

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

### explanation

### 1. Performance Issues

### Related to memory inefficiency, creating new copies of the function for every object instance can impact performance

### especially when creating many instances. This is less efficient than sharing a single function across all instances

### 2. Memory Inefficiency

### When you declare methods directly in objects (as opposed to using a prototype)

## every instance of the object will have its own copy of that method. This can lead to increased memory usage when creating multiple instances of the object, because the function is duplicated for each object instance

### 3. Inconsistent this Binding

### Methods declared directly inside objects can sometimes have unexpected behavior with the this keyword, especially when passed around as callbacks or event handlers

## Q.51 Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?

### ans

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
<script>
  var text = "30 days of Javascript";
  var result = text.indexOf("30");
  console.log(res);
</script>
```

### output:Find "30"

### 0

## Q.53 Use lastIndexOf to determine the position of the last occurrence of a in 30Days Of JavaScript?

## ans

```html
<script>
  var text = "30 days of javascript";
  var res = text.lastIndexOf("javascript");
  console.log(res);
</script>
```

### output:"javascript"

### 11

## Q.54 Form Validation in JS?

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form Validation</title>
    <style>
      .error {
        color: red;
        font-size: 17px;
      }
    </style>
  </head>
  <body>
    <h2>Registration Form</h2>
    <form id="myForm" onsubmit="return validateForm()">
      <label>Name:</label><br />
      <input type="text" id="name" /><br />
      <span id="nameError" class="error"></span><br />

      <label>Email:</label><br />
      <input type="text" id="email" /><br />
      <span id="emailError" class="error"></span><br />

      <label>Password:</label><br />
      <input type="password" id="password" /><br />
      <span id="passwordError" class="error"></span><br />

      <label>Address:</label><br />
      <input type="text" id="address" /><br />
      <span id="addressError" class="error"></span><br />

      <label>Pincode:</label><br />
      <input type="text" id="pincode" /><br />
      <span id="pincodeError" class="error"></span><br />

      <label>Mobile Number:</label><br />
      <input type="text" id="mobile" /><br />
      <span id="mobileError" class="error"></span><br />

      <br />
      <input type="submit" value="Submit" />
    </form>

    <script>
      function validateForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const address = document.getElementById("address").value.trim();
        const pincode = document.getElementById("pincode").value.trim();
        const mobile = document.getElementById("mobile").value.trim();

        document.getElementById("nameError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("passwordError").innerText = "";
        document.getElementById("addressError").innerText = "";
        document.getElementById("pincodeError").innerText = "";
        document.getElementById("mobileError").innerText = "";

        let isValid = true;

        if (name === "") {
          document.getElementById("nameError").innerText = "Name is required";
          isValid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === "") {
          document.getElementById("emailError").innerText = "Email is required";
          isValid = false;
        } else if (!email.match(emailPattern)) {
          document.getElementById("emailError").innerText =
            "Invalid email format";
          isValid = false;
        }

        if (password.length < 6) {
          document.getElementById("passwordError").innerText =
            "Password must be at least 6 characters";
          isValid = false;
        }

        if (address === "") {
          document.getElementById("addressError").innerText =
            "Address is required";
          isValid = false;
        }

        const pincodePattern = /^[0-9]{6}$/;
        if (!pincode.match(pincodePattern)) {
          document.getElementById("pincodeError").innerText =
            "Pincode must be 6 digits";
          isValid = false;
        }

        const mobilePattern = /^[0-9][0-9]{9}$/;
        if (!mobile.match(mobilePattern)) {
          document.getElementById("mobileError").innerText =
            "Enter a valid 10-digit mobile number";
          isValid = false;
        }

        return isValid;
      }
    </script>
  </body>
</html>
```

## Q.55 Form in Email, number,Password Validation?

### ans

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form Validation</title>
    <style>
      .error {
        color: red;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <h2>User Login Form</h2>
    <form onsubmit="return validateForm()">
      <label>Email:</label><br />
      <input type="text" id="email" /><br />
      <span id="emailError" class="error"></span><br />

      <label>Mobile Number:</label><br />
      <input type="text" id="mobile" /><br />
      <span id="mobileError" class="error"></span><br />

      <label>Password:</label><br />
      <input type="password" id="password" /><br />
      <span id="passwordError" class="error"></span><br />

      <br />
      <input type="submit" value="Submit" />
    </form>

    <script>
      function validateForm() {
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const password = document.getElementById("password").value;

        document.getElementById("emailError").innerText = "";
        document.getElementById("mobileError").innerText = "";
        document.getElementById("passwordError").innerText = "";

        let isValid = true;

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === "") {
          document.getElementById("emailError").innerText = "Email is required";
          isValid = false;
        } else if (!email.match(emailPattern)) {
          document.getElementById("emailError").innerText =
            "Invalid email format";
          isValid = false;
        }

        const mobilePattern = /^[6-9][0-9]{9}$/;
        if (!mobile.match(mobilePattern)) {
          document.getElementById("mobileError").innerText =
            "Enter a valid 10-digit mobile number";
          isValid = false;
        }

        if (password.length < 6) {
          document.getElementById("passwordError").innerText =
            "Password must be at least 6 characters";
          isValid = false;
        }

        return isValid;
      }
    </script>
  </body>
</html>
```

## Q.56 Dynamic Form Validation in JS?

### same as question 55

## Q.57 how many type of JS Event? How to use it ?

### ans

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

### focus event code is written after this

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

### ans

### dom is document object model

### user have to write it's(bom) js for accessing it

### with the help of dom user can access both html,css in javascript

### not only access user can change css styling too

### e.x. of dom

```html
<script>
  document.getElementById("obj").innerHTML = personData.age;
</script>
```

### bom is browser object model

### bom's code is showing browser window and props of it

### bom include navigator,window,screen,location,history and doc

```html
<script>
  var newWindow = window.close("");
  window.alert("This is an alert!");
  window.setTimeout(() => {
    console.log("Times up");
  }, 4000);
</script>
```

## Q.60 Array vs object differences in JS?

### ans. array is set of data,data collections which can be stored at memory locations

### user have to write array index for accessing particular data elements in some memory locations

### The array can store data types like Integer, Float, String, and Boolean all the primitive data types can be stored in an array

### e.x

```html
<script>
  var array = [jay, 1, 2, 3, 1.5, 3.5, true, false];
</script>
```

### object is store many value in a single variable

### object store person's details, car name and many more etc

### person,user can get property and it's value in output

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="obj"></p>

    <script>
      let personData = {
        firstName: "Jay",
        lastName: "Keraliya",
        age: "24",
        eyeColor: "blue",
      };

      document.getElementById("obj").innerHTML = personData.age;
    </script>
  </body>
</html>
```

### output

### 24

## Q.61 Split the string into an array using split() Method?

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

### output:- the first word is

### Jay

## Q.62 Check if the string contains a word Script using includes() method?

### ans

```html
<script>
  var a = "hii jay,how are you";
  var newResult = a.includes("jay");
  console.log(newResult);
</script>
```

### output

### find "jay"

### true

## Q.63 Change all the string characters to lowercase letters using toLowerCase() Method

### ans

```html
    <script>
      var str = "Hello";
      var result = str.toLowerCase();
      console.log(result);
```

### output

### hello

## Q.64 What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method

### ans

```html
<script>
  var text = "30 days of javascript";
  var letter = text.charAt(15);
  console.log(letter);
</script>
```

### output:s

## Q.65 copy to one string to another string in JS?

##

```html
<script>
  var txt = "hey jay";
  var txt1 = "how are you?";
  var res = txt.concat(" ", txt1);
  console.log(res);
</script>
```

## Q.66 Find the length of a string without using libraryFunction?

### ans

```html
<script>
  //   var str="jay keraliya";
  //   var i=0,count=0;
  //   while(str[i]==undefined;){
  //     i++;
  //     count++;
  //   }
  // console.log(count);

  function StringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
      count++;
    }
    return count;
  }

  const myString = "Hello, world!";
  console.log(StringLength(myString));
</script>
```

### output: 13

## • What is JavaScript?

### ans. javascript is scripting,programming language

### it is mainly used for giving dynamic features of html,css file

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

## output:isNaN() returns true if a value is NaN

### Is 123 NaN?false

### Is 0 NaN?false

## • What is negative Infinity?

### ans. negative infinity is giving negative number with infinite value

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

### output

### -1.7976931348623157e+308

### Process number as -Infinity

## • Which company developed JavaScript?

### ans. js was created by netscape communication by brendan eich in 1995

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

### ans

```html
<script>
  function NewDiv() {
    const newDiv = document.createElement("div");

    newDiv.textContent = "This is a new dynamically added div.";

    newDiv.style.background = "#f0f0f0";
    newDiv.style.margin = "10px";
    newDiv.style.padding = "10px";
    newDiv.className = "dynamic-div";

    document.body.appendChild(newDiv);
  }

  NewDiv();
</script>
```

## • What is the difference between ViewState and SessionState?

###

### ViewState

### Maintained at page level only

### View state can only be visible from a single page and not multiple pages

### It will retain values in the event of a postback operation occurring

### Information is stored on the client’s end only

### used to allow the persistence of page-instance-specific data

### ViewState values are lost/cleared when new page is loaded

### SessionState can be cleared by programmer or user or in case of timeouts

### SessionState

### Maintained at session level

### Session state value availability is across all pages available in a user session

### In session state, user data remains in the server. Data is available to user until the browser is closed or there is session expiration

### Data is available to user until the browser is closed or there is session expiration

### Information is stored on the server

### used for the persistence of user-specific data on the server’s end

## What is === operator?

### ans. this operator is checking value,type for showing 2 number are equal or not

### e.x.a=10

### console.log(a===10)

### ans is true

### this operator is checking type as well as value

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

### ans

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Read and Write File - Browser</title>
  </head>
  <body>
    <h2>📂 Read a File</h2>
    <input type="file" id="fileInput" /><br /><br />

    <h2>💾 Write a File</h2>
    <textarea
      id="fileContent"
      rows="6"
      cols="50"
      placeholder="Enter text to save..."
    ></textarea
    ><br />
    <button onclick="downloadFile()">Download as File</button>

    <script>
      document
        .getElementById("fileInput")
        .addEventListener("change", function (event) {
          const file = event.target.files[0];
          const reader = new FileReader();

          reader.onload = function (e) {
            alert("File content:\n\n" + e.target.result);
            document.getElementById("fileContent").value = e.target.result;
          };

          reader.readAsText(file);
        });

      
      function downloadFile() {
        const content = document.getElementById("fileContent").value;
        const blob = new Blob([content], { type: "text/plain" });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "myFile.txt";
        link.click();
      }
    </script>
  </body>
</html>
```

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
  let result = 0;
  let count = 0;
  do {
    result += count;
    count++;
  } while (count <= 10);
  console.log(result);
</script>
```

## • How can you convert the string of any base to an integer in JavaScript?

### output

### 0

## • What is the function of the delete operator?

### ans. delete operator is delete value in program

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

### ans. command box, confirm box, alert box

### alert("this is an alert!")

### prompt box for entering value in program in js

### prompt("please enter your number:")

### confirm box

### confirm("this is an alert message")

## • What is the use of Void (0)?

### ans. void's meaning is undefined

### if user write void(0) so it's return undefined

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

### ans

### It is very slow because as inner HTML already parses the content even we have to parse the content again so that's why it takes time

### When we have used the event handlers then the event handlers are not automatically attached to the new elements created by innerHTML

### • Create password field with show hide functionalities

```html
<body>
    <h3>Click The Button And Check Password</h3>
    <label>Password:</label><br />
    <input type="password" id="showToHide" /><br />
    <input type="checkbox" onclick="jk()" />Show Password

    <script>
      function jk() {
        var checker = document.getElementById("showToHide");
        if (checker.type === "password") {
          checker.type = "text";
        } else {
          checker.type = "password";
        }
      }
    </script>
  </body>
```
