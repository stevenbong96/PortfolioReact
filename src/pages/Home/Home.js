import React from "react";
import "./home.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Home() {
    return (
        // <React.Fragment>
        //     <CssBaseline/>
        //     <Container>
        //         <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '75vh' , marginTop: "5%"}} />
        //     </Container>
        // </React.Fragment>
        <div className="homeStyle">
            <h1>Welcome to Steven Bong's Portfolio</h1>
        </div>
    )
}

export default Home