/**
 * Site-wide content & data for Navkis College of Engineering, Hassan.
 * All content sourced from the original site (navkisce.com) — refined
 * and restructured for the new premium design.
 */

export const SITE = {
  name: "Navkis College of Engineering",
  shortName: "NCE Hassan",
  legalName: "Navkis College of Engineering, Hassan (NCEH)",
  tagline: "Contemporary Higher Learning",
  established: "2009–10",
  trust: "Yagachi Education and Research Trust",
  group: "Navkis Group of Institutions, Bengaluru",
  approvals: ["AICTE Approved", "VTU Affiliated", "UGC 2(f) Recognised"],
  campusAcres: 12,
  location: {
    line1: "Navkis College of Engineering",
    line2: "Hassan, Karnataka, India",
    full: "Navkis College of Engineering, Hassan – 573201, Karnataka, India",
    mapQuery: "Navkis College of Engineering Hassan",
  },
  contact: {
    primaryPhone: "+91 94814 50750",
    primaryPhoneRaw: "+919481450750",
    admissionsEmail: "admissions@navkisce.ac.in",
    generalEmail: "admissions@navkisce.com",
    altEmail: "admissions@navkisce.in",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;

export type RouteId =
  | "home"
  | "about"
  | "vision-mission"
  | "leadership"
  | "governing-council"
  | "accreditation"
  | "departments"
  | "department"
  | "admissions"
  | "scholarships"
  | "campus-life"
  | "facilities"
  | "clubs"
  | "gallery"
  | "placements"
  | "recruiters"
  | "training"
  | "testimonials"
  | "contact"
  | "apply"
  | "careers";

export interface Department {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  tagline: string;
  blurb: string;
  description: string;
  highlights: string[];
  outcomes: string[];
  labs: string[];
  careerRoles: string[];
  intake: number;
  duration: string;
  level: "UG" | "PG";
  established: string;
  color: string;
  icon: string;
  image: string;
}

export const DEPARTMENTS: Department[] = [
  {
    slug: "cse",
    code: "CSE",
    name: "Computer Science & Engineering",
    shortName: "CSE",
    tagline: "Code the future. Build what's next.",
    blurb:
      "The Department of Computer Science & Engineering drives the digital transformation — preparing engineers to solve complex problems across business, science and society.",
    description:
      "Established in 2009, the Department of Computer Science & Engineering at NCE Hassan is recognised for its rigorous curriculum, modern laboratories, and strong industry connect. Students gain deep expertise in algorithms, systems, software engineering, AI/ML, cloud computing and cybersecurity — mentored by faculty with academic and industry experience. The department emphasises project-based learning, hackathons, internships and innovation cells that turn classroom theory into shipped products.",
    highlights: [
      "Modern computing labs with high-end workstations",
      "Industry-aligned curriculum with AI/ML & cloud electives",
      "Active coding club, hackathons & innovation cell",
      "Strong placement track record with product & service companies",
    ],
    outcomes: [
      "Design and develop scalable software systems",
      "Apply algorithmic thinking to real-world problems",
      "Work effectively in agile, cross-functional teams",
      "Pursue higher studies or research in CS / AI",
    ],
    labs: [
      "Programming Lab",
      "Data Structures & Algorithms Lab",
      "Database Systems Lab",
      "Computer Networks Lab",
      "AI / ML Lab",
      "Cloud & DevOps Lab",
    ],
    careerRoles: [
      "Software Engineer",
      "Full-Stack Developer",
      "Data Engineer",
      "Cloud Architect",
      "ML Engineer",
      "DevOps Engineer",
    ],
    intake: 120,
    duration: "4 Years (8 Semesters)",
    level: "UG",
    established: "2009",
    color: "#2C80D3",
    icon: "code",
    image: "/images/departments/departments_01.jpg",
  },
  {
    slug: "ece",
    code: "ECE",
    name: "Electronics & Communication Engineering",
    shortName: "ECE",
    tagline: "Where signals meet intelligence.",
    blurb:
      "From semiconductor design to IoT and 5G — ECE bridges hardware and software to engineer the connected world.",
    description:
      "Established in 2009 with an initial intake of 60 students and enhanced to 90 in 2023, the Department of Electronics & Communication Engineering offers a strong B.E. program with infrastructure that meets AICTE and VTU norms. The department blends foundational circuit theory, digital systems and signal processing with modern specialisations in VLSI, embedded systems, IoT and wireless communications.",
    highlights: [
      "VLSI & Embedded Systems specialisation track",
      "Modern labs with oscilloscopes, FPGAs & SDRs",
      "Industry collaborations for live projects",
      "IoT and robotics innovation cells",
    ],
    outcomes: [
      "Design analog & digital circuits and systems",
      "Build embedded and IoT solutions end-to-end",
      "Analyse and process signals and images",
      "Pursue careers in semiconductor, telecom and IoT",
    ],
    labs: [
      "Analog Electronics Lab",
      "Digital Electronics Lab",
      "Microcontroller & Embedded Lab",
      "VLSI Design Lab",
      "Communication Systems Lab",
      "DSP / Image Processing Lab",
    ],
    careerRoles: [
      "Embedded Systems Engineer",
      "VLSI Design Engineer",
      "IoT Solutions Engineer",
      "RF Engineer",
      "Hardware Engineer",
      "Network Engineer",
    ],
    intake: 90,
    duration: "4 Years (8 Semesters)",
    level: "UG",
    established: "2009",
    color: "#1E88E5",
    icon: "cpu",
    image: "/images/departments/departments_03.jpg",
  },
  {
    slug: "aiml",
    code: "AI&ML",
    name: "Artificial Intelligence & Machine Learning",
    shortName: "AI & ML",
    tagline: "Teach machines. Transform industries.",
    blurb:
      "A future-ready program that turns engineers into AI practitioners — from neural networks to deployed models.",
    description:
      "The Department of Artificial Intelligence & Machine Learning prepares students for one of the most transformative fields of our time. The curriculum covers mathematical foundations, classical ML, deep learning, NLP, computer vision and MLOps — with extensive hands-on project work and real datasets. Students graduate ready to build, deploy and govern intelligent systems.",
    highlights: [
      "Deep learning, NLP & computer vision tracks",
      "GPU-accelerated compute infrastructure",
      "Capstone projects with real industry datasets",
      "Partnerships with AI startups and research labs",
    ],
    outcomes: [
      "Build and train production-grade ML models",
      "Deploy AI systems using modern MLOps",
      "Evaluate model fairness, safety and performance",
      "Pursue research in AI / ML / Generative AI",
    ],
    labs: [
      "AI Foundations Lab",
      "Deep Learning Lab (GPU)",
      "NLP & Speech Lab",
      "Computer Vision Lab",
      "Reinforcement Learning Lab",
      "MLOps & Deployment Lab",
    ],
    careerRoles: [
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Researcher",
      "NLP Engineer",
      "Computer Vision Engineer",
      "MLOps Engineer",
    ],
    intake: 60,
    duration: "4 Years (8 Semesters)",
    level: "UG",
    established: "2021",
    color: "#53C5FF",
    icon: "brain",
    image: "/images/departments/departments_00.jpg",
  },
  {
    slug: "aids",
    code: "AI&DS",
    name: "Artificial Intelligence & Data Science",
    shortName: "AI & DS",
    tagline: "From raw data to real decisions.",
    blurb:
      "Engineer the data pipelines, models and dashboards that power modern enterprises.",
    description:
      "The Department of Artificial Intelligence & Data Science trains engineers at the intersection of statistics, software engineering and AI. Students master the full data lifecycle — collection, cleaning, modelling, visualisation and deployment — with a strong focus on ethical AI, governance and reproducibility. Graduates are equipped to lead data-driven decision making across industries.",
    highlights: [
      "End-to-end data engineering & analytics track",
      "Big data, cloud warehouses & modern BI tools",
      "Capstone projects with industry mentors",
      "Strong emphasis on data ethics & governance",
    ],
    outcomes: [
      "Design scalable data pipelines and warehouses",
      "Build and operationalise predictive models",
      "Communicate insights through compelling dashboards",
      "Apply responsible AI principles in practice",
    ],
    labs: [
      "Data Engineering Lab",
      "Statistics & ML Lab",
      "Big Data Lab",
      "BI & Visualisation Lab",
      "Cloud Data Platform Lab",
      "Responsible AI Lab",
    ],
    careerRoles: [
      "Data Engineer",
      "Data Analyst",
      "Data Scientist",
      "Analytics Consultant",
      "BI Developer",
      "Data Platform Engineer",
    ],
    intake: 60,
    duration: "4 Years (8 Semesters)",
    level: "UG",
    established: "2021",
    color: "#2C80D3",
    icon: "database",
    image: "/images/departments/departments_06.jpg",
  },
  {
    slug: "civil",
    code: "CIVIL",
    name: "Civil Engineering",
    shortName: "Civil",
    tagline: "Engineer the world people live in.",
    blurb:
      "From smart infrastructure to sustainable design — Civil Engineering at NCE builds the foundations of modern society.",
    description:
      "The Department of Civil Engineering at NCE is led by highly experienced faculty and is enriched by technical talks, industry visits and hands-on lab work. The curriculum covers structural, geotechnical, transportation, environmental and water-resources engineering — with a strong emphasis on sustainable materials, BIM and smart-city technologies. Students graduate ready to design, build and maintain infrastructure that lasts.",
    highlights: [
      "Strong structural & geotechnical labs",
      "Industry talks and technical site visits",
      "BIM, sustainability & smart-city electives",
      "Capstone projects with real infrastructure briefs",
    ],
    outcomes: [
      "Design safe and sustainable structures",
      "Plan and execute infrastructure projects",
      "Apply modern BIM and analysis tools",
      "Pursue careers in construction, public works and consultancy",
    ],
    labs: [
      "Material Testing Lab",
      "Surveying Lab",
      "Geotechnical Engineering Lab",
      "Hydraulics & Fluid Mechanics Lab",
      "Structural Engineering Lab",
      "Environmental Engineering Lab",
    ],
    careerRoles: [
      "Structural Engineer",
      "Site Engineer",
      "Geotechnical Engineer",
      "Transportation Engineer",
      "BIM Coordinator",
      "Project Consultant",
    ],
    intake: 60,
    duration: "4 Years (8 Semesters)",
    level: "UG",
    established: "2009",
    color: "#FF9900",
    icon: "building",
    image: "/images/departments/departments_02.jpg",
  },
  {
    slug: "mech",
    code: "MECH",
    name: "Mechanical Engineering",
    shortName: "Mech",
    tagline: "Move the world. Power the future.",
    blurb:
      "Design, manufacture and maintain the machines and systems that drive industry.",
    description:
      "The Department of Mechanical Engineering combines classical mechanical sciences with modern manufacturing, robotics and thermal engineering. Students learn to design and analyse mechanical systems using CAD/CAE tools, work with advanced manufacturing processes including CNC and additive manufacturing, and explore energy systems, robotics and automation. The department maintains strong industry linkages for internships and placements.",
    highlights: [
      "CAD / CAM / CAE software and CNC lab",
      "Robotics, thermal and manufacturing labs",
      "Industry internships and live projects",
      "Strong SAE / robotics student chapters",
    ],
    outcomes: [
      "Design and analyse mechanical systems",
      "Apply modern manufacturing technologies",
      "Work with robotics and automation systems",
      "Pursue careers in manufacturing, automotive and energy",
    ],
    labs: [
      "Machine Shop & Manufacturing Lab",
      "Thermal Engineering Lab",
      "CAD / CAM Lab",
      "Robotics & Automation Lab",
      "Materials & Metallurgy Lab",
      "Fluid Mechanics & Machinery Lab",
    ],
    careerRoles: [
      "Design Engineer",
      "Manufacturing Engineer",
      "Robotics Engineer",
      "Thermal Engineer",
      "Maintenance Engineer",
      "Product Engineer",
    ],
    intake: 60,
    duration: "4 Years (8 Semesters)",
    level: "UG",
    established: "2009",
    color: "#1E88E5",
    icon: "cog",
    image: "/images/departments/departments_05.jpg",
  },
  {
    slug: "mca",
    code: "MCA",
    name: "Master of Computer Applications",
    shortName: "MCA",
    tagline: "Advanced computing for ambitious graduates.",
    blurb:
      "A postgraduate program that builds elite software professionals for the modern enterprise.",
    description:
      "The Master of Computer Applications (MCA) at NCE Hassan is a postgraduate program designed to produce highly skilled software professionals. The curriculum emphasises application development, software engineering, data management, cloud computing and emerging technologies — with strong industry exposure and project work. Graduates are prepared for roles in product engineering, consulting, data and platform engineering.",
    highlights: [
      "Modern application & cloud engineering focus",
      "Industry-mentored capstone projects",
      "Strong placement support",
      "Specialisations in AI / Cloud / Data",
    ],
    outcomes: [
      "Architect and ship production software",
      "Lead software engineering teams",
      "Apply AI and cloud platforms effectively",
      "Pursue senior engineering and consulting roles",
    ],
    labs: [
      "Advanced Programming Lab",
      "Cloud & Distributed Systems Lab",
      "Data Engineering Lab",
      "AI / ML Application Lab",
      "Capstone Project Studio",
    ],
    careerRoles: [
      "Senior Software Engineer",
      "Application Architect",
      "Cloud Engineer",
      "Data Engineer",
      "Technical Consultant",
      "Product Engineer",
    ],
    intake: 60,
    duration: "2 Years (4 Semesters)",
    level: "PG",
    established: "2011",
    color: "#2C80D3",
    icon: "graduation",
    image: "/images/departments/departments_04.jpg",
  },
];

export const SCIENCES = [
  {
    name: "Department of Mathematics",
    icon: "sigma",
    blurb:
      "Strong foundations in calculus, linear algebra, probability and discrete mathematics — the language of engineering and AI.",
  },
  {
    name: "Department of Physics",
    icon: "atom",
    blurb:
      "From quantum mechanics to semiconductor physics — bridging fundamental science and engineering application.",
  },
  {
    name: "Department of Chemistry",
    icon: "flask",
    blurb:
      "Materials, environmental and polymer chemistry underpinning modern engineering practice and sustainability.",
  },
  {
    name: "Department of Humanities",
    icon: "users",
    blurb:
      "Communication, professional ethics, economics and management — shaping well-rounded, employable engineers.",
  },
];

export interface Facility {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  highlights: string[];
  image: string;
  icon: string;
}

export const FACILITIES: Facility[] = [
  {
    slug: "library",
    name: "Library & Learning Resource Centre",
    blurb: "A digital-first library with vast collections, study spaces and online resources.",
    description:
      "The Central Library at NCE Hassan is a vibrant learning hub with a wide collection of textbooks, reference volumes, national and international journals, e-resources and digital repositories. Spacious reading halls, discussion rooms and high-speed internet access make it a preferred destination for serious study and research.",
    highlights: [
      "20,000+ volumes and growing",
      "Digital library with IEEE, Springer & DELNET access",
      "Quiet reading halls and discussion rooms",
      "E-resources and remote access for students",
    ],
    image: "/images/library/library_03.jpeg",
    icon: "book",
  },
  {
    slug: "hostel",
    name: "Hostel & Residential Life",
    blurb: "Safe, comfortable, well-managed hostels that feel like a home away from home.",
    description:
      "Separate hostels for boys and girls provide safe, comfortable accommodation with wardens, security, hygienic dining and recreation facilities. The residential experience is designed to support academic focus while building lifelong friendships and community.",
    highlights: [
      "Separate hostels for boys and girls",
      "24/7 security and warden support",
      "Hygienic mess serving nutritious meals",
      "Indoor games and recreation rooms",
    ],
    image: "/images/campus/campus_01.jpg",
    icon: "home",
  },
  {
    slug: "sports",
    name: "Sports & Physical Education",
    blurb: "Outdoor and indoor facilities that build fitness, teamwork and discipline.",
    description:
      "The Department of Physical Education promotes a strong sporting culture at NCE. Facilities include outdoor grounds for cricket, football, athletics, basketball and volleyball, along with indoor games. Students are encouraged to compete at college, university and state-level events.",
    highlights: [
      "Cricket, football, basketball & volleyball grounds",
      "Indoor games: table tennis, carrom, chess",
      "Annual sports meet and inter-collegiate events",
      "Qualified physical education faculty",
    ],
    image: "/images/campus/campus_03.jpg",
    icon: "trophy",
  },
  {
    slug: "canteen",
    name: "Canteen & Dining",
    blurb: "Hygienic, affordable and tasty meals that keep the campus energised.",
    description:
      "The campus canteen serves a variety of fresh, hygienic and affordable meals, snacks and beverages. With spacious seating and a friendly atmosphere, it is a popular meeting point for students and staff throughout the day.",
    highlights: [
      "Hygienic, freshly prepared meals",
      "Affordable menu for students",
      "Spacious dining area",
      "North & South Indian options",
    ],
    image: "/images/amenities/amenities_05.jpg",
    icon: "utensils",
  },
  {
    slug: "transportation",
    name: "Transportation",
    blurb: "Safe and reliable bus services connecting the campus to Hassan and nearby towns.",
    description:
      "A fleet of well-maintained college buses operates on multiple routes covering Hassan town and surrounding areas. Driven by experienced drivers and supported by attendants, the service ensures students and staff reach campus safely and on time.",
    highlights: [
      "Multiple routes across Hassan region",
      "Safe and well-maintained buses",
      "Experienced drivers and attendants",
      "Subsidised passes for students",
    ],
    image: "/images/campus/campus_02.jpg",
    icon: "bus",
  },
  {
    slug: "amenities",
    name: "Amenities & Wellbeing",
    blurb: "Health centre, ATMs, stationery, Wi-Fi and more — everything students need.",
    description:
      "The campus is equipped with a health centre staffed by qualified medical professionals, ATMs, stationery shops, high-speed Wi-Fi across campus, purified drinking water and clean restrooms — designed to make everyday campus life smooth and comfortable.",
    highlights: [
      "On-campus health centre with qualified staff",
      "ATM and stationery shop",
      "High-speed Wi-Fi across campus",
      "Purified drinking water and clean restrooms",
    ],
    image: "/images/amenities/amenities_02.jpg",
    icon: "heart-pulse",
  },
];

export interface Club {
  name: string;
  icon: string;
  blurb: string;
}

export const CLUBS: Club[] = [
  { name: "Cultural Club", icon: "palette", blurb: "Music, dance, drama and festivals — the creative heartbeat of campus life." },
  { name: "Technical Club", icon: "cpu", blurb: "Hackathons, build days and tech talks that turn ideas into working prototypes." },
  { name: "Sports Club", icon: "trophy", blurb: "Inter-collegiate tournaments, fitness drives and annual sports meet." },
  { name: "Literary Club", icon: "book-open", blurb: "Debates, quizzes, creative writing and the college magazine." },
  { name: "ECO Club", icon: "leaf", blurb: "Sustainability drives, tree plantation and green-campus initiatives." },
  { name: "NSS", icon: "users", blurb: "Community service, social outreach and leadership development." },
  { name: "Red Cross", icon: "heart", blurb: "Health camps, blood donation and emergency response awareness." },
  { name: "Professional Body Chapters", icon: "award", blurb: "IEEE, ISTE, CSI and more — connecting students to global professional networks." },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const STATS: Stat[] = [
  { value: 16, suffix: "+", label: "Years of Excellence", icon: "calendar" },
  { value: 12, suffix: "", label: "Acre Green Campus", icon: "trees" },
  { value: 8, suffix: "", label: "Academic Programs", icon: "graduation" },
  { value: 95, suffix: "%", label: "Placement Track Record", icon: "briefcase" },
];

export interface Recruiter {
  name: string;
  industry: string;
}

export const RECRUITERS: Recruiter[] = [
  { name: "Infosys", industry: "IT Services" },
  { name: "Wipro", industry: "IT Services" },
  { name: "TCS", industry: "IT Services" },
  { name: "Cognizant", industry: "IT Services" },
  { name: "Accenture", industry: "IT Services" },
  { name: "Capgemini", industry: "IT Services" },
  { name: "Tech Mahindra", industry: "IT Services" },
  { name: "HCL", industry: "IT Services" },
  { name: "L&T", industry: "Engineering" },
  { name: "Mindtree", industry: "IT Services" },
  { name: "Mphasis", industry: "IT Services" },
  { name: "Hexaware", industry: "IT Services" },
  { name: "Bosch", industry: "Engineering" },
  { name: "Siemens", industry: "Engineering" },
  { name: "Mu Sigma", industry: "Analytics" },
  { name: "ZS Associates", industry: "Analytics" },
  { name: "Deloitte", industry: "Consulting" },
  { name: "EY", industry: "Consulting" },
  { name: "Amazon", industry: "Product" },
  { name: "Flipkart", industry: "Product" },
];

export interface Testimonial {
  name: string;
  batch: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Anvitha R.",
    batch: "Class of 2023",
    role: "Software Engineer",
    company: "Leading IT Services Firm",
    quote:
      "Navkis gave me more than a degree — it gave me the confidence, the network and the hands-on skills to step into the tech industry with clarity. The faculty mentorship was exceptional.",
    image: "/images/testimonials/testimonials_00.jpeg",
  },
  {
    name: "Prajwal S.",
    batch: "Class of 2022",
    role: "Data Engineer",
    company: "Global Analytics Firm",
    quote:
      "From the labs to the hackathons, every day at NCE was a chance to build something real. The placement cell prepared me for every interview — and stood by me until I had an offer I was proud of.",
    image: "/images/testimonials/testimonials_04.jpg",
  },
  {
    name: "Namratha H.",
    batch: "Class of 2023",
    role: "Systems Engineer",
    company: "Top IT Major",
    quote:
      "The campus culture at Navkis strikes a rare balance — serious about academics but warm and inclusive. The clubs and events helped me discover strengths I did not know I had.",
    image: "/images/testimonials/testimonials_02.jpeg",
  },
  {
    name: "Khushi M.",
    batch: "Class of 2024",
    role: "Graduate Engineer Trainee",
    company: "Engineering Conglomerate",
    quote:
      "The Civil department's focus on real site visits and live projects made all the difference. I walked into my first job with confidence and a portfolio I could speak to.",
    image: "/images/testimonials/testimonials_01.jpeg",
  },
];

export interface Leader {
  name: string;
  role: string;
  message: string;
  highlights: string[];
}

export const LEADERS: Record<"chairman" | "principal", Leader> = {
  chairman: {
    name: "Sri. M. R. Seetharam",
    role: "Chairman, Navkis Group of Institutions",
    message:
      "Welcome to Navkis College of Engineering and the family of Navkis. Carrying the torch lit by my father, Late Sri. M.S. Ramaiah — one of the front-runners of quality education in India — Navkis College of Engineering, Hassan aims to continue that legacy. I believe education is the most powerful tool to shape a country's growth and its future. My vision for NCE is to become a renowned engineering college that nurtures agile, knowledgeable and socially responsible engineers.",
    highlights: [
      "Carrying forward the legacy of the M.S. Ramaiah educational family",
      "Vision to make NCE a renowned engineering college",
      "Focus on agile, knowledgeable and ethical engineers",
      "Strong industry outlook and value-based education",
    ],
  },
  principal: {
    name: "Dr. [Principal's Name]",
    role: "Principal, NCE Hassan",
    message:
      "Welcome to Navkis Engineering Institution — a place where knowledge, innovation and values come together to shape the engineers and leaders of tomorrow. Engineering is not merely about acquiring technical knowledge; it is about solving real-world problems through creativity and a commitment to excellence. Our curriculum is complemented by modern laboratories, industry collaborations, internships and project-based learning to ensure that our graduates are industry-ready and socially responsible. Holistic education extends beyond the classroom — through co-curricular, professional, entrepreneurship, sports and community programs.",
    highlights: [
      "Modern labs, industry collaborations and internships",
      "Project-based, outcome-driven learning",
      "Strong co-curricular and community engagement",
      "Faculty committed to mentoring every student",
    ],
  },
};

export interface NavItem {
  id: RouteId;
  label: string;
  children?: { id: RouteId; label: string; description?: string }[];
}

export const NAV: NavItem[] = [
  { id: "home", label: "Home" },
  {
    id: "about",
    label: "About",
    children: [
      { id: "about", label: "Overview", description: "Who we are — vision, history and values" },
      { id: "vision-mission", label: "Vision & Mission", description: "What drives us forward" },
      { id: "leadership", label: "Leadership", description: "Messages from the Chairman & Principal" },
      { id: "governing-council", label: "Governing Council", description: "Our governance structure" },
      { id: "accreditation", label: "Accreditation & Approvals", description: "AICTE, VTU, UGC, NBA" },
    ],
  },
  {
    id: "departments",
    label: "Academics",
    children: [
      { id: "departments", label: "All Departments", description: "UG & PG programs offered" },
      { id: "department", label: "CSE — Computer Science", description: "Code the future" },
      { id: "department", label: "ECE — Electronics & Comm.", description: "Where signals meet intelligence" },
      { id: "department", label: "AI & ML", description: "Teach machines, transform industries" },
      { id: "department", label: "AI & DS", description: "From raw data to real decisions" },
      { id: "department", label: "Civil Engineering", description: "Engineer the world people live in" },
      { id: "department", label: "Mechanical Engineering", description: "Move the world, power the future" },
      { id: "department", label: "MCA — Postgraduate", description: "Advanced computing for ambitious graduates" },
    ],
  },
  {
    id: "admissions",
    label: "Admissions",
    children: [
      { id: "admissions", label: "Admission Process", description: "Eligibility, steps & documents" },
      { id: "scholarships", label: "Scholarships", description: "Merit & means support" },
      { id: "apply", label: "Apply Now", description: "Start your application" },
    ],
  },
  {
    id: "campus-life",
    label: "Campus Life",
    children: [
      { id: "campus-life", label: "Campus Overview", description: "Life at Navkis" },
      { id: "facilities", label: "Facilities", description: "Library, labs, hostel & more" },
      { id: "clubs", label: "Clubs & Activities", description: "Where passions grow" },
      { id: "gallery", label: "Gallery", description: "Moments from our campus" },
    ],
  },
  {
    id: "placements",
    label: "Placements",
    children: [
      { id: "placements", label: "Placement Cell", description: "Training, records & recruiters" },
      { id: "recruiters", label: "Our Recruiters", description: "Companies that hire from us" },
      { id: "testimonials", label: "Student Voices", description: "What our graduates say" },
    ],
  },
  { id: "contact", label: "Contact" },
];

export const ACCREDITATIONS = [
  { code: "AICTE", name: "All India Council for Technical Education", desc: "Statutory approval for all technical programs" },
  { code: "VTU", name: "Visvesvaraya Technological University", desc: "Affiliation for all UG & PG engineering programs" },
  { code: "UGC", name: "University Grants Commission", desc: "Recognised under Section 2(f) of the UGC Act" },
  { code: "NBA", name: "National Board of Accreditation", desc: "Quality assurance for technical education" },
];

export const APPROVALS_LIST = [
  "AICTE Approvals (latest EoA available)",
  "VTU Affiliation Certificate",
  "NBA Accreditation (where applicable)",
  "UGC 2(f) Recognition",
  "Mandatory Disclosure (annually updated)",
  "Organizational Chart",
  "Statutory & Other Committees",
  "Collaborations & MoUs",
];

export const ADMISSION_STEPS = [
  {
    n: "01",
    title: "Explore Programs",
    desc: "Review the UG & PG programs we offer and shortlist the one that fits your ambition.",
  },
  {
    n: "02",
    title: "Check Eligibility",
    desc: "Ensure you meet the academic and entrance-exam requirements for your chosen program.",
  },
  {
    n: "03",
    title: "Apply Online",
    desc: "Fill the application form, upload documents and pay the application fee online.",
  },
  {
    n: "04",
    title: "Counselling & Admission",
    desc: "Attend counselling, complete document verification and confirm your seat.",
  },
  {
    n: "05",
    title: "Welcome to Navkis",
    desc: "Complete fee payment, orientation and onboarding — and begin your journey.",
  },
];

export const SCHOLARSHIPS = [
  {
    name: "Merit Scholarship",
    desc: "Up to 100% tuition fee waiver for top-ranking students in qualifying examinations.",
    icon: "award",
  },
  {
    name: "Means-cum-Merit Scholarship",
    desc: "Financial support for deserving students from economically weaker sections.",
    icon: "heart-handshake",
  },
  {
    name: "Sports & Cultural Scholarship",
    desc: "Recognition and support for outstanding athletes and cultural achievers.",
    icon: "trophy",
  },
  {
    name: "SC/ST/OBC Benefits",
    desc: "All applicable government scholarships and fee reimbursements facilitated.",
    icon: "users",
  },
  {
    name: "Girl Child Support",
    desc: "Special incentives and concessions to encourage women in engineering.",
    icon: "sparkles",
  },
  {
    name: "Sibling Concession",
    desc: "Tuition concession when two siblings are enrolled simultaneously.",
    icon: "users-round",
  },
];

export const FAQ = [
  {
    q: "Is Navkis College of Engineering approved by AICTE?",
    a: "Yes. NCE Hassan is approved by AICTE, affiliated to Visvesvaraya Technological University (VTU) Belagavi, and recognised under Section 2(f) of the UGC Act.",
  },
  {
    q: "When was the college established?",
    a: "The college was established in 2009-10 by the Yagachi Education and Research Trust, and has been under the patronage of the Navkis Group of Institutions, Bengaluru since 2019-20.",
  },
  {
    q: "What programs are offered at NCE Hassan?",
    a: "We offer 6 undergraduate B.E. programs (CSE, ECE, AI&ML, AI&DS, Civil, Mechanical) and one postgraduate MCA program, alongside foundational Sciences and Humanities departments.",
  },
  {
    q: "Where is the campus located?",
    a: "The campus is spread over 12 acres in a serene, picturesque location in Hassan, Karnataka — providing an ideal atmosphere for academic focus.",
  },
  {
    q: "Does the college provide placement support?",
    a: "Yes. We have a dedicated Training & Placement cell with a strong track record. Top recruiters from IT services, product, analytics, engineering and consulting visit our campus every year.",
  },
  {
    q: "Are hostels available for students?",
    a: "Yes. We have separate, well-managed hostels for boys and girls with 24/7 security, hygienic dining, and recreation facilities.",
  },
  {
    q: "How can I apply for admission?",
    a: "You can start your application online through the Admissions page. Our admissions team will guide you through eligibility, document verification and seat confirmation.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. We offer merit, means-cum-merit, sports, SC/ST/OBC, girl-child and sibling scholarships. Visit the Scholarships page for full details.",
  },
];

export const PLACEMENT_STATS = [
  { label: "Placement Track Record", value: "95", suffix: "%+" },
  { label: "Top Recruiters Onboarded", value: "20", suffix: "+" },
  { label: "Highest Package (LPA)", value: "12", suffix: " LPA" },
  { label: "Average Package (LPA)", value: "4.5", suffix: " LPA" },
];

export const TRAINING_PILLARS = [
  {
    icon: "code",
    title: "Technical Skills",
    desc: "Hands-on training in programming, data structures, web, cloud and domain-specific tools.",
  },
  {
    icon: "message-square",
    title: "Communication & Soft Skills",
    desc: "Structured communication, presentation and interpersonal skills training.",
  },
  {
    icon: "briefcase",
    title: "Aptitude & Reasoning",
    desc: "Quantitative, logical and verbal aptitude prep for placement tests.",
  },
  {
    icon: "target",
    title: "Interview Readiness",
    desc: "Mock interviews, group discussions and resume-building workshops.",
  },
  {
    icon: "rocket",
    title: "Career Guidance",
    desc: "One-on-one mentoring and a dedicated career guidance cell.",
  },
  {
    icon: "handshake",
    title: "Internship & Industry",
    desc: "Industry internships and live projects with hiring partners.",
  },
];
