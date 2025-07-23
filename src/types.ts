export interface SoftwareUsed {
  name: string;
  icon: string;
}

export interface TechUsed {
  name: string;
  icon: string;
}

export interface ProjectType {
  id: number;
  title: string;
  desc: string;
  year: number;
  src: string;
  softwaresUsed?: SoftwareUsed;
  techsUsed?: TechUsed;
}
