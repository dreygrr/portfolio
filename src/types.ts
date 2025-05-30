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
  thumbnail: string;
  softwaresUsed?: SoftwareUsed;
  techsUsed?: TechUsed;
}

export type Tab = 'dev' | 'motion' | 'anim' | 'contact' | 'about';