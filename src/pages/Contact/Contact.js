import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import "./contact.css";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
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
        display: "flex",
        marginLeft: "35%",
        paddingTop: "3%"
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
                            <h1 className={classes.blackColor}>Contact Me!</h1>    
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                label="First Name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                label="Last Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textStyle}
                                id="input-with-icon-textfield"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textStyle}
                                id="input-with-icon-textfield"
                                label="Telephone"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textStyle}
                                id="input-with-icon-textfield"
                                label="Message"
                            />
                        </Grid>
                        
                        <Button className={classes.button}>Submit</Button>
                    </Grid>
                </Paper>
            </form>
        </div>
    )
}

export default Contact