import React from "react";
// import API from "../../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import "./project.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: "3%",
    },
    media: {
        height: 140,
    },
});

function Challenges(props){
    const classes = useStyles();

    return(
        <div>
            <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={props.image}
                            title="HW Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {/* {props.descrp} */}
                                Coming Soon!
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <Link href={props.github} target="_blank">
                                Github
                        </Link>
                        </Button>
                        <Button size="small" color="primary">
                            <Link href={props.deploy} target="_blank">
                                Deployed Website
                        </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}

export default Challenges