import { Dimensions, StatusBar } from "react-native";

// SCREEN WIDTH
export const { width: SCREEN_WIDTH } = Dimensions.get("window");

// SCREEN HEIGHT
export const { height: SCREEN_HEIGHT } = Dimensions.get("window");

// STATUS BAR HEIGHT
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
