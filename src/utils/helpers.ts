import { hours } from "./constants";
import { type DayOfTheWeek } from "./types";

export const getHours = () => {
  const day = new Date().getDay() as DayOfTheWeek;

  return hours[day];
};
