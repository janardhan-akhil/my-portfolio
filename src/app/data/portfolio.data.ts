/** Edit this file to personalize the entire portfolio. Asset paths are relative to public/. */
export const portfolio = {
  name: "Boya Janardhan",
  initials: "BJ",
  role: "Java Full Stack Developer",
  location: "Bangalore, India",
  email: "boyajanardhan.dev@gmail.com",
  availability: "Open to Java Full Stack & Backend roles",
  introduction:
    "I build secure, scalable applications that connect robust Spring Boot services with intuitive Angular interfaces.",
  photoUrl: "images/WhatsApp Image 2026-09-01 at 10.12.47 PM.jpeg", // Example: 'images/profile.jpg'. Place the file in public/images/.
  enablePhotoPicker: false, // Set false before public sharing if you do not want a local photo picker.
  social: {
    github: "https://github.com/janardhan-akhil/",
    linkedin: "https://www.linkedin.com/in/boya-janardhan-ba28a4374",
    leetcode: "https://leetcode.com/u/JanardhanBoya/",
  },
  resume: {
    fileUrl: "resume/Janardhan_Java_Full_Stack_Developer_4+Years.pdf",
    downloadName: "Boya_Janardhan_Resume.pdf",
    title: "The full picture of my professional journey.",
    description:
      "Explore my experience, technical skills and project contributions in one place.",
    highlights: [
      "Java & Spring Boot",
      "Angular & TypeScript",
      "Microservices",
      "E-commerce & Insurance",
    ],
  },
  about: [
    "I’m a Java Full Stack Developer based in Bangalore, working across backend services, web interfaces and the infrastructure that connects them.",
    "My experience spans fashion e-commerce and insurance claims. I care about clear APIs, dependable data flows and software that stays understandable as it grows.",
  ],
  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "6", label: "Enterprise domains" },
    { value: "Full", label: "Stack ownership" },
  ],
  skills: [
    {
      icon: "code",
      title: "Frontend",
      items: [
        "Angular",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Reactive Forms",
      ],
    },
    {
      icon: "server",
      title: "Backend",
      items: [
        "Java 8 / 11 / 17",
        "Spring Boot",
        "Microservices",
        "Spring MVC",
        "Spring Security",
        "REST APIs",
        "JPA / Hibernate",
      ],
    },
    {
      icon: "database",
      title: "Data & Messaging",
      items: [
        "MySQL",
        "MongoDB",
        "Redis",
        "Apache Kafka",
        "JPQL",
        "Data Modeling",
      ],
    },
    {
      icon: "zap",
      title: "Cloud & DevOps",
      items: [
        "AWS EC2 / S3 / RDS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Git / GitHub",
        "Maven",
      ],
    },
  ],
  experience: [
    {
      current: true,
      date: "Oct 2024 — Present",
      role: "Software Engineer",
      company: "Trysol Global Services",
      location: "Hyderabad",
      summary:
        "Contributing to the online fashion and apparel platform, with primary focus on Product and Order services.",
      bullets: [
        "Developed Spring Boot REST APIs for product and order workflows.",
        "Worked with Kafka events, Redis caching and MySQL/JPA data access.",
        "Supported Angular integrations, automated tests and cloud delivery workflows.",
      ],
      tags: ["Java", "Spring Boot", "Microservices", "Angular", "Kafka", "AWS"],
    },
    {
      current: false,
      date: "May 2023 — Oct 2024",
      role: "Engineer",
      company: "L&T Technology Services",
      location: "Hyderabad",
      summary:
        "Worked in the insurance domain on an enterprise Claims Processing System.",
      bullets: [
        "Contributed to backend workflows supporting the claims lifecycle.",
        "Worked with Java, Spring Boot, REST APIs and relational data.",
        "Collaborated within Agile delivery and code-review processes.",
      ],
      tags: ["Insurance", "Java", "Spring Boot", "REST APIs"],
    },
    {
      current: false,
      date: "Aug 2022 — May 2023",
      role: "Associate",
      company: "ZETA IT Innovations",
      location: "Bangalore",
      summary:
        "Worked as Associate.",
      bullets: [
        "Completed training in Java, SQL, Spring Boot, REST APIs, and Git.",
        "Contributed to internal development.",
        "Worked with Java, Spring Boot, REST APIs and relational data.",
      ],
      tags: ["Java", "Spring Boot", "REST APIs"],
    },
  ],
  projects: [
    {
      number: "01",
      label: "PROFESSIONAL · E-COMMERCE",
      title: "Online Fashion & Apparel Platform",
      tone: "cyan",
      description:
        "Product discovery and order-management capabilities for a fashion retail platform, built with Spring Boot microservices and Angular.",
      highlights: [
        "Product & Order APIs",
        "Kafka event workflows",
        "Redis product caching",
      ],
      stack: ["Java", "Spring Boot", "Angular", "Kafka", "Redis", "MySQL"],
    },
    {
      number: "02",
      label: "PROFESSIONAL · INSURANCE",
      title: "Claims Processing System",
      tone: "violet",
      description:
        "A structured insurance workflow covering policy validation, claim review, status history, documents and settlement processing.",
      highlights: [
        "JWT & role-based access",
        "Claim lifecycle rules",
        "Document & settlement flows",
      ],
      stack: ["Java", "Spring Boot", "Angular", "Spring Security", "MySQL"],
    },
    {
      number: "03",
      label: "BACKEND · PERSONAL PROJECT",
      title: "E-Commerce Microservices Backend",
      tone: "blue",
      description:
        "A production-style backend exploring order, payment, inventory and notification services with asynchronous communication.",
      highlights: [
        "Saga-oriented workflows",
        "API Gateway & discovery",
        "Fault-tolerant design",
      ],
      stack: ["Microservices", "Kafka", "Docker", "Kubernetes", "AWS"],
    },
    {
      number: "04",
      label: "HEALTHCARE · BACKEND PROJECT",
      title: "Medi-Connect",
      tone: "cyan",
      description:
        "A healthcare management backend supporting patient registration, doctor profiles and appointment scheduling through secure REST APIs.",
      highlights: [
        "Patient & doctor management",
        "Appointment scheduling",
        "Role-based API access",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Spring Security",
        "Spring Data JPA",
        "MySQL",
      ],
    },
    {
      number: "05",
      label: "TRAVEL & HOSPITALITY · BACKEND PROJECT",
      title: "Travel-Connect",
      tone: "violet",
      description:
        "A hotel-booking backend supporting hotel listings, room availability and reservation management with validation and transactional booking workflows.",
      highlights: [
        "Hotel & room management",
        "Availability & booking validation",
        "Reservation lifecycle management",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "Spring Data JPA",
        "MySQL",
      ],
    },
    {
      number: "06",
      label: "EMPLOYEE MANAGEMENT · BACKEND PROJECT",
      title: "Employee Management System",
      tone: "blue",
      description:
        "An employee management backend providing REST APIs for employee records, department assignments and searchable employee directories.",
      highlights: [
        "Employee & department APIs",
        "Search, pagination & sorting",
        "Validation & exception handling",
      ],
      stack: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "MySQL",
      ],
    },
  ],
  coding: {
    title: "One problem. A better approach.",
    description:
      "My space for practicing Java, data structures and algorithms. Explore my solutions and problem-solving journey on LeetCode.",
    topics: ["Java", "Arrays & Strings", "Hash maps", "SQL", "Problem solving"],
  },
} as const;

export const navigation = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "LeetCode", id: "leetcode" },
  { label: "Résumé", id: "resume" },
  { label: "Contact", id: "contact" },
] as const;
