import db from '../img/db.png';
import cloudstands from '../img/cloudstands.png';
import didact from '../img/didact.png';
import tweet from '../img/tweet-better.png';

const my_projects = [
    {
    id: 1,
    title: "Dorothy's Bunker",
    role: "Full Stack Developer",
    color: '##3366CC',
    project_image: db,
    about: ["Dorothy's Bunker is a solo-built project using React native and Redux on the front end and Node.js with express framework on the back end.  To create this mobile app, I started by gathering storm locations from various sources such as county government sites and local new stations. Python was then used to fetch the latitude and longitude from the Google Geocoding API to build my seed data for the back end.", "The ultimate goal was so users could find a nearby storm shelter when severe weather is approaching. Users can also pull open a profile for their nearby shelter and comment on the status of the shelter.", "This mobile app was my first time working with React Native but it was a simple transition as it is so similar to ReactJs. You can access the app with the expo app at", "This mobile app was my first time working with React Native but it was a simple transition as it is so similar to ReactJs. You can access the app with the expo app at"],
    link: "https://expo.io/@toddmckenzie/dorothysbunker",
    github_front: "https://github.com/SheltersBunkers/Frontend",
    github_back: "https://github.com/toddmckenzie/Maps-backend"
},
{
    id: 0,
    title: 0,
    role:0,
    color: 0,
    project_image: 0,
    about: [],
    link: 0,
    github_front: 0,
    github_back: 0
},
{
    id: 0,
    title: 0,
    role:0,
    color: 0,
    project_image: 0,
    about: [],
    link: 0,
    github_front: 0,
    github_back: 0
},
{
    id: 0,
    title: 0,
    role:0,
    color: 0,
    project_image: 0,
    about: [],
    link: 0,
    github_front: 0,
    github_back: 0
}];
     

export default my_projects;