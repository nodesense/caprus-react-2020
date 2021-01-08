```
 npm dependecies 
   per project
 
   npm maintain cache
   %APPDATA%
    npm-cache directory

 -g --global depencies - command line tools not for project
```


```
npx create-react-app my-app

cd my-app

npm start

check http://localhost:3000 in browser


```



Node.js 14.x LTS
Visual Studio Code - IDE
Google Chrome
Internet - 


```
git clone https://github.com/nodesense/caprus-react-2020
cd caprus-react-2020
npm install
npm start


npm i redux react-redux redux-thunk
npm i axios

npm install react-helmet

npm install styled-components


```

New for React today? - a lot of them
new for ES6 - begineer
   

open command prompt 

node -v - JS runtime
npm -v - node package manager - 
npx -v - utility to create project based on templates

npx create-react-app  product-app 
cd product-app
npm start 

open your browser and check localhost:3000



Child to parent communication 
using function call

The parent component shall pass a function to the child component
child component will that function

Cart [remove/updateItem]
    Cart List 
        CartItem [button are here]



```

> item1 = {id: 1, qty: 1}
{ id: 1, qty: 1 }
> item2 = {id: 2, qty: 2}
{ id: 2, qty: 2 }
> items = [item1, item2]
[ { id: 1, qty: 1 }, { id: 2, qty: 2 } ]
> itemsClone = items.map (item => item.id == 1? {...item, qty: 2}: item)
[ { id: 1, qty: 2 }, { id: 2, qty: 2 } ]
> items
[ { id: 1, qty: 1 }, { id: 2, qty: 2 } ]
> item1
{ id: 1, qty: 1 }
> item2
{ id: 2, qty: 2 }
```


REACT CONTEXT

PROPS - pass to one level down

Cart [data]
  Cart List [data]
    Cart ITem [data]

----

PArent 1 [data, theme=dark, lang=de]
  Parent 2 [data, theme=dark, lang=de]
      parent 3 [data, theme=dark, lang=de]
            ..
            ..
              ..

                 child 20 [data, theme=dark, lang=de]

---

Globally available, very rarely updated
shouldComponentUpdate, not there for context update
Using context, you can pass data at any level


Theme
Languages
User Preference

---

Invoices
Billings


Context - to pass data to any level
        - use it for global settings

Context Consumer
  the component which consume context values
  by default, if no provider in Component hierarchy, 
    it will consume default value

  if provider present, then it will consume provider value not default


Context Provider
  the component which provides context values
  from the parent level, any consumer within that branch tree, can get the context values
  

--- 

OOP vs Functional

OOP

class Calcutor {
  // state
  int sum = 0;
  // impure function, given same, doesn't same output
  int add(int value) {
    // mutablity
    sum += value;
    return sum;
  }
}

calc = new Calculator()

calc.add(10); // 10
calc.add(10); // 20

calc.add(10)
calc.add(10)
calc.add(10)

calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10)
calc.add(10) // output?? 

Functional

// pure function
// given same input, it returns same output
function add(sum, value) {
  return sum + value;
}

add(0, 10) // 10
add(0, 10) // 10

add(0, 10)
add(0, 10)
add(0, 10)

add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10)
add(0, 10) // 10

-----

React - going towards functional style

React + Redux 
              -- 90-95% - functional
              -- 5% to 10% - class

Class
  State
  Life cycle
  this object reference
  member functions
  Ref

Functional 
  functon, input and return output
  no state
  no life cycles
  no member function/variables
  no ref
  ??


  how to acheive state, life cycles in functional components?
    React Hooks

      state in functional component?

      life cycle in functional component?
          componentDidMount
          componentDidUpdate - called on update cycle, after render func
          componentWillunmount
          

Reducer - pure function 

takes two args

first arg is state/pre-state,
second arg is action object {type: 'xyz'}

function reducer(state, action) {
  ....code
  return a new state
}

function counterReducer(state, action) {
  // don't make api/no async work, no timer, ..
  // sync
  switch(action.type){
    case 'increment': {
      // complex business logic
      // pure function, immutable
      return state + action.value
    }
    case 'decrement'{
      // pure function, immutable
      return state - 1
    }
    case 'reset'{
      // pure function, immutable
      return 0
    }
  }
}


-------------------------------

memoize = memorized/cache, not localstorage, index db

JS - single thread 
      any rich computation will block the UI rendering

      monitor - 60 frames per seconds

    // pure function
    // given same input, return same output
      function add(a, b) {
        // complex computation
        // SPACE, TIME complexity - 5 MB in RAM, 500 ms
        return a + b
      }

     add(10, 20), call the same 1 million time - 30
    
    // render is called again and again.... for every 100 ms
      render() {
        const memoizedAdd = memoizeOne(add);

        // const result = add(a=10, b=20) 
        const result = memoizedAdd(a=10, b=20)
        return <>....
      }


--- 
RECAP - Random

Can you mutate the props or not?
  should not mutate the props

Child to parent component communication?
   callback

   define callback in parent
   pass to child component
   child shall call callback

setState 
    patterns
      functional pattern (state, props) => {}

      object key/values {key: value}

      dependent setState/reactiveness/async

-----

  React hooks
     state implementation
     to achive class features in functional comp


Context
    pass data to nth level child
  
Ref 
  createRef
      to get ref to real dom

Redux
   implement store
   decouple state/app data from presentation 
   if data is swith component state, when component destroyed, state also destroyed
   

   few terminalogies
    What is FLUX?
      desing pattern to build complex front end application

    Redux [implementation lib] vs Flux [spec/architecture] - 

    Reducer
        state  - any data type
                    boolean or
                    number or 
                    object
                    array
                    string

        action
            type
            payload

    Action creator
      helpers to create action object
      just to minimize the amount of code to create action

      createItemAction(name, id, qty) {
        return {
            {
              {
                id: id,
                 { name: {}
                     price { qty ...}}
              }
            }
        }
      }
    action type
      unique name for type
        [module/scope name and activeVerb]

        '[counter reset]'
        '[auth reset]'

    middleware

    store
    dispatch
    getState
    
    combineReducers
      to use more than one reducer
      scalablility


    how many store is recommened for react application?
      1 but why? 


Redux is a sync library 
    action creator
    dispatcher
    createStore
    reducers 
      all are sync library

Architecture
  A Best place to make a call
      not inside the component


  Many solutions present
      redux-thunk - middleware -super simple
          Architecture
            enforce using the action creators [actions.js]
              to handle the async opeartions
                  timer, events, apis call

          source code may be 10 or 12 lines
      redux-saga - middleware - ES7
      redux-observable - middleware, using RXJS



React Components

Hierarchy
  parent
    children
    content children

-- render happens within component
-- render can happen with child component context children

How to render elsewere?
  Portal


-----

Typical
  open browser - need online
  yahoo.com
    request is to send the yahoo server
      receive the html
      browser convert html to dom 
        link tag
        script tag
        images 
        video..
        +
        XHR - Ajax call

PWA 
  Offline accesss/cache 
  Acceleration  - Speed



Offline Acces - 

Open browser
  yahoo.com
    check connection and return error connection error
  

---

APP

  React - v1.0 - bundles of JS fies, css.... - APPlication
    SPA - Single Page Application
      built the applicaiton using react
       all rendering, is all done in browsers
       no server rendering

       +
       For REST , we need server

--

App Bundle
Online -> Web server serves the file to browser
offline -> web server not there, error

how do we get app bundle to browser, in case if server not available, then end user still use the react.

API - you can do caching
API may not be possible

----

App Versioning
  Bundled application [resource,s scripts etc to run] - v1.0

  App - V1.1 - release today

      v.1.0 - customer - google chrome
      v.1.1 - firefox

  Solution: Keep the version up to the date with actual version


--
Push Notifications
  Server send events
  Accept events from server even the webpage is not opened

  --
Google Calendar - offline
  meeting at 5:00 pm,notification from local system


---
 Need magic, even my browser not opened, or I havent open website
 I need something to be running on my computer,
 which can alert me or notify me.

----
services - 24/7 as long as your system is running
application - UI, Click on icon, open, do... close
-----

We need something secure

Web Worker - having a separate thread in JavaScript

      Any webpage, it has dedicated single JS thread
      Web Workers are addtional threads for any sync work
        any operation without blocking the UI

      Scope is as long the site is open/page is open,
      web worker thread is killed as soon we close the web page
      Scope per web page

        tab 1 - yahoo.com , 1 instance of web worker
        tab 2 - yahoo.com,  new 1 instance of web worker

Service Worker

  Extension of Web Worker, a thread possible
  Scopped per website/domain/same origin, not based on number of tabs we opened the webpage
  Always running unlike web worker even when the page is closed

  since Service Worker keep running,
    it can receie notification
    sync with webserver when connection avaiable, to latest version of update 1.0, 1.1, 1.2.

  

index.html
  ww.js - separate thread

index.html                    ww.js 
 Thread 1                     Thread 2

 send a messsage to  thread 2
 receive message from thread 2

              vice versa


# Web Worker instruction

run as administrator

npm install http-server -g


cd example
  http-server -c-1 .

  check port 

  open browser with localhost:8080


SAME ORIGIN
  protocol + web domain + port should match, 
  
  the page can vary..

vs 

CROSS ORIGIN
  anyting except same origin, cross origin

Let example      http://yahoo.com

compare with below url

http://yahoo.com/somepage - ?? SAME ORIGIN
https://yahoo.com/somepage - ?? CROSS ORIGIN
http://www.yahoo.com/somepage - ? CROSS ORIGIN, domain diff www.yahoo.com and other one is yahoo.com
http://yahoo.com:8080/somepage - ? CROSS ORIGIN

CROSS ORIGIN
  restrictions on accessing, we cannot access
      1. localstorage, sessionStorage
      2. index db
      3. Service Workers
      4. Application cache

-----

Service worker allowed only on HTTPS strictly except localhost

http://localhost and all others should be https://domain.com


Service Worker
  Fetch Proxy
    once server worker installed, it acts like a proxy
      any requests, that we send, it goes via the proxy
        including the domain name on the address bar
         http://yahoo.com -> service worker fetch

Browser --> SW Proxy -------> Web Server
            sw yahoo.com          yahoo.com web server

index.html   check here
              if present, 
                return index.html
                from cache

              or forward to server
                                      server respond with index.html
                                  
                  cache index.html
              
                  return response to browser
  render index.html


React App/ SPA APP

 cache in the browser
 enable sw. enable fetch
 serve from local 
  

# Testing

Unit Testing
  Jasmine - BDD
  Test Runner - JEST**, AVA, Karma, Mocha

JEST 
  convention over configuration approach
  less configuration
  includes Jasmine by default
  add few more assertions/matchers for jasmine


  Jasmine is a library - useful to write test, but it don't run the test

  JEST is a tool, useful to run the test

---

test file name can be *.spec.js
  or *.test.js 

Keep test case in same folder - preferred**
or in seprate fodler


# Enzyme - abb

Make test easy with interactive, jquery like apis

renderer - similar to react renderer - snapshot testing
mount - deep mouting
          render the parent componetn
            render componetn component too
              render its child component
                ...
                  ...
shallow - shallow mounting
         render the parent component
          it shall not render child component

          to focus that component only test
            don't care what child compoent does..

          state changes

mount -   deep render, how components and properties are used
      -  complete rendering at all level

      If child component use some technology, that is not testable, test will face error


WEBPACK

  Cli
  Bundle JS files
    plugins
  Load JS files
    small run time
  
  Web pack - dev tools - only for development
    detect code changes
    automatically build
    refresh browser


  bundle production build 
    compress images 
    compress js fiels, css 

# 

brings out webpack raw scripts, config into source folder 'config', patch the package.json for the commands

this sections will be updated

  "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"


"dependencies": {.. 14 +++++ }

commit the code before ejecting, 

  npm run eject 

