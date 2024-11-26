export type Region = 'Misthalin' | 'Karamja' | 'Asgarnia' | 'Kandarin' | 'Morytania' | 'Desert' | 'Fremennik' | 'Tirannwn' | 'Wilderness';

// Add the export keyword here
export interface TaskRequirements {
  items?: string[];
  skills?: { [key: string]: number };
  quests?: string[];
}

export interface Task {
  id: number;
  description: string;
  points: number;
  completed: boolean;
  category: string;
  region: Region;
  location?: string;
  requirements?: TaskRequirements;
  notes?: string;
  recommendedOrder?: number;
}