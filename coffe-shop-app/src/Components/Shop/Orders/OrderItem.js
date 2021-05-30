import React from 'react';
import { ORDER_STATUS } from './../../../store/redux/Orders/Constants';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { editOrder, deleteOrder } from './../../../store/redux/Orders/OrderActions';
import { useDispatch } from 'react-redux';

function OrderItem({ orderItem, idx }) {

    const [status, setStatus] = React.useState(orderItem.status);
    const [note, setNote] = React.useState(orderItem.note);
    const [qty, setQty] = React.useState(orderItem.qty);
    const [isEditMode, setIsEditMode] = React.useState(false);
    const dispatch = useDispatch();

    const statusChangeHandler = value => {
        setStatus(value);
    }

    const noteChangeHandler = value => {
        setNote(value);
    }

    const qtyChangeHandler = value => {
        if (value > 0) {
            setQty(value);
        }
    }

    const deleteOrderItem = (id) => {
        const isConfirmed = window.confirm("are you sure to delete order?");
        if (isConfirmed) {
            dispatch(deleteOrder(id));
        }
    }

    const handleEditMode = () => {
        dispatch(editOrder({
            id: orderItem.id,
            qty: qty,
            note: note,
            status: Object.values(ORDER_STATUS).find(st => st === status),
        }));
        setIsEditMode(!isEditMode);
    }

    return (
        <tr key={orderItem.id}>
            <td>{idx + 1}</td>
            <td><img src={`assets/img/${orderItem.img}`} alt={orderItem.title} width="50" /></td>
            <td>{orderItem.title}</td>
            <td>
                {isEditMode && orderItem.status === ORDER_STATUS.CREATED
                    ?
                    <TextField
                        id="input-note"
                        label="Note"
                        value={note}
                        onChange={e => noteChangeHandler(e.target.value)} />
                    :
                    orderItem.note
                }
            </td>
            <td>
                {isEditMode && orderItem.status === ORDER_STATUS.CREATED
                    ?
                    <TextField
                        id="input-qty"
                        type="number"
                        label="Qty"
                        value={qty}
                        onChange={e => qtyChangeHandler(e.target.value)} />
                    :
                    orderItem.qty
                }
            </td>
            <td className="">
                {isEditMode
                    ?
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        color="inherit"
                        value={status}
                        onChange={e => statusChangeHandler(e.target.value)}>
                        {Object.values(ORDER_STATUS).map(status =>
                            <MenuItem value={status} key={status}>{status}</MenuItem>
                        )}
                    </Select>
                    :
                    <span>{orderItem.status}</span>
                }
                {orderItem.status !== ORDER_STATUS.DONE &&
                    <Button
                        onClick={handleEditMode}>
                        {isEditMode
                            ?
                            <CheckIcon />
                            :
                            <EditIcon />
                        }
                    </Button>
                }
                <Button
                    disabled={status === ORDER_STATUS.IN_PROGRESS}
                    onClick={() => deleteOrderItem(orderItem.id)}>
                    <DeleteForeverIcon />
                </Button>
            </td>
        </tr>
    )
}

export default OrderItem
