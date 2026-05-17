import { create } from "zustand";

export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
};

type ProjectStore = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
}));
