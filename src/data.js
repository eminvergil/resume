export const CVData = {
  personalData: {
    name: "Emin Vergil",
    title: "Software Engineer",
    image: "https://bulma.io/images/placeholders/128x128.png",
    contacts: [
      { type: "email", value: "eminvergil@yahoo.com" },
      { type: "phone", value: "+00 (123) 456 78 90" },
      { type: "location", value: "Adana" },
      { type: "website", value: "eminvergil.github.io" },
      { type: "linkedin", value: "linkedin.com/in/emin-vergil-b13731125" },
      { type: "twitter", value: "twitter.com/eminvergil" },
      { type: "github", value: "github.com/eminvergil" },
    ],
  },
  sections: [
    {
      type: "text",
      title: "Career Profile",
      content:
        "I'm a passionate software developer living in Adana, Turkey. I am currenty working on my game, side projects. I love being part of development of web technologies. I build things on my GitHub profile (here). I love React and .Net Core.",
      icon: "usertie",
    },
    {
      type: "common-list",
      title: "Education",
      icon: "graduation",
      items: [
        {
          title: "Computer Engineering (BS)",
          authority: "Cukurova University",
          authorityWebSite: "https://sample.edu",
          rightSide: "2017 - 2022",
        },
      ],
    },
    {
      type: "experiences-list",
      title: "Experiences",
      description: "Optional",
      icon: "archive",
      items: [
        {
          title: "Software Developer",
          company: "Remote Summer Intern",
          description: "I have developed a todo list app.",
          companyWebSite: "#",
          companyMeta: "",
          datesBetween: "2020.08 - 2020.09",
          descriptionTags: ["Javascript", "React"],
        },
      ],
    },
    {
      type: "projects-list",
      title: "Selected Personal Projects",
      icon: "tasks",
      groups: [
        {
          sectionHeader: "Company Name",
          description: "Optional",
          items: [
            {
              title: "Flappy Bird",
              projectUrl: "github.com/eminvergil/flappy-bird-js",
              description: "A touchscreen game built on HTML5,CSS,JAVASCRIPT.",
            },
            {
              title: "Coffee Shop",
              projectUrl: "github.com/eminvergil/coffee-shop-website",
              description: "Simple coffe shop website built with REACT.JS",
            },
            {
              title: "Mini E Commerce Website For Electronic Products",
              projectUrl: " github.com/eminvergil/galleryapp",
              description:
                "Simple mini e commerce website build with .NET Core",
            },
          ],
        },
      ],
    },
    {
      type: "common-list",
      title: "Certificates",
      description: "",
      icon: "comments",
      items: [
        {
          title: "FreeCodeCamp Front End Libraries – 2020",
          authority: "Certificate",
          authorityWebSite:
            "freecodecamp.org/certification/fccc5b5bb58/front-end-libraries",
        },
      ],
    },
    {
      type: "common-list",
      title: "Languages",
      icon: "language",
      items: [
        {
          authority: "English",
          authorityMeta: "Professional",
        },
      ],
    },
    {
      type: "tag-list",
      title: "Skills Proficiency",
      icon: "rocket",
      items: [
        "React",
        "Javascript",
        "CSS",
        "SQL",
        ".Net Core",
        "Gatsby",
        "HTML5",
        "CSS3",
      ],
    },
    {
      type: "tag-list",
      title: "Hobbies & Interests",
      icon: "cubes",
      items: ["Programming", "Games", "Books"],
    },
  ],
};
