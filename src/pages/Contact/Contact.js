import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    contactStyle: {
        margin: theme.spacing(1),
        border: "1px solid black",
        width: "45vw",
        display: "flex",
        margin: "auto",
        marginTop: "2%",
        flexGrow: 1,
        borderRadius: "5px"
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
    }
}));

function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h1>Contact Me!</h1>    
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