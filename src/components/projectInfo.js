import skillsphere from "./../img/skillsphere.png";
import urlshotner from "./../img/url-shortner.png"
import Todo from "./../img/to-do-list.png";
import portfolio1 from "./../img/animated-portfolio.png";
const projectList = [
  {
    id: 1,
    name: "HiChat",
    text: "It is a real-time chat application designed to provide an intuitive and seamless communication experience. Built with the MERN stack, it leverages modern technologies to support real-time messaging, live updates, and personalized features.",
    description: (
      <>
        <strong>Key features of Skillsphere include:</strong>
        <li>
          User and Course Management: Comprehensive CRUD operations for users
          and courses.
        </li>
        <li>
          Enrollment Process: Streamlined course enrollment functionality,
          followed by immediate video access.
        </li>
        <li> Profile Management: Detailed user profile management.</li>{" "}
        <li>
          Admin Dashboard: A powerful dashboard for managing courses and users,
          providing administrators with full control over platform operations.
        </li>{" "}
      </>
    ),
    img: './images/hichat.png',
    period: "10 Oct 24 - 30 Nov 24",
    techStack: [
      "Socket.io",
      "React",
      "Redux-toolkit",  
      "Express",
      "NodeJs",
      "MongoDB",
      "Tailwind",
    ],
    // liveLink: "https://skillsphere-liard.vercel.app/",
    githubLink1: {
      text: "Code",
      href: "https://github.com/itskartik22/hichat",
    },
    // githubLink2: {
    //   text: "Backend",
    //   href: "https://github.com/itskartik22/skillsphere-api",
    // },
  },
  {
    id: 2,
    name: "SkillSphere",
    text: "I developed Skillsphere, a dynamic course-selling platform, utilizing the MERN (MongoDB, Express, React, Node.js) technology stack. The platform's frontend is efficiently hosted on Vercel, while the backend is powered by AWS EC2.",
    description: (
      <>
        <strong>Key features of Skillsphere include:</strong>
        <li>
          User and Course Management: Comprehensive CRUD operations for users
          and courses.
        </li>
        <li>
          Enrollment Process: Streamlined course enrollment functionality,
          followed by immediate video access.
        </li>
        <li> Profile Management: Detailed user profile management.</li>{" "}
        <li>
          Admin Dashboard: A powerful dashboard for managing courses and users,
          providing administrators with full control over platform operations.
        </li>{" "}
      </>
    ),
    img: skillsphere,
    period: "16 Dec 23 - 10 Jan 24",
    techStack: [
      "React",
      "Express",
      "NodeJs",
      "MongoDB",
      "Tailwind",
      "AWS",
      "Cloudinary",
    ],
    liveLink: "https://skillsphere-liard.vercel.app/",
    githubLink1: {
      text: "Frontend",
      href: "https://github.com/itskartik22/skillsphere",
    },
    githubLink2: {
      text: "Backend",
      href: "https://github.com/itskartik22/skillsphere-api",
    },
  },
  {
    id: 3,
    name: "Url Shortner",
    text: "Developed Nodejs server-side rendered application to shortens long Url which makes it concise, readable and easily shareable.",
    description: (
      <>
        <p>
          This Node.js application shortens long URLs using <code>shortid</code>{" "}
          for unique IDs, with MongoDB as the database and EJS for rendering the
          user interface.
        </p>
          <li>Converts lengthy URLs into compact, shareable links</li>
          <li>
            Utilizes <code>shortid</code> to generate unique,
            collision-resistant short IDs
          </li>
          <li>
            MongoDB efficiently stores original and shortened URLs for easy
            retrieval
          </li>
          <li>Frontend is built with EJS (Embedded JavaScript) templates</li>
          <li>
            Offers a dynamic and user-friendly interface for URL submission and
            management
          </li>
          <li>
            Suitable for both personal use and integration into larger projects,
            providing a streamlined solution for URL shortening needs
          </li>
      </>
    ),
    img: urlshotner,
    period: "Aug 24 - on going",
    techStack: ["Express", "Nodejs", "Mongodb", "ShortId", "EJs"],
    // liveLink: "https://react-todo-dashboard.netlify.app/",
    githubLink1: {
      text: "Code",
      href: "https://github.com/itskartik22/url-shortner",
    },
  },

  {
    id: 4,
    name: "React-To-Do",
    text: "A user-friendly task management web application designed to simplify your daily life. This project empowers you to organize your tasks with ease, featuring a clean and intuitive user interface. It incorporates essential CRUD (Create, Read, Update, Delete) operations, enabling you to manage your tasks effortlessly.",
    img: Todo,
    period: "13 Oct - 7 Nov",
    techStack: ["React", "Tailwind"],
    liveLink: "https://react-todo-dashboard.netlify.app/",
    githubLink1: {
      text: "Code",
      href: "https://github.com/itskartik22/to-do-list",
    },
  },
  {
    id: 5,
    name: "Clone Portfolio",
    text: "A seamlessly responsive, cloned portfolio, featuring comprehensive animations and scroll-triggered effects, expertly crafted using the advanced capabilities of GSAP (GreenSock Animation Platform).",
    img: portfolio1,
    period: "Jun 23 - Jul 23",
    techStack: ["Html", "Css", "Javascript", "GSAP"],
    liveLink: "https://itskartik22.github.io/clone-portolio/",
    githubLink: "",
  },
];

export default projectList;
