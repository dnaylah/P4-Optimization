#P4-Optimization
#Changes made
##main.js
1) in updatePositions, change querySelectorAll to getElementsByClassName
2) break the phase variable down into managable parts including making new variables animating, top, itemsLength, phaseArray. 
3) split the for loop into 2 parts for better rendering path efficiency. phaseArray populates the numbers used in the movement and then the 2nd for loop applies the transformations
4) event listener to call updatePositions on scroll
5) remove determineDx()
6) changeSliderLabel set as percentage

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

