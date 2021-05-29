import React from 'react';
import Card from 'react-bootstrap/Card';

function ProductItem({ product }) {
    return (
        <div className="col-3 mb-3">
            <Card style={{ width: '17rem', height: '25rem' }}>
                <Card.Img variant="top" src={`assets/img/${product.img}`} width="100" height="200"/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.description.substring(0, 100)}...
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductItem
