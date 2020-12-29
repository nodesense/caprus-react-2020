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