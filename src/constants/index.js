import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  ExpressJS,
  StyledComponents,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  WhatsAppClone,
  YoloCafe,
  emailsocial,
  githubsocial,
  linkedinsocial,
  twittersocial,
  // myphoto,
  ShopStyle,
  OnePlus,
  Netflix,
  forminfo,
  wedding,
  quote,
  movie,
  cryptoimage,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "MERN Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Express JS",
  //   icon: ExpressJS,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "StyledComponents",
  //   icon: StyledComponents,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "OnePlus Clone",
    description:
      "A One plus Clone with fully responsive website in these website i use HTML and styling for css and giving a amazing AOS animations on webiste",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "AOS",
        color: "pink-text-gradient",
      },
    ],

    image: OnePlus,
    source_code_link: {
      github: "https://github.com/abhishek36/oneplus",
      link: "https://abhishek36.github.io/oneplus/",
    },
  },
  {
    name: "Subh Vivah",
    description:
      "A subh vivah website made with html css and javascript in these i use some animations effect for wonderfull visual experience and beautiful color combinations",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
      {
        name: "AOS",
        color: "pink-text-gradient",
      },
    ],

    image: wedding,
    source_code_link: {
      github: "https://github.com/abhishek36/Wedding",
      link: "https://abhishek36.github.io/Wedding/",
    },
  },
  {
    name: "Zomato Clone",
    description:
      "A Zomato Clone with fully responsive website in these website i use HTML,CSS,JAVASCRIPT and swiper js for beautiful swiper effect.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
      {
        name: "Swiper js",
        color: "green-text-gradient",
      },
      {
        name: "Hamburger Menu",
        color: "green-text-gradient",
      },
    ],

    image: ShopStyle,
    source_code_link: {
      github: "https://github.com/abhishek36/Zomato",
      link: "https://abhishek36.github.io/Zomato/",
    },
  },
  {
    name: "User Data Form",
    description:
      "a user can fill the form given there and then he get a card in which all details are mentioned which he will given on the form",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
      {
        name: "neumorphism",
        color: "green-text-gradient",
      },
    ],
    image: forminfo,
    source_code_link: {
      github: "https://github.com/abhishek36/Form-information-",
      link: "https://abhishek36.github.io/Form-information-/",
    },
  },
  {
    name: "Quote App",
    description:
      "creating random quote generator app using HTML,CSS and JAVASCRIPT the data will be dynamic fetch from the quote api",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],

    image: quote,
    source_code_link: {
      github: "https://github.com/abhishek36/Quoteapp",
      link: "https://abhishek36.github.io/Quoteapp/",
    },
  },
  {
    name: "Movie search-App",
    description:
      "creating movie search app using Reactjs and styling for Tailwind CSS and i using rapid api for dynamic movies ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
    ],

    image: movie,
    source_code_link: {
      github: "https://github.com/abhishek36/movie-search",
      link: "https://reactmovie01.netlify.app/",
    },
  },
  {
    name: "Crypto Price Tracking",
    description:
      "price tracking crypto app users can see the market cap, price, available supply, and volume also",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
    ],

    image: cryptoimage,
    source_code_link: {
      github: "https://github.com/abhishek36/crypto",
      link: "https://crypto011.netlify.app/",
    },
  },
  {
    name: "Youtube with React",
    description:
      "Building a YouTube clone with ReactJS allows for a dynamic, user-friendly video sharing platform. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React-Router-Dom",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
    ],

    image: youtube,
    source_code_link: {
      github: "https://github.com/abhishek36/youtube",
      link: "https://reactwithyoutube.netlify.app/",
    },
  },
  {
    name: "Summer juice website",
    description:
      "Allowing users to interact through a chat box for dynamic conversations. Implemented user authentication through email/password and Google Sign-In. Real-time Chat.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
      // {
      //   name: "googleAuth",
      //   color: "pink-text-gradient",
      // },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "react-hot-toast",
        color: "pink-text-gradient",
      },
    ],

    image: WhatsAppClone,
    source_code_link: {
      github: "https://github.com/kartikgothwal/WhatsApp-Clone",
      link: "https://whatsapp-clone-97e3c.firebaseapp.com/",
    },
  },
];
const socials = [
  {
    name: "LinkedIn",
    icon: linkedinsocial,
    link: "https://www.linkedin.com/in/abhishek-sharma-web/",
  },
  {
    name: "Github",
    icon: githubsocial,
    link: "https://github.com/abhishek36",
  },
  {
    name: "email",
    icon: emailsocial,
    link: "https://mail.google.com/mail/u/0/#advanced-search/to=abhi365ddd%40gmail.com&query=deven&isrefinement=true&todisplay=abhishek+Sharma+ji?compose=new",
  },
];

export { services, socials, technologies, experiences, projects };
