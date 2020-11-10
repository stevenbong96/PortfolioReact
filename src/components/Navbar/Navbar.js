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
    title: {
        flexGrow: 1,
    },
}));

function Navbar() {
    const classes = useStyles();
    return (
        // <div>
        //     <Link to="/">Home</Link>
        //     <Link to="/about">About</Link>
        //     <Link to="/project">Project</Link>
        //     <Link to="/homework">Homework</Link>
        //     <Link to="/contact">Contact</Link>
        // </div>
        <div className={classes.root}>
            <AppBar position="static" color="grey">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/"><HomeIcon /></Link>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/about">About Me</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/homework">Homework</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/project">Project</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/contact">Contact</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar