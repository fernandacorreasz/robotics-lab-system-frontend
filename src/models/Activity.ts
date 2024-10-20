export interface Activity {
    id: string;
    activityTitle: string;
    activityDescription: string;
    activityStatus: 'InProgress' | 'Completed' | 'NotStarted' | string; // Aceitar strings genéricas
    timeSpent: number;
    startDate: string;
    endDate: string;
  }
  