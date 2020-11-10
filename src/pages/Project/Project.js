import React, { useEffect } from "react";
import API from "../../utils/API";

function Project(){
    // const [githubInfo, setGithubInfo] = useState({
    //     project: "",
    //     homework: "",
    //     portfolio: ""
    // })

    // useEffect(() => {
    //     loadGithubInfo();
    // }, [])

    // function loadGithubInfo () {
    //     API.getGithub()
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }

    return(
        <div>
            <h1>This is Project Page!</h1>
        </div>
    )
}

export default Project