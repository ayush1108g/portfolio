const BASE_URL = "https://ayush-gupta-portfolio.netlify.app";

export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Ayush Gupta",
    givenName: "Ayush",
    familyName: "Gupta",
    jobTitle: "MTS - Engineering",
    description: "MTS - Engineering at ZL Technologies and B.Tech graduate from IIT Bhubaneswar specializing in React, Next.js, React Native, Node.js, and competitive programming.",
    url: BASE_URL,
    sameAs: [],
    knowsAbout: ["C++", "JavaScript", "React.js", "Next.js", "React Native", "Node.js", "Express.js", "MongoDB", "Firebase", "Redux", "Data Structures", "Operating Systems", "Computer Networks"],
    worksFor: { "@type": "Organization", name: "ZL Technologies" },
    alumniOf: { "@type": "EducationalOrganization", name: "Indian Institute of Technology, Bhubaneswar" }
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Ayush Gupta - Software Developer Portfolio",
    url: BASE_URL,
    description: "Portfolio of Ayush Gupta, a software developer and IIT Bhubaneswar graduate.",
    inLanguage: "en-US",
    author: { "@id": `${BASE_URL}/#person` }
};

export const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#projects`,
    name: "Ayush Gupta's Software Projects",
    numberOfItems: 2,
    itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "CreativeWork", name: "General Championship App", description: "React Native mobile app serving 2,000+ students across 50+ events.", creator: { "@id": `${BASE_URL}/#person` }, programmingLanguage: ["JavaScript", "React Native"] } },
        { "@type": "ListItem", position: 2, item: { "@type": "CreativeWork", name: "EduSync - College ERP System", description: "Rank 1 IIT BBS Web Hackathon project with scheduling, attendance, assignment, and grading modules.", creator: { "@id": `${BASE_URL}/#person` }, programmingLanguage: ["JavaScript", "Node.js"] } }
    ]
};
