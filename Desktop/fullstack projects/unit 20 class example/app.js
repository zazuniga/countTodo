//const helloItem = document.getElementById ('hello'); //one element only
//console.log(helloItem)
//const allListItems = document.getElementByTagName('li'); //collection of elements
//console.log(allListItems)
//const testOneTwo = document.getElementsByClassName('test'); //collecrtion of elements
//console.log(testOneTwo)

const helloItem = document.querySelector('#hello'); //one element only
const helloItem = document.querySelectorAll('h1'); //collection of elements
helloItem.textContent = 'Bye bye Alex' ; 

const myUl = document.querySelector('ul');
myUl.innerHTML = `<li>item 1</li><li>Item2</li><li>Item3</li>`; 
myUl.style.backgroundColor = 'red';
myUl.style.color = 'white';

//you can even do lists in js too//
body.innerHTML = `
<h1 id="hello">Hello World></h1>
    <p>Hello there</p>
    <p>Hello again</p>

    <ul class ="test">
      
    </ul>
    <ul class ="test">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
`

//create elements from scratch//
const body = document.querySelecto('body'); 
const myNewButton = document.createElement('button');
const myAnchorLink = document.createElement ('a'); //anchor to make sure the link works
myAnchorLink.textContent= 'Click Me';
myNewButton.textcontent = 'Click Me';
myNewButton.style.backgroundColor = 'blue';
myNewButton.style.color = 'white';
myNewButton.setAttribute('href', 'https://www.google.com') //link page over from html
body.appendChild(myNewButton);
body.appendChild(myAnchorLink);

const myHOne = document.querySelector('h1');

const myFirstLi = (myHONE.nextElementSibling.nextElementSibling.nextElementSiblin.children[0]) 
const mySecondLi = doncument.querySelectorAll('li')[1] 

//targeting specific lines of code (going Upstream or Downstream)
constH1upstream = mySecondLi.previouslementSibling.parentElementSibling.previouslementSibling.previouslementSibling.previouslementSibling.style.color = 'blue'
console.log(H1upstream); 

const myUl = document.querySelector('ul');
const shoppingList = ['bread', 'milk', 'cheese']

for (let i=0; i< shoppingList.length; i++){
    const currentItem = shoppinList[i]
    const newLi = document.createElement('li')
    newLi.textContent =currentItem
myUI.appendChild(newLI)
}


function test(){
    injectFreelancerIntoDom()
    calculateAVERAGE()
    stopInterval()
}

function stopInterval(){
    if array length is the same as the elements in the DOMException, stop the itereation
}
