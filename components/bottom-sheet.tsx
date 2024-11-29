import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  Extrapolation,
  runOnJS,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  const translateY = useSharedValue(SCREEN_HEIGHT);
  const THRESHOLD = SCREEN_HEIGHT * 0.25;

  React.useEffect(() => {
    if (isVisible) {
      translateY.value = withSpring(0, { damping: 20 });
    } else {
      translateY.value = withTiming(SCREEN_HEIGHT, { duration: 300 });
    }
  }, [isVisible]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      "worklet";
      translateY.value = Math.max(event.translationY, 0);
    })
    .onEnd((event) => {
      "worklet";
      if (event.translationY > THRESHOLD) {
        translateY.value = withTiming(SCREEN_HEIGHT, { duration: 300 });
        runOnJS(onClose)();
      } else {
        translateY.value = withSpring(0, { damping: 20 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateY.value,
      [0, SCREEN_HEIGHT],
      [0.5, 0],
      Extrapolation.CLAMP
    );
    return { opacity };
  });

  if (!isVisible) return <></>;

  return (
    <>
      {/* Overlay */}
      <Animated.View style={[styles.overlay, overlayStyle]}>
        <TouchableOpacity style={StyleSheet.absoluteFill} onPress={onClose} />
      </Animated.View>

      {/* Bottom Sheet */}
      <Animated.View style={[styles.container, animatedStyle]}>
        <GestureDetector gesture={panGesture}>
          <View style={styles.handleContainer}>
            <View style={styles.handle} />
          </View>
        </GestureDetector>
        <View style={styles.content}>{children}</View>
      </Animated.View>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    zIndex: 2,
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: SCREEN_HEIGHT * 0.62,
    height: "auto",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  handleContainer: {
    width: "100%",
  },
  handle: {
    width: 24,
    height: 2,
    backgroundColor: "#000",
    borderRadius: 6,
    alignSelf: "center",
    marginVertical: 4,
  },
  content: {
    flex: 1,
  },
});
