import { icons } from "./icons";

export interface Activity {
  time: string;
  icon: string;
  name: string;
}

export interface Impact {
  name: string;
  value: string;
}

export interface HabitStackItem {
  id?: number;
  title: string;
  duration: string;
  activities: Activity[];
  impacts: Impact[];
}

export const data: HabitStackItem[] = [
  {
    id: 1,
    title: "Morning optimizer",
    duration: "15 day streak",
    activities: [
      { time: "7:00am", icon: icons.SunOutlined, name: "Sunlight" },
      { time: "7:30am", icon: icons.Dumbel, name: "Exercise" },
      { time: "8:00am", icon: icons.SunOutlined, name: "Breakfast" },
    ],
    impacts: [
      { name: "Energy", value: "+32%" },
      { name: "Metabolism", value: "+92%" },
      { name: "Mood", value: "+28%" },
    ],
  },
  {
    id: 2,
    title: "Focus booster",
    duration: "7 day streak",
    activities: [
      { time: "9:00am", icon: icons.SunOutlined, name: "Reading" },
      { time: "10:00am", icon: icons.Dumbel, name: "Coffee" },
      { time: "10:30am", icon: icons.SunOutlined, name: "Meditation" },
    ],
    impacts: [
      { name: "Focus", value: "+45%" },
      { name: "Clarity", value: "+40%" },
      { name: "Calmness", value: "+60%" },
    ],
  },
  {
    id: 3,
    title: "Evening unwind",
    duration: "10 day streak",
    activities: [
      { time: "6:00pm", icon: icons.SunOutlined, name: "Evening Walk" },
      { time: "7:00pm", icon: icons.Dumbel, name: "Dinner" },
      { time: "8:30pm", icon: icons.SunOutlined, name: "Reading" },
    ],
    impacts: [
      { name: "Relaxation", value: "+75%" },
      { name: "Sleep Quality", value: "+85%" },
      { name: "Mood", value: "+30%" },
    ],
  },
  {
    title: "Weekend recharge",
    duration: "3 day streak",
    activities: [
      { time: "8:00am", icon: icons.SunOutlined, name: "Hiking" },
      { time: "12:00pm", icon: icons.Dumbel, name: "Healthy Meal" },
      { time: "3:00pm", icon: icons.SunOutlined, name: "Listening to Music" },
    ],
    impacts: [
      { name: "Energy", value: "+70%" },
      { name: "Happiness", value: "+80%" },
      { name: "Mental Clarity", value: "+50%" },
    ],
  },
];

// ----------------------- analytics screen START ----------------------------------------------------

export type AnalyticsItem = {
  id: number;
  title: string;
  value: string;
  icon: any; // Icon component type
};

export const analytics: AnalyticsItem[] = [
  { id: 1, title: "VITALS", value: "92%", icon: icons.ArrowTrendUpWhite },
  { id: 2, title: "STRESS", value: "low", icon: icons.ArrowTrendDownWhite },
  { id: 3, title: "ENERGY", value: "high", icon: icons.ArrowTrendUpWhite },
];

export interface ITimeFilter {
  id: string;
  label: string;
}
export const timeFilters: ITimeFilter[] = [
  { id: "1m", label: "1m" },
  { id: "3m", label: "3m" },
  { id: "6m", label: "6m" },
  { id: "12m", label: "12m" },
];

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "1",
    date: "SEP 15",
    title: "New habit formed: Meditation practice",
    description: "You completed a 15-day streak",
  },
  {
    id: "2",
    date: "OCT 01",
    title: "Consistent sleep-wake cycle established",
    description: "You completed a 30-day morning routine streak",
  },
  {
    id: "3",
    date: "SEP 15",
    title: "New habit formed: Meditation practice",
    description: "You completed a 15-day streak",
  },
  {
    id: "4",
    date: "OCT 01",
    title: "Consistent sleep-wake cycle established",
    description: "You completed a 30-day morning routine streak",
  },
];

// -------------------------- analytics screen END   ------------------------------------------------------
