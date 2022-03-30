import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./contact.css";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
        minHeight: "71vh",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: "3%",
        display: "flex",
        margin: "auto",
        width: "50%"
    },
    textStyle: {
        width: "50vw",
    },
    button: {
        display: "flex",
        margin: "auto"
    },
    blackColor: {
        color: "black",
        // display: "flex",
        // marginLeft: "35%",
        paddingTop: "2%"
    }
}));

function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form>
                <Paper className={classes.paper}>
                    <Grid container spacing={3} className="contactStyle">
                        <Grid item xs={12} >
                            <Typography variant="h4" gutterBottom className={classes.blackColor}>
                                My Contact Information
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant="body1" gutterBottom className={classes.blackColor}>
                                Email:{" "}
                                <a
                                    href={`mailto:bong.steven96@gmail.com`}
                                >
                                    bong.steven96@gmail.com
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant="body1" gutterBottom className={classes.blackColor}>
                                LinkedIn Profile: {" "}
                                <a
                                    href="https://www.linkedin.com/in/steven-bong-ab461213a/" target="_blank"
                                >
                                    Steven Bong
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant="body1" gutterBottom className={classes.blackColor}>
                                Github Profile: {" "}
                                <a
                                    href="https://github.com/stevenbong96" target="_blank"
                                >
                                    Steven Bong
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    )
}

export default Contact