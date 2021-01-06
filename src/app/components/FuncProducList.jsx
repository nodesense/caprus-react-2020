import React from 'react';
import axios from 'axios';
import { getProducts } from '../state/services/product.service';

import {useState, useEffect} from 'react';

const FuncProductList = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        let cancel = undefined
        console.log('fetching data')
        setLoading(true)
        axios('http://localhost:7070/delayed/api/products', {
            cancelToken: new axios.CancelToken((c => cancel = c))
        })
        .then (response => {
            console.log('got response', response)
            return response.data
        } )
        .then (products => {
            console.log('got data ', products)
            setProducts(products)
            setLoading(false)
        })


        return () => {
            console.log("component will be destroyed")
            cancel && cancel();
        }
    }, [])


    return (
        <React.Fragment>
                <div>
                    <h2 > Func Product List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map (product => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.year}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
    );

}
 
export default FuncProductList;