import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";

export function BottomSheet({ isOpen, toggleSheet, children }) {
  const translateY = useSharedValue(isOpen ? 0 : 300);
  const MAX_HEIGHT = 300;

  React.useEffect(() => {
    translateY.value = withTiming(isOpen ? 0 : MAX_HEIGHT, {
      duration: 300,
      stiffness: 150,
    });
  }, [isOpen]);

  // Gesture Handler for Dragging
  const dragGesture = Gesture.Pan()
    .onStart(() => {})
    .onUpdate((event) => {
      translateY.value = Math.max(0, translateY.value + event.changeY);
    })
    .onEnd((event) => {
      if (event.velocityY > 1000 || translateY.value > MAX_HEIGHT * 0.5) {
        translateY.value = withTiming(MAX_HEIGHT);
        toggleSheet();
      } else {
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      {isOpen && (
        <TouchableOpacity
          style={styles.backdrop}
          onPress={toggleSheet}
          activeOpacity={0.7}
        />
      )}
      <GestureDetector gesture={dragGesture}>
        <Animated.View style={[styles.sheet, animatedStyle]}>
          {/* Drag Handle */}
          <View style={styles.dragHandle} />
          {children}
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "auto",
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dragHandle: {
    width: 24,
    height: 2,
    backgroundColor: "#000",
    borderRadius: 6,
    alignSelf: "center",
    marginVertical: 4,
  },
});
