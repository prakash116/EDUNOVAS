export const SITE = {
  name: "EDUNOVAS",
  tagline: "Build the Future with Robotics, AI & Next-Gen Technology Learning.",
  email: "edunovateam@gmail.com",
  phone: "+91 83687 08750",
  whatsapp: "https://wa.me/918368708750",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Robot Kits", href: "/kits" },
  { label: "Workshops", href: "/workshops" },
  { label: "Colleges", href: "/partnerships" },
  { label: "Placements", href: "/placements" },
];

export const STATS = [
  { value: "1,000+", label: "Students Trained" },
  { value: "95%", label: "Placement Success Rate" },
  { value: "3", label: "Partner Colleges" },
  { value: "15+", label: "Mentor & Advisor Network" },
];

export type Course = {
  title: string;
  category: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  accent: string;
};

export const COURSES: Course[] = [
  {
    title: "Robotics Engineering Bootcamp",
    category: "Robotics",
    description:
      "Design, build and program real robots — from chassis and motors to autonomous navigation.",
    duration: "12 Weeks",
    level: "Beginner",
    skills: ["Robot Design", "Motor Control", "Sensors", "Path Planning"],
    accent: "from-neon-cyan to-neon-blue",
  },
  {
    title: "Artificial Intelligence & ML",
    category: "Artificial Intelligence",
    description:
      "Master machine learning, neural networks and computer vision with hands-on AI projects.",
    duration: "16 Weeks",
    level: "Intermediate",
    skills: ["Python", "Neural Networks", "Computer Vision", "NLP"],
    accent: "from-neon-purple to-neon-pink",
  },
  {
    title: "Cloud Computing Professional",
    category: "Cloud Computing",
    description:
      "Deploy, scale and secure applications on modern cloud platforms with DevOps workflows.",
    duration: "10 Weeks",
    level: "Intermediate",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    accent: "from-neon-blue to-neon-violet",
  },
  {
    title: "IoT Systems Development",
    category: "IoT",
    description:
      "Connect the physical world — build smart devices with sensors, edge computing and cloud dashboards.",
    duration: "8 Weeks",
    level: "Beginner",
    skills: ["ESP32", "MQTT", "Edge Computing", "Dashboards"],
    accent: "from-emerald-400 to-neon-cyan",
  },
  {
    title: "Hardware Development Lab",
    category: "Hardware Development",
    description:
      "PCB design, prototyping and product engineering — take an idea from breadboard to board.",
    duration: "10 Weeks",
    level: "Intermediate",
    skills: ["PCB Design", "Soldering", "Prototyping", "Testing"],
    accent: "from-amber-400 to-neon-pink",
  },
  {
    title: "Industrial Automation",
    category: "Automation",
    description:
      "PLC programming, SCADA systems and smart factory automation used in modern industry.",
    duration: "12 Weeks",
    level: "Advanced",
    skills: ["PLC", "SCADA", "Pneumatics", "Industry 4.0"],
    accent: "from-neon-violet to-neon-blue",
  },
  {
    title: "Embedded Systems Mastery",
    category: "Embedded Systems",
    description:
      "Program microcontrollers at the register level and build production-grade firmware.",
    duration: "14 Weeks",
    level: "Advanced",
    skills: ["C/C++", "ARM Cortex", "RTOS", "Firmware"],
    accent: "from-neon-cyan to-neon-purple",
  },
  {
    title: "Future Technology Program",
    category: "Future Technology",
    description:
      "Explore drones, AR/VR, blockchain and generative AI in one immersive frontier-tech track.",
    duration: "6 Weeks",
    level: "Beginner",
    skills: ["Drones", "AR/VR", "GenAI", "Web3"],
    accent: "from-neon-pink to-neon-violet",
  },
];

export type Kit = {
  name: string;
  features: string[];
  price: string;
  tag?: string;
  accent: string;
};

export const KITS: Kit[] = [
  {
    name: "Robotics Starter Kit",
    features: ["4WD smart chassis", "Motor driver + controller", "Line & obstacle sensors", "Step-by-step projects"],
    price: "₹4,999",
    tag: "Best Seller",
    accent: "from-neon-cyan to-neon-blue",
  },
  {
    name: "AI Vision Kit",
    features: ["HD camera module", "Edge AI compute board", "Face & object detection", "Pre-trained model library"],
    price: "₹8,499",
    tag: "New",
    accent: "from-neon-purple to-neon-pink",
  },
  {
    name: "IoT Development Kit",
    features: ["ESP32 Wi-Fi + BLE board", "10+ smart sensors", "Cloud dashboard access", "Home automation projects"],
    price: "₹3,999",
    accent: "from-emerald-400 to-neon-cyan",
  },
  {
    name: "Sensor Explorer Kit",
    features: ["37-in-1 sensor modules", "Plug-and-play wiring", "Project guidebook", "Compatible with Arduino"],
    price: "₹2,499",
    accent: "from-amber-400 to-neon-pink",
  },
  {
    name: "Arduino / Raspberry Pi Kit",
    features: ["Arduino Uno + Raspberry Pi", "Breadboard & components", "GPIO experiments", "Python + C projects"],
    price: "₹6,999",
    accent: "from-neon-blue to-neon-violet",
  },
  {
    name: "Automation Kit",
    features: ["Relay & actuator modules", "Industrial-style controls", "Conveyor mini-model", "PLC-style programming"],
    price: "₹7,499",
    accent: "from-neon-violet to-neon-blue",
  },
  {
    name: "Advanced Robotics Kit",
    features: ["6-DOF robotic arm", "Inverse kinematics library", "Vision-guided pick & place", "ROS-ready firmware"],
    price: "₹14,999",
    tag: "Pro",
    accent: "from-neon-pink to-neon-purple",
  },
];

export type Organization = {
  name: string;
  relationship: string;
  logo?: string;
};

const LOGO_DIR = "/images/Company_Logo";

/** Logo files in public/images/Company_Logo, keyed by organisation. */
export const LOGOS = {
  aureviaTech: `${LOGO_DIR}/IMG-20260911-WA0013.jpg`,
  makeMyRestaurant: `${LOGO_DIR}/IMG-20260911-WA0014.jpg`,
  rc: `${LOGO_DIR}/IMG-20260911-WA0015.jpg`,
  microsoft: `${LOGO_DIR}/IMG-20260911-WA0016.jpg`,
  google: `${LOGO_DIR}/IMG-20260911-WA0017.jpg`,
  orange: `${LOGO_DIR}/IMG-20260911-WA0018.jpg`,
  xebia: `${LOGO_DIR}/IMG-20260911-WA0019.jpg`,
  hcl: `${LOGO_DIR}/IMG-20260911-WA0020.jpg`,
  eveAssociates: `${LOGO_DIR}/IMG-20260911-WA0021.jpg`,
  infosys: `${LOGO_DIR}/IMG-20260911-WA0022.jpg`,
  aiProff: `${LOGO_DIR}/IMG-20260911-WA0023.jpg`,
  krMangalam: `${LOGO_DIR}/IMG-20260911-WA0024.jpg`,
  ngf: `${LOGO_DIR}/IMG-20260911-WA0025.jpg`,
  rtGlobal: `${LOGO_DIR}/IMG-20260911-WA0027.jpg`,
  iitBhu: `${LOGO_DIR}/IMG-20260911-WA0028.jpg`,
  iitDelhi: `${LOGO_DIR}/IMG-20260911-WA0029.jpg`,
  axisBank: `${LOGO_DIR}/IMG-20260911-WA0030.jpg`,
  sharda: `${LOGO_DIR}/IMG-20260911-WA0032.jpg`,
  hdfcBank: `${LOGO_DIR}/IMG-20260911-WA0033.jpg`,
  makeManager: `${LOGO_DIR}/IMG-20260911-WA0034.jpg`,
  manatec: `${LOGO_DIR}/IMG-20260911-WA0035.jpg`,
  skyTech: `${LOGO_DIR}/IMG-20260911-WA0036.jpg`,
} as const;

export const COMPANY_MENTORS: Organization[] = [
  { name: "Xebia", relationship: "Company Mentor", logo: LOGOS.xebia },
  { name: "Microsoft", relationship: "Company Mentor", logo: LOGOS.microsoft },
  { name: "Google", relationship: "Company Mentor", logo: LOGOS.google },
  { name: "Orange", relationship: "Company Mentor", logo: LOGOS.orange },
  { name: "Infosys", relationship: "Company Mentor", logo: LOGOS.infosys },
  { name: "HCL", relationship: "Company Mentor", logo: LOGOS.hcl },
  { name: "HDFC Bank", relationship: "Company Mentor", logo: LOGOS.hdfcBank },
  { name: "Axis Bank", relationship: "Company Mentor", logo: LOGOS.axisBank },
  {
    name: "RT Global Infosolutions",
    relationship: "Company Mentor",
    logo: LOGOS.rtGlobal,
  },
];

export const MENTORS_AND_ADVISORS: Organization[] = [
  {
    name: "SEESAC",
    relationship: "Mentor & Advisor",
    logo: "/Partners/WhatsApp Image 2026-07-18 at 11.13.44 AM.jpeg",
  },
  { name: "AiProff", relationship: "Mentor & Advisor", logo: LOGOS.aiProff },
  {
    name: "Aurevia Technology",
    relationship: "Mentor & Advisor",
    logo: LOGOS.aureviaTech,
  },
  { name: "Elan Natural", relationship: "Mentor & Advisor" },
  { name: "SkyTech", relationship: "Mentor & Advisor", logo: LOGOS.skyTech },
  { name: "Manatec", relationship: "Mentor & Advisor", logo: LOGOS.manatec },
];

export const ALUMNI_NETWORK: Organization[] = [
  { name: "IIT Delhi", relationship: "Alumni Network", logo: LOGOS.iitDelhi },
  { name: "IIT BHU", relationship: "Alumni Network", logo: LOGOS.iitBhu },
  { name: "Guru Govindh", relationship: "Alumni Network" },
];

export const ACADEMIC_PARTNERS: Organization[] = [
  {
    name: "K.R. Mangalam University",
    relationship: "Partner College",
    logo: LOGOS.krMangalam,
  },
  { name: "NGF College", relationship: "Partner College", logo: LOGOS.ngf },
  {
    name: "Sharda University",
    relationship: "Partner College",
    logo: LOGOS.sharda,
  },
];

/** Every organisation logo, for the homepage marquee. */
export const LOGO_WALL: { name: string; src: string }[] = [
  { name: "Microsoft", src: LOGOS.microsoft },
  { name: "Google", src: LOGOS.google },
  { name: "Infosys", src: LOGOS.infosys },
  { name: "HCL", src: LOGOS.hcl },
  { name: "Xebia", src: LOGOS.xebia },
  { name: "Orange", src: LOGOS.orange },
  { name: "HDFC Bank", src: LOGOS.hdfcBank },
  { name: "Axis Bank", src: LOGOS.axisBank },
  { name: "IIT Delhi", src: LOGOS.iitDelhi },
  { name: "IIT BHU", src: LOGOS.iitBhu },
  { name: "Sharda University", src: LOGOS.sharda },
  { name: "K.R. Mangalam University", src: LOGOS.krMangalam },
  { name: "NGF College of Engineering & Technology", src: LOGOS.ngf },
  { name: "AiProff", src: LOGOS.aiProff },
  { name: "Aurevia Tech", src: LOGOS.aureviaTech },
  { name: "RT Global Infosolutions", src: LOGOS.rtGlobal },
  { name: "SkyTech Autoequip", src: LOGOS.skyTech },
  { name: "Manatec", src: LOGOS.manatec },
  { name: "EVE Associates", src: LOGOS.eveAssociates },
  { name: "MakeManager", src: LOGOS.makeManager },
  { name: "Make My Restaurant", src: LOGOS.makeMyRestaurant },
  { name: "RC", src: LOGOS.rc },
];

const CLASSROOM_DIR = "/images/real student";

export type ClassroomPhoto = { src: string; caption: string; alt: string };

/** Photos from live webinars, campus workshops and lab sessions. */
export const CLASSROOM_PHOTOS: ClassroomPhoto[] = [
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0008.jpg`,
    caption: "Generative AI webinar, K.R. Mangalam University",
    alt: "A packed auditorium of students following a live coding demo on their laptops during the Generative AI webinar at K.R. Mangalam University",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0019.jpg`,
    caption: "Prompt engineering session on stage",
    alt: "A mentor speaking at the podium in front of a slide titled Magic Prompt Formula at K.R. Mangalam University",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0020.jpg`,
    caption: "Students ask questions during live Q&A",
    alt: "A student standing among a seated audience to ask a question during a Q&A session",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0022.jpg`,
    caption: "Cohort photo after the AI-powered education talk",
    alt: "Group of students and mentors posing on stage at K.R. Mangalam University after the session",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0009.jpg`,
    caption: "Opening the Generative AI Tools hands-on workshop",
    alt: "A speaker at the podium introducing the Generative AI Tools hands-on workshop at K.R. Mangalam University",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0012.jpg`,
    caption: "Full house for the campus webinar",
    alt: "Rows of students with laptops filling a lecture hall at K.R. Mangalam University",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0021.jpg`,
    caption: "Arduino microcontroller workshop, Nirman Labs",
    alt: "A mentor explaining an Arduino microcontroller slide to students in a lab classroom",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0016.jpg`,
    caption: "Mentors work one-on-one in the room",
    alt: "A mentor leaning over to help a seated student with their laptop during a workshop",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0014.jpg`,
    caption: "Students settle in for the session",
    alt: "A seated audience of college students listening attentively in a seminar hall",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0018.jpg`,
    caption: "Hands-on electronics with real boards",
    alt: "Students watching a mentor present an Arduino microcontroller lesson in a lab",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0013.jpg`,
    caption: "Live demo of the OpenAI platform",
    alt: "A mentor with a microphone demonstrating the OpenAI platform on a large screen",
  },
  {
    src: `${CLASSROOM_DIR}/IMG-20260908-WA0010.jpg`,
    caption: "Welcoming our guest speaker",
    alt: "A guest speaker being welcomed with a bouquet on stage before the Generative AI Tools session",
  },
];

export const ORGANIZATION_GROUPS = [
  { title: "Company Mentors", organizations: COMPANY_MENTORS },
  { title: "Mentors & Advisors", organizations: MENTORS_AND_ADVISORS },
  { title: "Alumni Network", organizations: ALUMNI_NETWORK },
  { title: "Partner Colleges", organizations: ACADEMIC_PARTNERS },
];

export const PARTNERS = ORGANIZATION_GROUPS.flatMap(
  (group) => group.organizations
);

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What programs does Edunovas offer?",
    answer:
      "Edunovas offers hands-on programs in Robotics, Artificial Intelligence, Machine Learning, Cloud Computing, IoT, Automation, and Hardware Development. Our programs combine practical projects, real equipment, and guidance from experienced mentors.",
  },
  {
    question: "Who can join Edunovas programs?",
    answer:
      "Our programs are suitable for school students, college students, graduates, beginners, and working professionals interested in learning future-ready technology skills. Course eligibility may vary depending on the program level.",
  },
  {
    question: "Will I receive practical training and project experience?",
    answer:
      "Yes. Edunovas follows a project-based learning approach. Students work with real robotics kits, sensors, hardware, programming tools, AI models, and industry-relevant projects to develop practical skills.",
  },
  {
    question: "Does Edunovas provide certificates and placement support?",
    answer:
      "Yes. Students who successfully complete their program receive a course-completion certificate. Placement assistance, career guidance, internship opportunities, and interview preparation may also be provided depending on the selected program.",
  },
  {
    question: "What is the Edunovas refund policy?",
    answer:
      "You are eligible for a 100% full refund if you submit your refund request within 15 calendar days from the date of payment. No cancellation fee or deduction will be applied during this period. Refund requests must be submitted to edunovateam@gmail.com with the student's name, registered contact details, course or product name, payment date, and payment receipt. Requests submitted after the 15-day period will not be eligible for a refund.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo?: string;
};

const TESTIMONIAL_DIR = "/images/testimonials";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya Sharma",
    role: "Robotics Program Graduate → Automation Engineer",
    quote:
      "I built my first autonomous robot in week three. The hands-on kits and mentor support turned my curiosity into a career.",
    photo: `${TESTIMONIAL_DIR}/IMG-20260911-WA0010.jpg`,
  },
  {
    name: "Rohit Verma",
    role: "AI & ML Track → ML Intern, SkyTech",
    quote:
      "The project portfolio I built here got me shortlisted everywhere. Interview prep sessions made the difference.",
    photo: `${TESTIMONIAL_DIR}/IMG-20260911-WA0011 (1).jpg`,
  },
  {
    name: "Priya Nair",
    role: "IoT Program → Embedded Developer",
    quote:
      "Real hardware, real deadlines, real feedback. This is the practical training colleges never gave us.",
    photo: `${TESTIMONIAL_DIR}/IMG-20260911-WA0012.jpg`,
  },
  {
    name: "Aditya Kulkarni",
    role: "Cloud Computing → DevOps Engineer",
    quote:
      "From zero cloud knowledge to deploying production-grade pipelines in ten weeks. 100% worth it.",
    photo: `${TESTIMONIAL_DIR}/IMG-20260911-WA0037.jpg`,
  },
];
