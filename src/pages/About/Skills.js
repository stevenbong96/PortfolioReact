import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import logoObj from "../../logo";

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
        height: "35vh",
        paddingBottom: "2%"
    },
    title: {
        textAlign: "center",
    },
    skillText: {
        textAlign: "center",
    },
    imageStyle: {
        height: "80px",
        width: "80px",
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
                    {logoObj.map(logoPic => {
                        // console.log(logoPic);
                        return (
                            <Grid item xs={3} className={classes.skillText}>
                                <Grid item xs={12}>
                                    <img src={logoPic.image} className={classes.imageStyle}/>
                                </Grid>
                                {logoPic.name}
                            </Grid>
                        )
                    })}

                </Grid>
            </Paper>
        </div>
    )
}

export default Skills