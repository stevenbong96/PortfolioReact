import emplyImage from "./images/emplydirect.JPG";
import trackingBudgetImage from "./images/trackbudget.JPG";
import gymtrackImage from "./images/gymtrack.JPG";
import burgerImage from "./images/handlebars.jpg";
import emplyGenImage from "./images/employee.jpg";
import noteImage from "./images/notes.jpg";
import bookImage from "./images/googlebooks.JPG";
// import profileImage from "./images/emplydirect.JPG";

const homeworkObj = [
    {
        "id": 1,
        "name": "Google Books Search",
        "image": bookImage,
        "github": "https://github.com/stevenbong96/GoogleBookSearch",
        "deployed": "https://powerful-ridge-65955.herokuapp.com/",
        "description": "This app is using a full MERN application in a single repository and built using Google Books API with a full CRUD functionality for users when they search for books"
    },
    {
        "id": 2,
        "name": "Employee Directory",
        "image": emplyImage,
        "github": "https://github.com/stevenbong96/EmplyeDirect",
        "deployed": "https://damp-reaches-08183.herokuapp.com/",
        "description": "The purpose of this app is to utilize the react class component in using filter method to sort the employee based on their name using API call from back-end server routes"
    },
    {
        "id": 3,
        "name": "Tracking Budget",
        "image": trackingBudgetImage,
        "github": "https://github.com/stevenbong96/TrackingBudget",
        "deployed": "https://afternoon-journey-91660.herokuapp.com/",
        "description": "This is a tracking budget where it utilizes in-depth understanding of webpack to create a service-worker and manifest file to work in offline mode"
    },
    {
        "id": 4,
        "name": "Gym Track",
        "image": gymtrackImage,
        "github": "https://github.com/stevenbong96/GymTrack",
        "deployed": "https://github.com/stevenbong96/GymTrack",
        "description": "This app utilizes a basic MERN application using Handlebars as the front-end where users can add their own workout and have full CRUD functionality for their exercises"
    },
    {
        "id": 5,
        "name": "Burger Handlebars",
        "image": burgerImage,
        "github": "https://github.com/stevenbong96/WABHndlBars",
        "deployed": "https://evening-cove-09257.herokuapp.com/",
        "description": "The purpose of this app is to utilize the react class component in using filter method to sort the employee based on their name using API call from back-end server routes"
    },
    {
        "id": 6,
        "name": "Employee Generator",
        "image": emplyGenImage,
        "github": "https://github.com/stevenbong96/EmployeeGenerator",
        "deployed": "",
        "description": "The objective of this application is to track the status of employee in a company and employers can utilize this tool to add information into their database"
    },
    {
        "id": 7,
        "name": "Note Generator",
        "image": noteImage,
        "github": "https://github.com/stevenbong96/NoteGen",
        "deployed": "https://enigmatic-taiga-08167.herokuapp.com/",
        "description": "The objective of this application is to ease the user in taking notes for their own purposes. The note taker is a very friendly generator for users to take any notes and stored them in the storage even though after it refreshes."
    },
    {
        "id": 8,
        "name": "Profile Generator",
        "image": "http://via.placeholder.com/640x360",
        "github": "https://github.com/stevenbong96/ProfileGen",
        "deployed": "",
        "description": "The objective of this generator is to build a customized team profile. With the help of OOP, Constructor functions, jest, and inquirer, the users can add as many team members as they want by utilizing the question prompts made for them."
    }
]

export default homeworkObj