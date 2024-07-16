# question 1 what are the advantages of bootstrap?

## ans bootstrap first advantage is to make responsive design of website

## it have to show responsive in all media type like mobile phone,tablet,desktop,iphone etc

## second advantage is easy to use

### easy to use means it is not taking more time to run, cdn link is have to provide in head to run a particular html,bootstrap file

### it is don't matter if u are expert of computer system, then also user can install bootstrap in vs code

### third advantage is easy to use

### user must have to know the knowledge of html,css then user can use bootstrap

### bootstrap are easy to use for web development

### bootstrap is easy and quite simple for web development

### fourth advantage is browser compatibility

### with every user browser is varaying means it is must have browser compatibility

### it means it(website,code) is must have to show in every browser like e.x. mozilla,edge,internet explorer,chrome etc

### fifth advantage is bootstrap default layout

### bootstrap is a free front end framework for faster and easier web development

### the sixth advantage is community support

### the bootstrap community support has a larger active community of developers and designers and users who provides support,resources

### question2 what is bootstrap container and how it's work?

### ans. normal bootstrap container is taking 80%width in bootstrap for bootstrap code

### and container fluid is taking 100% width for bootstrap code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</head>
<body>
    <div class="container bg-primary">
        container
    </div>

    <div class="container-fluid bg-secondary mt-2">
        container
    </div>
</body>
</html>
```

### question 3.What are the default Bootstrap text settings?

### ans. bootstrap is using default font side which is 16px, and it's line height is 1.5

### The default font-family is "Helvetica Neue", Helvetica, Arial, sans-serif. In addition, all paragraph elements have margin-top: 0 and margin-bottom: 1rem (16px by default)

### question 4. What do you know about the Bootstrap Grid System?

### ans. bootstrap is grid is having row and columns to layout and align content

### bootstrap have 12 columns which are across the page

### Predefined classes like .row and .col-sm-4 are available for quickly making grid layouts

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6 col col-md-2">
          1 of 2
        </div>
        <div class="col-6 col col-xl-2">
          2 of 2
        </div>
      </div>
      <div class="row">
        <div class="col-4 col col-xs-2">
          1 of 3</div>
        <div class="col-4 col col-sm-2">
          2 of 3</div>
        <div class="col-4 col col-lg-2">
          3 of 3</div>
      </div>
    </div>
  </body>
</html>
```
### there are 4 tiers in bootstrap (xs-xtra small sm-small md-medium lg-large xl-xtra large)

## in bootstrap there are 12 columns inside one single page user can use 12 columns by it's own wish either 4,4,4 division or 6,6 division of columns

### Question 5.What is the difference between Bootstrap 4 and Bootstrap 5

### ans bootstrap 4  have 4 tiers(xs-xtra small sm-small md-medium lg-large xl-xtra large)

### bootstrap 4 have limited colors

### it has jquery and it's plugins

### bootstrap 4 is supported in ie-10 and ie-11(internet explorer)

### bootstrap 4 don't have it's svg icons we have to use font awesome for icons

### bootstrap 4 isn't enable right to left switching

### bootstrap 5

### it have 6 tiers(xs-xtra small sm-small md-medium lg-large xl-xtra large xxl-xtra xtra large)

### extra colors are added with the looks a card improve it's color palette,the various shades of color are available

### jquery is removed in bootstrap 5 and switched to vanilla js with some plugins

### bootstrap 5 isn't supported in ie-10 and ie-11

### bootstrap 5 have enable right to left switching

### bootstrap has it's own svg icons

### Question 6. What is a Button Group, and what is the class for a basic Button Group?

### ans button group is bootstrap class name it is used to create more than series of buttons in one group with the help of btn-group class without spaces in between buttons

### the basic class for button is btn-group

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-outline-primary">left</button>
      <button type="button" class="btn btn-outline-primary">middle</button>
      <button type="button" class="btn btn-outline-primary">right</button>
    </div>
  </body>
</html>
```

### Question 7. How can you use Bootstrap to make thumbnails?

### ans. Step 1: The first step is to include the Bootstrap and jQuery CDN into the head tag before having CSS's stylesheets

### Step 2: We need to create a div tag in our HTML body

### step 3 We will create three div sections for each image in this div tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  </head>
  <body>
    <div class="row">
      <div class="col-sm-6 md-3">
        <a href="#" class="thumbnail">
          <img
            src="images\ghost-rider-superhero-qt-3840x2160.jpg"
            style="height: 105px; width: 105px"
          />
        </a>
      </div>
      <div class="col-sm-6 md-3">
        <a href="#" class="thumbnail">
          <img
            src="images\ghost-rider-new-5p.jpg"
            style="height: 105px; width: 105px"
          />
        </a>
      </div>
      <div class="col-sm-6 md-3">
        <a href="#" class="thumbnail">
          <img
            src="images\ghost-rider-2020-art-2s.jpg"
            style="height: 105px; width: 105px"
          />
        </a>
      </div>
      <div class="col-sm-6 md-3">
        <a href="#" class="thumbnail">
          <img
          src="images\wallpapersden.com_ghost-rider-motorcycle-fire_1680x1030.jpg"
          style="height:105px;width:105px">
        </a>
      </div>
    </div>
  </body>
</html>
```

### Question 8. In Bootstrap 4, what is flexbox?

### ans. flexbox's main purpose is for align document data in browser/output

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container mt-2">
         <div class="d-inline-flex p-3 bg-primary text-white">
    <div class="p-2 bg-danger">Flex item 1</div>
    <div class="p-2 bg-success">Flex item 2</div>
    <div class="p-2 bg-secondary">Flex item 3</div>
  </div>
    </div>
</body>
</html>
```

### This box makes it easier to design flexible responsive layout structures without using float or positioning attributes

### Question 9.How can one create an alert in Bootstrap?

### simply have to create div for it and right class of alert and then alert color and then alert message and alert is done

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
</head>
<body>
    <div class="alert alert-success">
        this is a success alert for data send successful
    </div>
</body>
</html>
```

### Question 10.What is a bootstrap card and how would you create one?

### ans

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>

    <style>
        .card{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
            /* margin: 0 auto; */
            margin-top: 10px;
            border: 1px solid black;
        }
    </style>
  </head>
  <body>
    <div class="card" style="width: 18rem">
      <img src="images\Dosa.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Dhosa card</h5>
        <p class="card-text">
          please visit our chinese-punjabi resturant for delicious and fresh at
          evening 6.45pm, Sankalp The Restaurant. 4.2. 2.7k RatingsRace Course
          Road.
        </p>
        <a href="#" class="btn btn-primary">visit here</a>
      </div>
    </div>
  </body>
</html>
```
