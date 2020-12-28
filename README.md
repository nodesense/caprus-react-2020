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
  