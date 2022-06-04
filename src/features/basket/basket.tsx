import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react"
import agent from "../../app/API/agent";
import Lodder from "../../app/layout/Lodder";
import { Basket } from "../../app/models/Basket";
import { IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

export default function BasketPage() {
    const [lodder, setlodder] = useState(false);

    const [basket, setBasket] = useState<Basket | null>(null);

    useEffect(() => {
        setlodder(true);
        agent.Basket.getBasket().then(basket => setBasket(basket)).catch(error => console.log(error)).finally(() => setlodder(false));
    }, []);

    if (lodder) return <Lodder message="Loading Basket Item ..." />

    if (!basket) return <Typography variant='h3'>Your baket is empty..</Typography>

    return (
        <>
            <Typography variant='h5'>Basket Items</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map( item => 
                            <TableRow
                               
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{item.name}</TableCell>
                                <TableCell align="right">৳ {(item.price).toFixed(2)}</TableCell>
                                <TableCell align="right">{item.quantity}</TableCell>
                                <TableCell align="right">৳ {(item.price * item.quantity).toFixed(2)}</TableCell>
                                <TableCell align="right"><IconButton color='error'><Delete/></IconButton></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}