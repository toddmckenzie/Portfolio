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
    link: "https://expo.dev/@toddmckenzie/DorothysBunker",
    github_front: "https://github.com/SheltersBunkers/Frontend",
    github_back: "https://github.com/toddmckenzie/Maps-backend"
},
{
    id: 2,
    title: 'Cloud Stands',
    role: 'Full Stack Developer',
    color: '#478529',
    project_image: cloudstands,
    about: ['Cloudstands was a 8 week Lambda Labs project with a team of 6 other developers, a UX designer, and a Team Lead. The first 2 weeks consisted of planning our feature canvases and the tech stack we would use. The next 6 weeks were spent coding to make a usable product.','Cloudstands is a website for small market owners and vendors to connect with each other. We built a site where the owner could put in the amount of booths the market had, the cost of the booths, and the days the market was open. The vendor could then access the site to rent booths from any market they wish to do business. The vendor could also view the other booths that were scheduled to be there that day in order to avoid competing in the same market with similar businesses.  My role on Cloudstands was as a full stack developer, responsible for building the Frontend layout and infrastructure.'],
    link: 0,
    github_front: 'https://github.com/labs14-market-organizer/frontend',
    github_back: 'https://github.com/labs14-market-organizer/backend'
},
{
    id: 3,
    title: 'Didact',
    role: 'Team Lead',
    color: '#EBE8E1',
    project_image: didact,
    about: ['Didact was a Lambda Labs project that I managed as Team Lead. I had a great group of 5 developers and 1 UX designer on my team.','The Didact project create a website that collects multiple online learning courses to create one comprehensive learning pathways for users. The team was able to use Udemy’s API to collect course information using each courses’ url. Users could also create their own learning pathways or manually plug in course data from other MOOC sites.','As the Team Lead for this project, I lead daily standups to assess goals and workflow each morning. During these standups, the team would review our Trello board to align on tasks and methods. I also pair programmed with multiple developers to troubleshoot code issues, hooked up Mixpanel analytics, built the landing page, and provided assistance when needed.'],
    link: 0,
    github_front: 'https://github.com/Lambda-School-Labs/didact-fe',
    github_back: 'https://github.com/Lambda-School-Labs/didact-be'
},
{
    id: 4,
    title: 'Tweet Better',
    role: 'Frontend Developer',
    color: '#00ACEE',
    project_image: tweet,
    about: ['Tweet better was the first react project that I built, created during a one-week Build week following a 3-week React Unit at Lambda School. Myself and another developer collaborated to create the Front end interface in React and Redux, while the Backend was built by two Data Scientists.', 'The idea behind Tweet Better was to evaluate the content of a Tweet before you post to Twitter. The Backend rated the sentiment of the tweet and the Frontend displayed this sentiment rating clearly to the user.', 'The site is located at '],
    link: 'https://tweetbetterapp.netlify.com',
    github_front: 'https://github.com/tweet-better-build-week-2/Frontend',
    github_back: 0
}];
     

export default my_projects;