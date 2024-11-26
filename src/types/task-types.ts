// src/types/task-types.ts

export type Region = 'Misthalin' | 'Karamja' | 'Asgarnia' | 'Kandarin' | 'Morytania' | 'Desert' | 'Fremennik' | 'Tirannwn' | 'Wilderness';

export interface Prerequisite {
  taskId?: number;  // Reference to another task that needs to be completed first
  skillRequirements?: {
    skill: string;
    level: number;
  }[];
  itemRequirements?: string[];
  questRequirements?: string[];
}

export interface Task {
  id: number;
  description: string;
  points: number;
  completed: boolean;
  category: string;
  region: Region;
  location?: string;
  requirements?: {
    skills?: { [key: string]: number };
    items?: string[];
    quests?: string[];
  };
  notes?: string;
  recommendedOrder?: number;  // Lower numbers should be completed first
  prerequisites?: Prerequisite[];
}