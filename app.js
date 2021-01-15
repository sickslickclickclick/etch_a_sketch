// please note that step one was setting up a git repository
// --------------------------- STEP TWO ---------------------------------------

// this is not working or helping.. need to go back to drawing board and decompose problem
// 1. what is goal, what are steps
// 2. write steps in psuedo code as comments

// Sets important constants and variables

//psuedo code -- making 16x16 grid of divs using create element and append child

//add divs to container
// add sixteen across (using inline-block)
// repeat this process sixteen times

// select empty div and store it in a variable
const container = document.querySelector('#container');

// generate a row of divs
function generateRows(numRows){
    for(let i = 0; i<numRows; i++){
        let content = document.createElement('div');
        content.className = "cell"
        container.appendChild(content)   
    }
}
// alright now run that row function the column number of times
function generateColumns(numCol){
    for(let j = 0; j < numCol; j++){
        generateRows(numCol);
        let brake = document.createElement('br');
        container.appendChild(brake)
    }
}
//generate the grid
generateColumns(16)

// ----------------------------  STEP THREE --------------------------------------

// create function to change class
// need to know the object array we are in, and the point in that array we are at 
// this gets me every other turns black which... I don't understand
// I think the function is the problem -- so lets try to directly change the background color rather than changing the class
// last resort is doing a hover with a super high transition time

function changeClass(obj,num,newclass){
    obj[num].classList.add(newclass)
}

// get elements by class creates an array, so need to loop through it
//get elements by class 
let selector = document.getElementsByClassName('cell');
// check that we got all 256
console.log(selector.length)
//at this point no classes have been changed (good thats the point)
console.log(selector)
// loop through array of elements with that class name and add an 
// event listener that changes the class when the mouse enters the cell
function addEL(){
    for( i = 0; i < selector.length; i++){
        let numba = i
        selector[i].addEventListener("mouseenter", function(){
            changeClass(selector,numba,"entered");
        }
        )
    }
    
}
addEL()
// --------------------------- STEP FOUR -------------------------------------------

// next step: add a button that clears grid and sends users a popup
// asking them how big they'd like the grid to be  
// generate grid -- in the same space!
//psuedo code:
// add button
// for button add a click event listener
// when clicked, prompt user for an input for NxN
// then generate columns anew with that number

// function to remove the added class -- returning our screen back to blank cells
function removeClass(obj,num, classCut){
    obj[num].classList.remove(classCut)
}

// locate the button
let button = document.querySelector('#Reset')
// add a click event listner
button.addEventListener("click", function(){
    // loop through and remove the class that changed the color
    for( i = 0; i < selector.length; i++){
        let numba = i
        removeClass(selector,numba,"entered");
        }
    // ask for the new number of columns ( this doesn't work atm )    
    let newCol = prompt("How many columns you want fam")
    if(newCol > 100){
        alert('column number cannot exceed 100')
    }else{
    removeChildren()
    generateColumns(newCol)
    addEL()  
    }  
    }
)

// need a function to remove divs
// can use remove child
// select by ID the container div
// then remove all children

let containz = document.getElementById("container")
function removeChildren(){
    while(containz.firstChild){
        containz.removeChild(containz.firstChild)
    }
}
// works! but the new columns do not have event listeners; need to make this a function
// then call it 
// ayyyyyyyyyyy

