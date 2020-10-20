import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
//this is an example of Jss - a more js way of doing css
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

//this is the skeleton
export const NavBarComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //we can programmatically build the menu items
    let menuItems = []
    //always have the login item
    menuItems.push(<MenuItem key={'clicker'} onClick={handleClose}><Link to='/'>Clicker</Link></MenuItem>,
        <MenuItem key={'personalize'} onClick={handleClose}><Link to='/personalization'>Personalize</Link></MenuItem>,
        <MenuItem key={'CNJ'} onClick={handleClose}><Link to='/ChuckNorris'>Chuck Norris Jokes</Link></MenuItem>,
        <MenuItem key={'pokedex'} onClick={handleClose}><Link to='/pokedex'>Pokedex</Link></MenuItem>,
        <MenuItem key={'test'} onClick={handleClose}><Link to='/TestingError'>Test Component</Link></MenuItem>
    )




    return (
        <nav>


            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        {menuItems}
                    </Menu>
                    <Typography variant="h3" className={classes.title}>
                        Te Amo Ambar 
                </Typography>
                <Typography variant="h6">
                    {props.cookies.toFixed(0)} Cookies
                </Typography>
                </Toolbar>
            </AppBar>
        </nav>
    )
}