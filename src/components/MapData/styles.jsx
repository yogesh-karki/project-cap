import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: theme.palette.mode === "light" ? "#ffa35c" : "#308fe8",
  },
}));

const mapStyleLine = {
  id: "map_style",
  type: "line",
  layout: {},
  paint: {
    "line-color": "#399ed0",
    "line-width": 1,
  },
};

const mapStyleFill = {
  id: "map_style_fill",
  type: "fill",
  layout: {},
  paint: {
    "fill-color": "#ffa35c",
    "fill-opacity": 0.75,
  },
};

export { BorderLinearProgress, mapStyleLine, mapStyleFill };
