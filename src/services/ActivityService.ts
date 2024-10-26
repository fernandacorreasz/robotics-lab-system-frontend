import data from '../assets/data-teste/activitiesData.json';
import { Activity } from '../models/Activity';

const fetchActivities = (): Promise<Activity[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.content);
    }, 1000);
  });
};

export default { fetchActivities };
