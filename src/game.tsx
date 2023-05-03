import React from 'react';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction/BottomNavigationAction';
import makeStyles from '@mui/styled-engine';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddHomeIcon from '@mui/icons-material/AddHome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme:any):any => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
}));

export function Game() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    const handleChange = (event:any, newValue:any) => {
        setValue(newValue);
    };

    return (
        <div className={(classes as any).root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Domino Game
                    </Typography>
                    <div className={(classes as any).grow} />
                    <Button color="inherit">Start New Game</Button>
                </Toolbar>
            </AppBar>
            <div>
                {/* Add your main content here */}
            </div>
            <AppBar position="fixed" color="primary" className={(classes as any).appBar}>
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction label="Home" value="home" icon={<AddHomeIcon />} />
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </AppBar>
        </div>
    );
}

export default Game;
