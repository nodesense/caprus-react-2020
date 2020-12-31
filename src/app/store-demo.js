
// ---- demo purpose

console.log('STATE ', store.getState() ) // 0 [INITIAL_VALUE from reducer]

console.log('STATE type ', typeof store.getState() ) // number [INITIAL_VALUE from reducer]

// Subscriber, susbribing from store for the changes
// dispatch is sync, no async 
// for every dispatch, 
            // reduce called
            // store value updated
            // then the dispatch shall call all the listenser/subscribers witout any parameter
            // this mean, the susbcribers will not know what is changed, they are certain something may have been chaged

store.subscribe ( () => {
    console.log("SUBSCRIBER 1 notify called ");
})

let action = increment(5)

console.log('DISPATCING', action)
store.dispatch (action) ; // this will invoke reducer, the output is kept in store
console.log('DISPATCHED ACTION DONE ', action)

console.log('STATE ', store.getState() ) ; // 5


store.dispatch(decrement(1))

console.log('STATE ', store.getState() ) ; // 4

store.dispatch(reset())
console.log('STATE ', store.getState() ) ; // 0

