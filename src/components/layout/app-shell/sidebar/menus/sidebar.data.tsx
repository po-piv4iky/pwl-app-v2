import { Home, BookOpen, Info, Activity, BicepsFlexed, Award } from "lucide-react";
import { ISidebarItem } from "./sidebar.type";
import { PAGE } from "@/config/public-page.config";


export const SIDEBAR_DATA: ISidebarItem[] = [
  {
    icon: Home,
    label: "Главная",
    link: PAGE.HOME,
  },
  {
    icon: Activity,
    label: "Моя тренировка",
    link: PAGE.MY_TRAINING,
  },
  {
    icon: BookOpen,
    label: "История тренировок",
    link: PAGE.HISTORY,
  },
  {
    icon: Info,
    label: "Информация",
    link: PAGE.INFO,
  },
  {
    icon: BicepsFlexed,
    label: "Мои максимумы",
    link: PAGE.MY_MAXIMUM
  },
  {
    icon: Award,
    label: "Разряды",
    link: PAGE.MY_STANDARDS
  }
];
