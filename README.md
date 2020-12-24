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
