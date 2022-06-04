import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import { Animated } from "react-animated-css";
import { addOrder } from './../../../store/redux/Orders/OrderActions';
import { ORDER_STATUS } from './../../../store/redux/Orders/Constants';
import { useDispatch } from 'react-redux';

function OrderDialog({ open, handleClose, handleClickOpen, title, description, id }) {

    const [qty, setQty] = React.useState(1);
    const [submitSuccess, setSubmitSuccess] = React.useState(false);
    const [specialNote, setSpecialNote] = React.useState('');

    const dispatch = useDispatch();

    const submitOrder = () => {
        dispatch(addOrder(
            {
                id,
                qty: parseInt(qty),
                status: ORDER_STATUS.CREATED,
                note:specialNote
            }
        ));
        setSubmitSuccess(true);
        setTimeout(() => {
            handleClose();
        }, 800);
    }

    const qtyChangeHandler = value => {
        if (value > 0) {
            setQty(value);
        }
    }
    const speacialNoteChangeHandler = value => {
        setSpecialNote(value);
    }

    return (
        <Animated>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={"xs"}>
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="qty"
                        label="Quantity"
                        type="number"
                        onChange={e => qtyChangeHandler(e.target.value)}
                        value={qty}

                    />
                    <TextField
                        margin="dense"
                        id="specialNote"
                        label="Special Note"
                        type="text"
                        fullWidth
                        onChange={e => speacialNoteChangeHandler(e.target.value)}
                        value={specialNote}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitOrder} color="primary">

                        {submitSuccess
                            ?
                            <Animated animationIn="rotateIn"><CheckIcon /></Animated>
                            :
                            "Order"
                        }
                    </Button>
                </DialogActions>
            </Dialog>
        </Animated>
    )
}

export default OrderDialog
