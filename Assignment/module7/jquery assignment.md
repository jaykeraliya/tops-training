# Jquery Assignment

## question 1. what is Jquery?

### ans. Jquery is javascript library designed to simplify html dom tree transversal and manipulation as well as event handling

### jquery is library it provides things which are often used in programs e.x.classes,styles,bg colors,paddings,margins and many more etc

### jquery's main uses is for making complex things easier

### jquery taking class common which are used in javascript(javascript code require more lines)

### Q2. how to apply css using jquery, how to add class and remove class in jquery, jquery animation?

### ans. code 1 apply css using jquery

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

### q3. how to create slider with animation?

### ans
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>jQuery Slider</title>
    <style>
      .slider {
        position: relative;
        width: 300px;
        overflow: hidden;
      }

      .slides {
        display: flex;
        transition: transform 0.5s ease;
      }

      .slide {
        min-width: 100%;
      }

      img {
        width: 100%;
      }
    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <div class="slider">
      <div class="slides">
        <div class="slide active">
          <img src="images\Vada_Pav.jpg" alt="Image 1" />
        </div>
        <div class="slide">
          <img src="images\istockphoto-1349560847-612x612.jpg" alt="Image 2" />
        </div>

        <div class="slide">
          <img src="images/1_Y3x9f9fN0LlW9XAuRhJygA.jpg" alt="Image 3" />
        </div>
        <div class="slide">
          <img
            src="images/240_F_820392634_Yl3jTarar8s6iPLKov51oLRwN49yGkgX.jpg"
            alt="Image 4"
          />
        </div>
        <div class="slide">
          <img
            src="images/bored-of-eating-same-food-try-this-indo-chinese-food-hakka-noodles-simple-and-easy-to-make-920x518.jpeg"
            alt="Image 5"
          />
        </div>
        <div class="slide">
          <img src="images/l46620240123104736.jpeg" alt="Image 6" />
        </div>
      </div>
      <button id="prev">Previous</button>
      <button id="next">Next</button>
    </div>

    <script>
      $(document).ready(function () {
        let currentIndex = 0;
        const slides = $(".slide");
        const totalSlides = slides.length;

        function showSlide(index) {
          slides.removeClass("active");
          slides.eq(index).addClass("active");
          $(".slides").css("transform", `translateX(-${index * 100}%)`);
        }

        $("#next").click(function () {
          currentIndex = (currentIndex + 1) % totalSlides;
          showSlide(currentIndex);
        });

        $("#prev").click(function () {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          showSlide(currentIndex);
        });
      });
    </script>
  </body>
</html>
```


### question4.event bubbling tickling example

## ans
### event bubbling means if i clicked on child then parent is clicked and body ,html also clicked
### if click on subchild then child also clicked and parent clicked then body clicked,then html clicked


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
