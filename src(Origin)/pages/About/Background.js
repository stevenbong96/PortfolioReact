import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import profileImage from "../../images/profile.jpeg";
import "./about.css";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    paper: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
        marginTop: "3%",
        display: "flex",
        margin: "auto",
        width: "50%",
        height: "auto",
        paddingBottom: "2%",
    },
    title: {
        textAlign: "center",
    }
}));

function Background() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} justify="center" elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom className={classes.title}>
                            About Me
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            <img src={profileImage} alt="image" className="profilePic"/>
                        </Typography>
                        <Typography variant="h6" gutterBottom className="aboutText">
                            Hello Visitor! 
                            <br />
                            <br />
                            My name is Steven and I graduated from Texas A&M University with a Bachelor of Science in Mechanical Engineering. After that, I had a chance to work as a Civil Drafter in a small construction company in Poulsbo, WA for a year. At my time as a drafter, I designed commercial and residential pre-construction civil engineering structures using AutoCAD Civil 3D under the supervision of Professional Engineers. On top of that, I also designed storm, sewer, and water pipelines from/to development project. However, due to certain circumstances, I have decided to shift my career to become a full stack web developer. At first, I was thinking that this was a bad idea to achieve since I didn't have any experience in programming before. Then, I found a full-stack web developer coding bootcamp from University of Washington that prepares me to learn and experience tons of programming languages. At this bootcamp, I was taught by a professional instructor and gave me lots of insight on how to prepare myself to become a full-stack web developer. After I graduated from this bootcamp, I am dedicated to keep learning, adjust, and grow to achieve my success in the competitive industry.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Background