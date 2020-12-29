// useState hooks

import React, {useState, useEffect} from 'react';

// useEffect shall to implement life cycle methods in functional component

const FuncCounter = () => {
    // returns an array, array[0] shall have current state, 
    // array[1] will setter function to change state
    // destructing, counter  = array[0]
    // when setter called, it will re-redner V.dom



    // useEffect( ()=> {}) - componentDidMount - creation, 
                    //       - componentDidUpdate - update Stange, called many time


    // useEffect( ()=> {
    //     console.log('UseEffect called')
    //     return () => {
    //         // used for cleanup/unsubscribe
    //         console.log("useEffect cleanup code")
    //     }
    // })


     // useEffect( ()=> {}, []) - componentDidMount - creation, 
                                // shall not be called on update stage



    // we need componentDidMount, but not componentDidUpdate
    // making api call in didMount, not in didUpdate
    // useEffect( ()=> {
    //         console.log('UseEffect called')
    //         return () => {
    //              // used for cleanup/unsubscribe
    //              console.log("useEffect cleanup code")
    //         }
    // }, []) // [dependency list]

  
    const [flag, setFlag] = useState(true) ; // is the default value

    const [counter, setCounter] = useState(0) ; // is the default value
    
    // componentDidMount
    // componentDidupdate but olly if counter value changed
    useEffect( ()=> {
        console.log('UseEffect called')
        return () => {
                 // used for cleanup/unsubscribe
                 console.log("useEffect cleanup code")
            }
    }, [counter]) // [dependency list] whenever counter value got changed, then it will be called


    useEffect( () => {
        const handle = setInterval(() => {
            console.log("setCounter called through timer")
            setCounter(counter + 10)
        }, 5000)

        return () => {
            console.log("stop timer ")
            clearInterval(handle)
        }
    })

    console.log('FuncCounter Render', counter);
    return (
        <div>
            <h2>Func Counter</h2>
            <button onClick={ () => setFlag(!flag)}>Flag</button>

            <p>Counter {counter}</p>
            <button onClick={() => setCounter(counter + 1)}> +1</button>
        </div>
    )
}

export default FuncCounter;