// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
//import django from "../assets/icons/skills-icon/django.svg";
import html from "../assets/icons/skills-icon/html.svg";
import cpp from "../assets/icons/skills-icon/cpp.svg";
import css from "../assets/icons/skills-icon/css.svg";

// import md from "../assets/icons/skills-icon/mongodb.svg";
// import next from "../assets/icons/skills-icon/nextjs.svg";
// import node from "../assets/icons/skills-icon/nodejs.svg";
//import py from "../assets/icons/skills-icon/python.svg";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
import php from "../assets/icons/skills-icon/php.svg";
//import ml from "../assets/icons/skills-icon/ml.png"

// projectImagess
import AasPassBazar from "../assets/images/projectImages/project10.png"
import insightify from "../assets/images/projectImages/project11.png"
import portfolioImage from "../assets/images/projectImages/project2.png"
import tesla from "../assets/images/projectImages/project3.png"

import algo from "../assets/images/projectImages/project5.png"

import ftc from "../assets/images/projectImages/project7.png"
import Venmi from "../assets/images/projectImages/project6.png"
import devSoftwareBridgeImage from "../assets/images/projectImages/project9.png"

export const Projects = {
    "AasPass Bazar": {
        "image": AasPassBazar,
        "title": "AasPass Bazar",
        "subTitle": "Hyperlocal marketplace for local vendors",
        "insights": {
            "desc": ` Aaspas Bazar is a hyperlocal marketplace that combines selling, marketing, and networking in one platform. Built with React and Vite, it features geolocation, vendor ratings, and category filters, offering a responsive, local-first user experience.
`,
            "category": "Healthcare, ML, Web Application",
            "techStack": [ js, react, tailwind],
            "reportLink": ""
        },
        "githubLink": "https://github.com/Vritika23/aas-pass-bazar.git"
     },
    "Redefined Gaming": {
        "image": insightify, 
        "title": "Redefined Gaming",
        "subTitle": "Gaming Website design",
        "insights": {
            "desc": `Redefined Gaming is a YouTube comment sentiment and toxicity analysis app built with React Native. It leverages AI and NLP to deliver instant feedback on audience emotion, public demands, and content suggestions. Ideal for creators aiming to understand and improve their engagement.`,
            "category": "AI, NLP, React Native, Mobile App",
            "techStack": [react, tailwind, js],
            "reportLink": ""
        },
        "githubLink": "https://github.com/Vritika23/gaming-website-sample.git"
    },


    "DevSoftwareBridge": {
  "image": devSoftwareBridgeImage, 
  "title": "Dev Software Bridge",
  "subTitle": "Connecting Developers and Tools with Seamless Integration",
  "insights": {
    "desc": `Dev Software Bridge is a comprehensive platform designed to connect developers with the right tools, making software development processes faster and more efficient. By providing access to various APIs, tools, and integrations, it simplifies project management and streamlines workflows. The platform focuses on enhancing productivity by offering intuitive interfaces and robust functionality.`,
    "category": "Software Development, Tool Integration, Web Application",
    "techStack": [ react,js, tailwind ],
    "reportLink": "https://github.com/Vritika23/dev-software-bridge.git"
  },
  "githubLink": "https://github.com/Vritika23/dev-software-bridge.git"
},

  "Portfolio Html": {
  "image": portfolioImage, 
  "title": "Portfolio-Html",
  "subTitle": "Personal Portfolio Website",
  "insights": {
    "desc": `This Portfolio is a modern and responsive web portfolio built using HTML, CSS, and JavaScript. It showcases projects, skills, and contact information in a clean layout with engaging transitions. The design emphasizes accessibility and performance, providing a seamless experience across all devices. Animated scroll effects and custom hover interactions add a touch of interactivity, while the modular codebase ensures maintainability.`,
    "category": "Personal Website, Frontend Development, UI/UX",
    "techStack": [ html, css, js ],
    
    },
    "githubLink": "https://github.com/Vritika23/portfolio-html.git"
},
        
    
    "algo": {
        "image": algo,
        "title": "Algorithm Analyzer",
        "subTitle": "CMD based tool",
        "insights": {
            "desc": `AlgoAnalyzer is an interactive platform designed to help users understand and visualize the functioning of various algorithms and data structures. The application provides step-by-step visual representations, making complex concepts easier to grasp.`,
            "category": "Education, Data Structures & Algorithms, Visualization Tool",
            "techStack": [cpp],
            "reportLink": ""
        },
        "githubLink": "https://github.com/Vritika23/algorithm-analyser"
    },
    "Venmi": {
        "image": Venmi,
        "title": "Venmi",
        "subTitle": "Ecommerce for Footware",
        "insights": {
            "desc": `VeNMi is a modern e-commerce platform for footwear, featuring a sleek and responsive design built with Tailwind CSS. It offers an intuitive user interface, seamless navigation, and visually engaging layouts to enhance the shopping experience`,
            "category": "E-commerce, Web Design, Responsive Web Application",
            "techStack": [html, css, js],
            "reportLink": ""
        },
        "githubLink": "https://github.com/Vritika23/footware-draft.git"
    },
   

    "ftc": {
        "image": ftc,
        "title": "Flip the Card",
        "subTitle": "Card Game on web",
        "insights": {
            "desc": `Flip the Card is an engaging and interactive card-matching game designed for fun and cognitive skill enhancement. The game challenges users to match pairs of cards through memory and concentration. With its visually appealing design and smooth functionality, Flip the Card offers an entertaining experience while encouraging mental agility.`,
            "category": "Game, Web Development, Interactive Application",
            "techStack": [html, css, js],
            "reportLink": ""
        },
        "githubLink": "https://github.com/Vritika23/card-flip-game.git"
    },
    "tesla": {
        "image": tesla,
        "title": "Tesla",
        "subTitle": "A Cloned website",
        "insights": {
            "desc": `The Tesla Web Project is a visually stunning and responsive landing page inspired by Tesla's innovative brand. The project showcases a sleek design with smooth animations and an intuitive layout, highlighting Tesla's vehicles and technology. Built with modern web development practices, it provides an immersive experience that captures the essence of a cutting-edge automotive brand.`,
            "category": "Web Design, Landing Page",
            "techStack": [php,html, css, js],
            "reportLink": ""
        },
        "githubLink": "https://github.com/Vritika23/tesla-clone.git"
    },
}
