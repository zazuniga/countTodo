console.log(1)
console.log(2)
connectToServerAndLoadData()
renderMainPage()


function connectToServerAndLoadData(){
    // make a request to a server
    // interjecting the data into the DOM
}

function renderMainPage(){
    // render the main page paints the dom
}

//ex 2
console.log(1)
setTimeout(() => {console.log('set Timeout')}, 0)
console.log(2)
console.log(3)

//ex 3
console.log("One")
setTimeout(() => {console.log('Two')},10)
console.log("Two");

//try..catch statement 
try {
    tryStatements
  } catch (exceptionVar) {
    catchStatements
  } finally {
    finallyStatements
  }
// handles errors ^

//APIs
    // stands for Application Programming Interface 
    // allows a client to interact with a service

//REST
    // Representational State Transfer
    // Architecture style that describes how an API should work 
    // Created as a guideline to manage communication on a complex network (aka the internet
  // A REST API is an API that follows the REST principles.
  //Endpoints should uniquely identify an action and a resource.
    // example endpoints
        // GET      /users      show all users
        // GET      /users/4    shows a single user
        // POST     /users      create a new user in the DB
        // PUT      /users      update user 4 in the DB
        // DELETE   /users      delete iser 4 from the DB


//CRUD operations
  // Create | Read | Update | Delete
    //These are the four basic operations a software application should be able to perform. 
