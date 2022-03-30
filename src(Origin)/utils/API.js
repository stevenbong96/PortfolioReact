import axios from "axios";

const BASEURL = "https://api.github.com/users/stevenbong96/repos";

export default {
  getGithub: function() {
    return axios.get(BASEURL);
  }
};