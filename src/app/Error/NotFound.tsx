import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <Container component={Paper}>
            
            <Typography variant='h3' color='error' gutterBottom>Oops - We could not find what you are looking for</Typography>
            <Divider/>
        <Button fullWidth component={Link} to='/catalog'>Go to Shop</Button>
        </Container>
    )
}

