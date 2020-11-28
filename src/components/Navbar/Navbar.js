import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Navbar() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static" color="grey">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/"><HomeIcon /></Link>
                    </IconButton>
                    <Typography variant="h6" className="navbarText">
                        <Link to="/about">About Me</Link>
                    </Typography>
                    <Typography variant="h6" className="navbarText">
                        <Link to="/project">Projects</Link>
                    </Typography>
                    {/* <Typography variant="h6" className="navbarText">
                        <Link to="/resume">Resume</Link>
                    </Typography> */}
                    <Typography variant="h6" className="navbarText">
                        <Link to="/contact">Contact</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar