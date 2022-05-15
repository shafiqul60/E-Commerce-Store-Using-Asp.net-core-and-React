import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";


interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLink = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]
const rightLink = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>


                <Box display='flex' alignItems='center'>
                    <Typography variant='h6' component={NavLink} to='/' sx={{ color: 'inherit', textDecoration: 'none' }}>
                        E-Commerce Store
                    </Typography>
                    <Switch checked={darkMode} onClick={handleThemeChange} />
                    <List sx={{ display: 'flex' }}>
                        {midLink.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{ color: 'inherit', typography: 'h7', '&:hover': { color: 'secondary.main' }, '&.active': { color: 'text.secondary' } }}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box display='flex' alignItems='center'>
                    <IconButton sx={{ color: 'inherit' }}>
                        <Badge badgeContent='4' color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLink.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{ color: 'inherit', typography: 'h7','&:hover': { color: 'secondary.main' }, '&.active': { color: 'text.secondary' }}}

                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>


            </Toolbar>
        </AppBar>
    )
}
