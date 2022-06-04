import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import { Animated } from 'react-animated-css';

function Orders() {

    const orders = useSelector(state => state.OrderReducer);
    const coffees = useSelector(state => state.CoffeeReducer);
    const [sortedByStatus, setSortedByStatus] = React.useState(orders);

    React.useEffect(() => {
        setSortedByStatus(orders);
    }, [orders])

    const getOrder = order => {
        const coffee = coffees.find(c => c.id === order.id);
        return ({
            id: order.id,
            title: coffee.title,
            qty: order.qty,
            img: coffee.img,
            note: order.note,
            status: order.status
        })
    }

    const sortByStatus = () => {
        const sortedList = orders.sort(function (a, b) {
            if (a.status < b.status) { return -1; }
            if (a.status > b.status) { return 1; }
            return 0;
        })
        setSortedByStatus(sortedList);
    }

    return (
        <Animated>
            <Container className="mt-5">
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Special note</th>
                            <th>Qty</th>
                            <th onClick={() => sortByStatus()} id="th-status">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedByStatus.map((order, idx) =>
                            <OrderItem
                                orderItem={getOrder(order)}
                                idx={idx}
                                key={order.id}
                            />
                        )}
                        {sortedByStatus.length < 1 &&
                            <tr><td colSpan="100%" className="text-center">Empty</td></tr>
                        }
                    </tbody>
                </Table>
            </Container >
        </Animated >
    )
}

export default Orders;
