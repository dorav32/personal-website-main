export type ProfileLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Dor Avraham",
  title: "Computer Science Graduate | Full-Stack Developer",
  location: "Israel",
  yearsExperience: "Fresh Graduate",
  tagline:
    "Passionate about problem-solving and algorithms, with a strong foundation in Python, Java, C, OOP, SQL, and Data Analysis. I combine creativity and analytical thinking to uncover opportunities with a production-oriented mindset.",
  bio: [
    "I'm a Computer Science graduate from Holon Institute of Technology (HIT) with a GPA of 90, looking for a Full-Stack Developer position.",
    "I have a strong foundation in JavaScript, Python, React, and Node.js, with hands-on experience building end-to-end web applications.",
    "I'm passionate about learning new technologies, solving complex problems, and contributing to impactful projects.",
  ],
  highlights: [
    "Full-Stack Development with React & Node.js",
    "Strong algorithmic problem-solving skills",
    "Python for Data Analysis & Machine Learning",
    "REST API design and implementation",
    "DevOps basics and CI/CD workflows",
    "Quick learner with production-oriented mindset",
  ],
  links: [
    { label: "Email", href: "mailto:hypsters@gmail.com" },
    { label: "GitHub", href: "https://github.com/dorav32" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dor-avraham-sd" },
  ] satisfies ProfileLink[],
  experience: [
    {
      company: "Private Fitness Business",
      title: "Private Gym Instructor & Business Owner",
      start: "2016",
      end: "2025",
      bullets: [
        "Managed and scaled a private fitness business and studio.",
        "Led and trained a team of instructors.",
        "Handled client acquisition, scheduling, and operations.",
        "Demonstrated ownership, discipline, and long-term consistency.",
      ],
    },
    {
      company: "IsraelBody",
      title: "Data Collection & Management Consultant + Sales",
      start: "2014",
      end: "2016",
      bullets: [
        "Improved data collection, organization, and accuracy by customizing Bitrix24 CRM.",
        "Enabled informed decision-making through better data management.",
        "Consulting about supplements and sales both in-store and over phone.",
      ],
    },
    {
      company: "HOT",
      title: "Customer Service Representative",
      start: "2012",
      end: "2014",
      bullets: [
        "Managed customer orders and reservations.",
        "Ensured efficient communication to enhance client satisfaction.",
        "Telemarketing and support.",
      ],
    },
    {
      company: "012",
      title: "Advanced Technical Support",
      start: "2010",
      end: "2012",
      bullets: [
        "Provided VoIP and BATAM advanced client support.",
        "Completed courses on networking and VoIP technologies.",
      ],
    },
  ] satisfies ExperienceItem[],
  skills: [
    {
      label: "Languages",
      items: ["JavaScript", "Python", "SQL", "HTML", "CSS", "C", "C++", "C#", "Java"],
    },
    {
      label: "Frameworks & Libraries",
      items: ["React", "Node.js", "Express", "Pandas", "NumPy", "Sklearn", "Matplotlib"],
    },
    {
      label: "Tools & Platforms",
      items: ["Git", "Linux", "VS Code", "DevTools"],
    },
    {
      label: "Concepts",
      items: ["REST APIs", "DevOps basics", "Cybersecurity", "OOP", "Data Analysis"],
    },
  ] satisfies SkillGroup[],
  education: [
    {
      school: "Holon Institute of Technology (HIT)",
      degree: "B.Sc. Computer Science | GPA: 90 | 2022-2025",
    },
    {
      school: "INT College",
      degree: "Advanced Java & Apache Tomcat | Grade: 100 | 2025",
    },
  ],
} as const;
