### Jquery Assignment

## question 1. what is Jquery?
### ans. Jquery is javascript library designed to simplify html dom tree transversal and manipulation as well as event handling.

### jquery is library it provides things which are often used in programs e.x.classes,styles,bg colors,paddings,margins and many more etc.

### jquery's main uses is for making complex things easier.

### jquery taking class common which are used in javascript(javascript code require more lines).

###


### how to apply css using jquery, how to add class and remove class in jquery, jquery animation?
### ans. code 1 apply css using jquery.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      body,
      html {
        max-width: 100%;
        max-height: 100%;
        color: white;
      }
      .wrapper {
        width: 50%;
        margin: 50px auto;
        background: #666;
        padding: 10px;
      }
      .jay {
        line-height: 30px;
        padding: 20px;
        border: 1px solid whitesmoke;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="jay">
        parent
        <div class="jay">
          child
          <div class="jay">sub-child</div>
        </div>
      </div>
    </div>

    <script>
      $(document).ready(function () {
        $(".jay").click(function () {
          $(this).css("color", "brown");
        });
      });
    </script>
  </body>
</html>
```
//-----------
program2

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .boxmodel {
        padding: 11px;
        border: 1px solid black;
      }
      .new {
        background: pink;
      }
      .second {
        background: brown;
      }
    </style>
  </head>
  <body>
    <h2>jquery class methods</h2>
    <div class="boxmodel">
      <h3>box1</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        fugit!
      </p>
      <br />
      <button id="addbutton">Add class</button>
      <button id="removebutton">Remove class</button>
      <button id="togglebutton">Toggle class</button>
    </div>
    <!-- <script src="js/jquery.js"></script> -->

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <script>
      $("#addbutton").click(function () {
        $(".boxmodel").addClass("new");
      });
      $("#addbutton").click(function () {
        $(".boxmodel").addClass("second");
      });
      $("#addbutton").click(function () {
        $(".boxmodel h2").addClass("new");
      });
      $("#removebutton").click(function () {
        $(".boxmodel").removeClass("second");
      });
      $("#togglebutton").click(function () {
        $(".boxmodel").toggleClass("second");
      });
    </script>
  </body>
</html>
```
//----------------
program3
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>animation in jquery</title>
    <link rel="stylesheet" href="style2.css" />

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>
  <body>
    <button id="btn1">click1</button>
    <button id="btn2">click2</button>
    <button id="btn3">animate</button>
    <div id="newdiv1" class="div1">
      <p>this is first paragraph</p>
      <p>this is second paragraph</p>
    </div>
    <div class="cube3">
      <p>CUBE</p>
    </div>

    <script>
      $(document).ready(function () {
        $("#btn3").click(function () {
          $(".cube3").animate(
            {
              left: "150px",
              opacity: "1",
              width: "100px",
              height: "100px",
            },
            "slow"
          );
        });
      });
    </script>
  </body>
</html>

```
### how to create slider with animation?

### ans.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>slider</title>
    <!-- <link rel="stylesheet" href="style3.css" /> -->
    <style>
      h2 {
        text-align: center;
      }
      .container {
        width: 530px;
        margin: 35px auto;
      }
      .slide-inner {
        width: 500px;
        height: 300px;
        padding: 3px;
        border: #666 1px solid;
      }
      .slide-inner > img {
        display: none;
        height: 300px;
        width: 500px;
      }
      .slide-inner img.set {
        display: inline-block;
      }
      .slide-outer {
        /* left: 0;
      right: 0; */
        cursor: pointer;
        z-index: 100;
      }
    </style>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>
  <body>
    <div class="container">
      <h2>JquerySlider</h2>
      <div class="slide-inner">
        <img src="images/ghost-rider-new-5p.jpg" class="set" alt="" />
        <img src="images/ghost-rider-in-bike-ya-1920x1080.jpg" alt="" />
        <img src="images/ghost-rider-2020-art-2s.jpg" alt="" />
      </div>

      <div class="slide-outer">
        <button>previous</button>
        <button>next</button>
      </div>
    </div>

    <script>
      $(document).ready(function () {
        $(next).on("click", function () {
          var currentImg = $(".set");
          var nextImg = currentImg.next();

          if (nextImg.length) {
            currentImg.removeclass("set").css("z-index", -10);
            nextImg.addclass("set").css("z-index", 10);
          }
        });

        $(previous).on("click", function () {
          var currentImg = $(".set");
          var previousImg = currentImg.next();

          if (previousImg.length) {
            currentImg.removeclass("set").css("z-index", -10);
            previousImg.addclass("set").css("z-index", 10);
          }
        });
      });
    </script>
  </body>
</html>
```
### event bubbling tickling example
### ans.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>

    <style>
      .parent {
        height: 400px;
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 0, 0, 0.582);
        border: 1px solid black;
        margin: 40px auto;
      }
      .child1 {
        height: 300px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: crimson;
        border: 1px solid black;
        /* margin: 40px auto; */
      }
      .sub-child1 {
        height: 200px;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: purple;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      parent
      <div class="child1">
        child1
        <div class="sub-child1">sub-child1</div>
      </div>
    </div>
    
    <script>
      $("html").click(() => {
        console.log("html clicked");
      });

      $("body").click(() => {
        console.log("body clicked");
      });

      $(".parent").click(() => {
        $("parent").css("color", "brown");
        console.log("parent clicked");
      });

      $(".child1").click(() => {
        $(this).css("color", "red");
        console.log("child1 clicked");
      });

      $(".sub-child1").click(() => {
        $(this).css("color", "blue");
        console.log("sub-child1 clicked");
      });

      //event capturiug isn't supported in jquery
    </script>
  </body>
</html>
```
<!-- 
// -- -----------------------------------------// -->
<!-- //event tickling// -->
<!-- // in event tickling it is going up to down first parent clicked then child clicked,then sub child clicked.// -->

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style1.css" />
  </head>
  <body>
    <h3>event tickling</h3>
      <div class="parent">
        <div class="child">
            <div class="subchild"></div>
        </div>
      </div>
    </div>

    <script>
        var parent=document.querySelector('.parent')
        var child=document.querySelector('.child')
        var subchild=document.querySelector('.subchild')

        parent.addEventListener("click",(event)=>{
          console.log("parent event listener ");
        },true)

        child.addEventListener("click",(event)=>{
          console.log("child event listener");
        },true)

        subchild.addEventListener("click",(event)=>{
          console.log("subchild event listener");
        },true)
    </script>
  </body>
</html>
```
