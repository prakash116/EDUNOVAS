export const SITE = {
  name: "NexoraTech",
  tagline: "Build the Future with Robotics, AI & Next-Gen Technology Learning.",
  email: "hello@nexoratech.in",
  phone: "+91 98765 43210",
  whatsapp: "https://wa.me/919876543210",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Robot Kits", href: "/kits" },
  { label: "Membership", href: "/membership" },
  { label: "Workshops", href: "/workshops" },
  { label: "Colleges", href: "/partnerships" },
  { label: "Placements", href: "/placements" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "1,000+", label: "Students Trained" },
  { value: "95%", label: "Placement Success Rate" },
  { value: "3+", label: "College MOUs Signed" },
  { value: "5+", label: "Industry Partners" },
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

export type Plan = {
  name: string;
  price: string;
  period: string;
  audience: string;
  featured?: boolean;
  benefits: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Student Plan",
    price: "₹499",
    period: "/month",
    audience: "For individual learners starting out",
    benefits: [
      "Access to 3 foundation courses",
      "10% discount on robot kits",
      "Monthly live workshop access",
      "Community mentor support",
      "Course completion certificate",
    ],
  },
  {
    name: "Pro Learner Plan",
    price: "₹1,299",
    period: "/month",
    audience: "For serious builders & job seekers",
    featured: true,
    benefits: [
      "Unlimited access to all courses",
      "25% discount on all kits",
      "All workshops + bootcamps",
      "1-on-1 mentor support",
      "Guided capstone projects",
      "Verified certificates",
      "Placement support & referrals",
    ],
  },
  {
    name: "College Plan",
    price: "₹49,999",
    period: "/semester",
    audience: "For departments & student clubs",
    benefits: [
      "Bulk student course access",
      "On-campus workshop sessions",
      "Lab kit bundles at special pricing",
      "Faculty development support",
      "Project & hackathon guidance",
      "Co-branded certificates",
    ],
  },
  {
    name: "Institutional Plan",
    price: "Custom",
    period: "",
    audience: "For universities & training partners",
    benefits: [
      "Full curriculum licensing",
      "Robotics / AI lab setup",
      "Dedicated training team",
      "MOU-based collaboration",
      "Placement partnership network",
      "Innovation cell & incubation support",
    ],
  },
];

export const PARTNERS = [
  { name: "Makemanager", domain: "Project & Training Management" },
  { name: "SkyTech", domain: "Cloud & Infrastructure" },
  { name: "Manatec", domain: "Automotive & Industrial Tech" },
  { name: "TVS Associates", domain: "Engineering & Hiring" },
  { name: "Elan Naturals", domain: "Product Innovation" },
];

export const TESTIMONIALS = [
  {
    name: "Ananya Sharma",
    role: "Robotics Program Graduate → Automation Engineer",
    quote:
      "I built my first autonomous robot in week three. The hands-on kits and mentor support turned my curiosity into a career.",
  },
  {
    name: "Rohit Verma",
    role: "AI & ML Track → ML Intern, SkyTech",
    quote:
      "The project portfolio I built here got me shortlisted everywhere. Interview prep sessions made the difference.",
  },
  {
    name: "Priya Nair",
    role: "IoT Program → Embedded Developer",
    quote:
      "Real hardware, real deadlines, real feedback. This is the practical training colleges never gave us.",
  },
  {
    name: "Aditya Kulkarni",
    role: "Cloud Computing → DevOps Engineer",
    quote:
      "From zero cloud knowledge to deploying production-grade pipelines in ten weeks. 100% worth it.",
  },
];
