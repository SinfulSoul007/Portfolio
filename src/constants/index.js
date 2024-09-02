import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  git,
  otu,
  rhhs,
  psu,
  sss,
  spm,
  penn,
  wonderland,
  mackenziehealth,
  privcurity,
  google,
  whmis,
  portfolio,
  pglife,
  sortingvisualiser,
  aws,
  python,
  cplusplus,
  typescript,
  node_js,
  freecodecamp,
  sunnifyimage,
  knifethrowimage,
  pythonanalysis,
  password_generator,
  wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  metasploit,
  johntheripper,
  hydra,
  aircrackng,
  photoshop,
  premiere,
  cinema4d,
  blender,
  connectwisecert,
  awsdbcert,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  // {
  //   id: "extracurricular",
  //   title: "Certifications",
  // },
  {
    id: "skills",
    title: "Skills",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const education = [
  {
    title: "Computer Science (BSc)",
    company_name: "Pennsylvania State University, PA, USA",
    icon: penn,
    iconBg: "#fff",
    date: "2023 - Present",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Object-Oriented Programming, Software Design UML, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, Database Systems.",
      "GPA: 3.4/4.0",
    ],
  },
  {
    title: "High School",
    company_name: "Stepping Stone School, India",
    icon: sss,
    iconBg: "#fff",
    date: "2021-2023", 
    points: [
      "Percentage: 90%",
      ,
    ],
  },
  {
    title: "High School",
    company_name: "Sat Paul Mittal School, India",
    icon: spm,
    iconBg: "#fff",
    date: "2021-2023", 
    points: [
      "Percentage: 95%",
      ,
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "NodeJS",
    icon: node_js,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  {
    name: "Hydra",
    icon: hydra,
  },
  {
    name: "Aircrack-ng",
    icon: aircrackng,
  },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "E-Sports Attendant",
    company_name: "Pennsylvania State University",
    icon: psu,
    iconBg: "#fff",
    date: "May 2024 - Present",
    points: [
      "Diagnosed and resolved hardware/software issues across gaming consoles.",
      "Managed inventory of PC components, consoles, and peripherals.",
  ],
  },
  {
    title: "Residential Dining",
    company_name: "Pennsylvania State University",
    icon: penn,
    iconBg: "#fff",
    date: "Jan 2024 - May 2024",
    points: [
      "Serving food and beverages at various food service locations.",
      "Preparing and restocking in food areas .",
      "Working as cashier in markets and retail food areas.",
      "Work in EDGE Coffee Bars, including preparation of beverage and bakery food items (We Proudly Brew Starbucks locations).",
      "Cleaning dining and serving areas during and after meal service.",
    ],
  },
];

const extracurricular = [
  {
    title: "AWS Certified Database Specialty",
    type: "Most Advanced Professional Credential",
    icon: aws,
    iconBg: "#1294C8",
    date: "Issue Date: Aug 14, 2024 -> Expiry Date: Aug 16, 2027",
    points: ["Cloud-Native Architecture, Multi-Region Data Replication, Automated Tuning and Query Optimization, IAM, Clustering, Distributed Databases, SQL/NoSQL, Legacy Cloud Integration"],
    credential: awsdbcert,
  },
  {
    title: "Certified Enterprise Scripting Architect",
    type: "Automate | Connectwise University",
    icon: connectwise,
    iconBg: "#748C7B",
    date: "Jul 2024",
    points: ["RMM, MDM, Powershell, Scripting, Windows Server, Enterprise Architecture, Query Optimization"],
    credential: connectwisecert,
  },
  {
    title: "Google IT Automation With Python",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2023",
    points: [
      "Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM's, Version Control Tools, Automation.",
    ],
    credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  },
  {
    title: "WHMIS (Worker Health and Safety)",
    type: "Government Workforce Requirement",
    icon: whmis,
    iconBg: "#CCCFD8",
    date: "Sep 2020",
    points: ["Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention"],
  },
];

const projects = [
  {
    name: "Sunnify (Spotify Downloader)",
    description:
      "Sunnify is a Spotify downloader application that allows you to download entire playlists locally onto your Mac/Linux/Windows PC.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "webscraping",
        color: "green-text-gradient",
      },
      {
        name: "pyqt5",
        color: "pink-text-gradient",
      },
      {
        name: "(EDUCATIONAL PURPOSES ONLY)",
        color: "blue-text-gradient",
      },
    ],
    image: sunnifyimage,
    source_code_link: "https://github.com/sunnypatell/sunnify-spotify-downloader",
    live_project_link: "https://github.com/sunnypatell/sunnify-spotify-downloader",
  },
  {
    name: "KnifeThrow",
    description:
      "KnifeThrow is a Java Swing-based 2D mini-game, packed by maven with over 5000 lines of code. It includes a menu, game-over screens, sound effects, and custom sprites. Players unlock different knives with varied abilities in a dedicated knife shop. The game features improved collision systems, animations, and particle effects for an immersive experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
      {
        name: "arcadegame",
        color: "green-text-gradient",
      },
    ],
    image: knifethrowimage,
    source_code_link: "https://github.com/sunnypatell/KnifeThrow",
    live_project_link: "https://github.com/sunnypatell/KnifeThrow",
  },
  {
    name: "COVID-19 GTA Cases Data Analysis",
    description:
      "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
    ],
    image: pythonanalysis,
    source_code_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
    live_project_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  },
  {
    name: "Secure Password Generator",
    description:
      "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "sha-256",
        color: "green-text-gradient",
      },
      {
        name: "encryption/decryption",
        color: "pink-text-gradient",
      },
      {
        name: "data-algorithms",
        color: "blue-text-gradient",
      },
    ],
    image: password_generator,
    source_code_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
    live_project_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  },
  {
    name: "Word Search Generator",
    description:
      "Word Search Generator is a Java application that creates word search puzzles and allows users to solve them. The application includes a GUI interface that allows the user to input the size of the puzzle, the path to a word list, and the paths to the output files for the unsolved and solved puzzles. Java game that takes an input.txt of a list of words and exports a formatted/styled HTML of solved words and locations. Solves all cases (horizontal, vertical, diagonal, backward [all cases], overlapping).",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "puzzle-solver",
        color: "green-text-gradient",
      },
      {
        name: "data-structures/algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: wordsearch,
    source_code_link: "https://github.com/sunnypatell/Word-Search-Game",
    live_project_link: "https://github.com/sunnypatell/Word-Search-Game",
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials,
};
