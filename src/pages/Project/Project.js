import React, { useState, useEffect } from "react";
// import API from "../../utils/API";
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import GroupProject from "./GroupProject";
import Challenges from "./Challenges";
import homeworkObj from "../../homeworkData";
import projectObj from "../../projectData";
import Typography from '@material-ui/core/Typography';
import "./project.css";

function Project() {
    // const [githubInfo, setGithubInfo] = useState([])

    // useEffect(() => {
    //     loadGithubInfo();
    // }, [])

    // function loadGithubInfo () {
    //     API.getGithub()
    //     .then(res => {
    //         setGithubInfo(res.data);
    //         // console.log(githubInfo)
    //         // return;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }

    return (
        <div className="projectPage">
            <Typography variant="h5" className="groupText">
                Projects
            </Typography>

            <Grid container direction="row" justify="space-around" alignItems="center" className="projectStyle">
                {projectObj.map(projecRender => {
                    return <GroupProject name={projecRender.name} image={projecRender.image} github={projecRender.github} deploy={projecRender.deployed} descrp={projecRender.description} />
                })}
            </Grid>

            <Typography variant="h5" className="groupText">
                Challenges
            </Typography>

            {/* <Grid container direction="row" justify="space-around" alignItems="center" className="challengeStyle">
                {homeworkObj.map(homeW => {
                    return <Challenges name={homeW.name} image={homeW.image} github={homeW.github} deploy={homeW.deployed} />
                })}
            </Grid> */}

        </div>
    )
}

export default Project