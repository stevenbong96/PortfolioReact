import React from "react";
// import Iframe from "react-iframe"
import { makeStyles } from '@material-ui/core/styles';
import resumePDF from "../../Resume/WorkResume(FS).pdf";

const useStyles = makeStyles((theme) => ({
    resumeStyle: {
        width: "65vw",
        height: "80vh",
    }
}));

function Resume(){
    const classes = useStyles();

    return(
        <div className={classes.resumeStyle}>
            {/* <Iframe src={resumePDF}/> */}
            <img src={resumePDF} alt="resume"/>
        </div>
    )
}

export default Resume