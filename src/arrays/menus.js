import { AppRegistration } from "@mui/icons-material";
import Person3Icon from "@mui/icons-material/Person3";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import SyncIcon from "@mui/icons-material/Sync";

export const navigation = [
  { name: "Registration", link: "/", icon: <AppRegistration /> },
  { name: "Applicants", link: "/applicants", icon: <Person3Icon /> },
  { name: "Reversal", link: "/reversal", icon: <FlipCameraAndroidIcon /> },
  { name: "Progress", link: "/progress", icon: <SyncIcon /> },
];
