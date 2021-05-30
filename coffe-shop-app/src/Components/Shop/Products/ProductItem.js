import React from 'react';
import Card from 'react-bootstrap/Card';
import { Animated } from "react-animated-css";
import OrderDialog from './OrderDialog';

function ProductItem({ product }) {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    return (
        <div className="col-3 mb-3">
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <Card onClick={handleClickOpen}>
                    <Card.Img variant="top" src={`assets/img/${product.img}`} width="100" height="200" />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description.substring(0, 100)}...
                    </Card.Text>
                        <OrderDialog
                            open={open}
                            handleClose={handleClose}
                            title={product.title}
                            description={product.description}
                            id={product.id}
                        />
                    </Card.Body>
                </Card>
            </Animated>
        </div>
    )
}

export default ProductItem
