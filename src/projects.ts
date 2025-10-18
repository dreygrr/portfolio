import type { ProjectType, SoftwareUsed, TechUsed } from "./types";

let projectId: number = 0;

function setProject(id: number, title: string, desc: string, year: number, src: string, thumbnail?: string, softwaresUsed?: SoftwareUsed[], techsUsed?: TechUsed[]) {
  return {
    id,
    title,
    desc,
    year,
    src,
    thumbnail,
    softwaresUsed,
    techsUsed,
  } as ProjectType;
}

function setSoftwareUsed(name: string, icon: string) {
  return {
    name,
    icon: `/src/assets/icons/${icon}.svg`,
  }
}

// function setTechUsed(name: string, icon: string) {
//   return {
//     name,
//     icon: `/src/assets/icons/${icon}.svg`,
//   }
// }

const projects = {
  development: [],

  motion: [
    setProject(
      projectId++, 
      "Anúncio Leads B2B - Pen", 
      "Advertisement created for Pen's B2B qualified lead generation campaign, showcasing their ad-making solution through motion design excerpts aligned with the company's visual identity to precisely engage potential clients.",
      2025,
      "https://www.youtube.com/embed/60F1m6MEYwE",
      "https://img.youtube.com/vi/60F1m6MEYwE/hqdefault.jpg",
      [
        setSoftwareUsed("After Effects", "ae"),
        setSoftwareUsed("Photoshop", "ps"),
      ],
    ),
  ],

  animations: [
    setProject(
      projectId++,
      "Série Naruto Guerra - Koow",
      "Animation for client's Naruto Guerra series introduction, featuring its characters and their potential abilities.",
      2023,
      "https://www.youtube.com/embed/JX_Z5nsEm8s",
      "https://img.youtube.com/vi/JX_Z5nsEm8s/hqdefault.jpg",
    ),
    setProject(
      projectId++,
      "Intro Pokémon - Sarwoh",
      "Introduction for client's Pokémon-themed YouTube channel, featuring dynamic animations of the characters to create an engaging and energetic opening sequence.",
      2020,
      "https://www.youtube.com/embed/sd2J96jnKiI?si=N7gREPSUlcfR4DWG",
      "https://img.youtube.com/vi/sd2J96jnKiI/hqdefault.jpg",
    ),
    setProject(
      projectId++,
      "Série Colônia de Férias - Guihh",
      "Animation for client's Colônia de Férias series introduction, showcasing its characters and their fun adventures during vacation time.",
      2019,
      "https://www.youtube.com/embed/qzUZe3VzEO4?si=KXnFY1inmvp9-WMW",
      "https://img.youtube.com/vi/qzUZe3VzEO4/hqdefault.jpg",
    ),
  ],
};

function getTabs() {
  return Object.keys(projects) as Array<keyof typeof projects>;
}

export { projects, getTabs };