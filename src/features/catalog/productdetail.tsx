import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../app/API/agent";
import NotFound from "../../app/Error/NotFound";
import Lodder from "../../app/layout/Lodder";
import { Product } from "../../app/models/product";

export default function ProductDetail() {
    const { id } = useParams<{id: string}>();
    const [product, setProduct] = useState<Product | null>(null);
    const[loadding, setloadding] = useState(true);
    
    useEffect(() => {     
            agent.Catalog.details(parseInt(id!))
            .then(response => setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setloadding(false));
       
    }, [id]);

    if (loadding) return <Lodder message="Loading Product..."/>
    if (product == null) return <NotFound/>

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
                </Grid>

                <Grid item xs={6}>
                    <Typography variant='h3'>{product.name}</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography color='secondary' variant='h4'>৳{product.price}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell>{product.type}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>


                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
        </>
    )
}