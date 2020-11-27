import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import profileImage from "../../images/profile.jpeg";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        // minHeight: "77vh"
    },
    paper: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
        marginTop: "3%",
        display: "flex",
        margin: "auto",
        width: "50%",
        height: "30vh",
        paddingBottom: "2%"
    },
    title: {
        textAlign: "center",
    },
    skillText: {
        textAlign: "center",
    }
}));

function Skills() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} justify="center" elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom className={classes.title}>
                            Technical Skills
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        HTML
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        CSS 
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        CSS/UI Framework
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        Javascript
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        Node
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        Express
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        MySQL
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        MongoDB
                    </Grid>
                    <Grid item xs={3} className={classes.skillText}>
                        React.js
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Skills