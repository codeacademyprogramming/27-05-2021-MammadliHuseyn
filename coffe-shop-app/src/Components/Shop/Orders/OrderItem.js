import React from 'react';
import { ORDER_STATUS } from './../../../store/redux/Orders/Constants';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { editOrder, deleteOrder } from './../../../store/redux/Orders/OrderActions';
import { useDispatch } from 'react-redux';

function OrderItem({ orderItem, idx }) {

    const [status, setStatus] = React.useState(orderItem.status);
    const dispatch = useDispatch();

    const changeStatus = (value) => {
        setStatus(value);
        dispatch(editOrder({
            id: orderItem.id,
            qty: orderItem.qty,
            status: Object.values(ORDER_STATUS).find(st => st === value)
        }))
    }

    const deleteOrderItem = (id) => {
        const isConfirmed = window.confirm("are you sure to delete order?");
        if (isConfirmed) {
            dispatch(deleteOrder(id));
        }
    }

    return (
        <tr key={orderItem.id}>
            <td>{idx + 1}</td>
            <td><img src={`assets/img/${orderItem.img}`} alt={orderItem.title} width="50" /></td>
            <td>{orderItem.title}</td>
            <td>{orderItem.qty}</td>
            <td>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    color="inherit"
                    value={status}
                    onChange={e => changeStatus(e.target.value)}>
                    {Object.values(ORDER_STATUS).map(status =>
                        <MenuItem value={status} key={status}>{status}</MenuItem>
                    )}
                </Select>
                <Button
                    className="ml-2"
                    color="inherit"
                    disabled={status === ORDER_STATUS.IN_PROGRESS}
                    onClick={() => deleteOrderItem(orderItem.id)}>
                    <DeleteForeverIcon />
                </Button>
            </td>
        </tr>
    )
}

export default OrderItem
