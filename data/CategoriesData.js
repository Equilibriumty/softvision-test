import { MemoCricketIcon } from "../components/icons/CricketIcon";
import { MemoFootballIcon } from "../components/icons/FootballIcon";
import { MemoRugbyIcon } from "../components/icons/RugbyIcon";
import { MemoSportsIcon } from "../components/icons/SportsIcon";

export const categoriesData = [
  {
    id: 1,
    title: "All Sports",
    isActive: true,
    icon: <MemoSportsIcon />,
  },
  {
    id: 2,
    title: "Football",
    isActive: false,
    icon: <MemoFootballIcon />,
  },
  {
    id: 3,
    title: "Rugby Union",
    isActive: false,
    icon: <MemoRugbyIcon />,
  },
  {
    id: 4,
    title: "Cricket",
    isActive: false,
    icon: <MemoCricketIcon />,
  },
  {
    id: 5,
    title: "Golf",
    isActive: false,
    icon: <MemoRugbyIcon />,
  },
];
