import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

export default function ServerError() {

    const history = useNavigate();

    const {state} = useLocation() as any;

    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
            <Typography variant='h3' gutterBottom>Server Error</Typography>
                <Divider/>
                <Typography>{state.error.detail || 'Internal Server Error'}</Typography>
                </>
            ) : (
                <Typography variant='h3' gutterBottom>Server Error</Typography>
            )}
            <Button onClick={()=> history('/catalog')}>Go Back To Store</Button>
        </Container>
    )
}

