import React from 'react';

import axios from 'axios';
import { getProducts } from '../state/services/product.service';
import Heading from './Heading';
import {Helmet} from 'react-helmet';
import { ProductTitle } from './Titles';


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});

        this.cancel = axios.CancelToken.source();

        console.log('fetching data')
        axios('http://localhost:7070/delayed/api/products', {
            cancelToken: new axios.CancelToken((c => this.cancel = c))
        })
        .then (response => {
            console.log('got response', response)
            return response.data
        } )
        .then (products => {
            console.log('got data ', products)
            this.setState({products, loading: false})
        })

        // getProducts({cancelToken: this.cancel})
        // .then (products => {
        //     console.log("Products ", products)
        //     this.setState({products, loading: false})
        // })
    }

    componentWillUnmount() {
        this.cancel(); // cancel pending calls if any
    }

    render() {
 

        return (
            <React.Fragment>
                <Heading>
                    <h2>Product List</h2>
                </Heading>
                <Helmet>
                    <title>React App - Product page</title>
                </Helmet>
                <div>
                    <ProductTitle >Product List</ProductTitle>

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
                                this.state.products.map (product => (
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
        )
    }
}

export default ProductList;