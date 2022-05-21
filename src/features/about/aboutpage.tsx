import { Button, ButtonGroup, Container, Typography, Alert, AlertTitle, ListItem, ListItemText, List } from "@mui/material";
import { useState } from "react";
import agent from "../../app/API/agent";

export default function AboutPage() {
    const [validationError, setvalidationError] = useState<string[]>([]);

    function getValidationError() {
        agent.TestError.getValidationError()
        .then(() => console.log("Should not show this"))
        .catch(error => setvalidationError(error));
    }


    return (

        <Container>
            <Typography gutterBottom variant="h2">Error For Testing Purpose</Typography>
            <ButtonGroup>
                <Button variant='contained' onClick={() => agent.TestError.get400Error()}>Test 400 Error</Button>
                <Button variant='contained' onClick={() => agent.TestError.get401Error()}>Test 401 Error</Button>
                <Button variant='contained' onClick={() => agent.TestError.get404Error().catch(error => console.log(error))}>Test 404 Error</Button>
                <Button variant='contained' onClick={() => agent.TestError.get500Error()}>Test 500 Error</Button>
                <Button variant='contained' onClick={getValidationError}>Test Validation Error</Button>
            </ButtonGroup>

            {validationError.length > 0 &&
                <Alert severity='error'>
                    <AlertTitle>
                        Validation Error
                    </AlertTitle>
                    <List>
                        {validationError.map(error => (
                            <ListItem key={error}>
                                <ListItemText>{error}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            }

        </Container>

    )
}