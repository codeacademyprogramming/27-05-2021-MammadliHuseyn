import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import ProductItem from './ProductItem';

function Products() {

    const products = useSelector(state => state.CoffeeReducer);

    return (
        <Container>
            <div className="row my-5">
                {products.map((prod, key) =>
                    <ProductItem
                        product={prod}
                        key={key} />
                )}
            </div>
        </Container>
    )
}

export default Products
