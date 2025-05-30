import type { ProjectType, SoftwareUsed, TechUsed } from "./types";

let projectId: number = 0;

function setProject(id: number, title: string, desc: string, thumbnail: string, softwaresUsed?: SoftwareUsed[], techsUsed?: TechUsed[]) {
  return {
    id,
    title,
    desc,
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

function setTechUsed(name: string, icon: string) {
  return {
    name,
    icon: `/src/assets/icons/${icon}.svg`,
  }
}

const projects = {
  development: [
    setProject(projectId++,
      "Projeto 1",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      [
        setSoftwareUsed("Postman", "postman"),
      ],
      [
        setTechUsed("Node.js", "node"),
        setTechUsed("MySQL", "mysql"),
      ],
    ),
    setProject(projectId++,
      "Projeto 2",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    setProject(projectId++,
      "Projeto 3",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
  ],

  motion: [
    setProject(projectId++, 
      "Projeto 1", 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!", 
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      [
        setSoftwareUsed("After Effects", "ae"),
        setSoftwareUsed("Photoshop", "ps"),
      ],
    ),
    setProject(projectId++, 
      "Projeto 2", 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!", 
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    setProject(projectId++, 
      "Projeto 3", 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!", 
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
  ],

  animations: [
    setProject(projectId++,
      "Projeto 1",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    setProject(projectId++,
      "Projeto 2",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
    setProject(projectId++,
      "Projeto 3",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati rem asperiores inventore delectus. Soluta necessitatibus explicabo veritatis commodi dignissimos rerum magnam, possimus aperiam ipsa quasi expedita facilis perferendis molestiae!",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ),
  ],
};

function getTabs() {
  return Object.keys(projects) as Array<keyof typeof projects>;
}

export { projects, getTabs };