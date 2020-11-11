import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: "3%",
        display: "flex",
        margin: "auto",
        width: "50%",
        height: "30vh",
    },
}));

function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} justify="center" elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                           About Me
                        </Typography>
                        {/* <p>A full stack web developer with demonstrated experience as a Civil Drafter for a year and have background in Mechanical Engineering. A detail-oriented engineer who is effective to perform problem solving assignments within guidelines. Dedicated to keep learning, adjust, and grow to achieve success in the competitive industry</p> */}
                        <Typography variant="h5" gutterBottom>
                            A full stack web developer with demonstrated experience as a Civil Drafter for a year and have background in Mechanical Engineering. A detail-oriented engineer who is effective to perform problem solving assignments within guidelines. Dedicated to keep learning, adjust, and grow to achieve success in the competitive industry
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default About