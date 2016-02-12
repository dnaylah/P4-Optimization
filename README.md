#P4-Optimization
#Changes made
##main.js
1) in updatePositions, change querySelectorAll to getElementsByClassName
2) break the phase variable down into managable parts including making new variables animating, top, itemsLength, phaseArray. 
3) split the for loop into 2 parts for better rendering path efficiency. phaseArray populates the numbers used in the movement and then the 2nd for loop applies the transformations
4) event listener to call updatePositions on scroll
5) remove determineDx()
6) changeSliderLabel set as percentage
7) change how element applies style.left
8) change how transformations are applied

##index.html
1) inline css on index.html
2) added media query to print css link
3) async load perfmatter.js
4) minify html and css

##styles.css
1) additions to .mover:
    a) backface-visibility: hidden;
    b) transform: translate3D(0, 0, 0);
    c) transform: translateZ(0);
    d) will-change: transform;
    
##file directory
1) moved files around to make gulp work

##built with automated gulp tasks
1) gulp-cssnano to minify css
2) gulp-htmlmin to minify html
3) gulp-uglify to minify js
4) gulp-imagemin to optimize images

-----------------------------------------

## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 