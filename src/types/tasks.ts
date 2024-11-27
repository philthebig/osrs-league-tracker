export type Region = 'Misthalin' | 'Karamja' | 'Asgarnia' | 'Kandarin' | 'Morytania' | 'Desert' | 'Fremennik' | 'Tirannwn' | 'Wilderness';

export interface IntermediateStep {
  description: string;
  type: 'BANK' | 'WITHDRAW' | 'NOTE' | 'INSTRUCTION';
}

export interface Task {
  id: number;
  description: string;
  points: number;
  completed: boolean;  // Changed from 'false' to 'boolean'
  category: string;
  region: Region;
  location?: string;
  requirements?: {
    skills?: { [key: string]: number };
    items?: string[];
    quests?: string[];
  };
  notes?: string;
  recommendedOrder?: number;
  beforeSteps?: IntermediateStep[];
  afterSteps?: IntermediateStep[];
}