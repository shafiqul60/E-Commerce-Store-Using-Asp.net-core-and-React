import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props{
    message?: string;
}

export default function Lodder({message='Loading...'}: Props) {
    return(
        <Backdrop invisible={true} open={true}>
            <Box display='flex' justifyContent='center' alignContent='center' height='300'>
            <CircularProgress size={70} color='secondary'/>
            <Typography variant='h5' sx={{justifyContent:'center', position:'fixed', top:'60%'}}>{message}</Typography>
            </Box>
        </Backdrop>
    )
}