// import { View, StyleSheet, Text } from "react-native";
// import React from "react";

// const CircularProgress = ({
//   progress = 40,
//   size = 174,
//   strokeWidth = 10,
//   textColor = "#000",
// }) => {
//   // Calculate the angle for the progress
//   const angle = (progress / 100) * 360;

//   // Get radius and circumference
//   const radius = size / 2;
//   const circumference = 2 * Math.PI * radius;

//   // Style for the outer circle
//   const outerCircleStyle = {
//     width: size,
//     height: size,
//     borderRadius: radius,
//     borderWidth: strokeWidth,
//     borderColor: "#ccc", // Background circle color
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//   };

//   // Style for the progress circle (using transform to rotate)
//   const progressCircleStyle = {
//     position: "absolute",
//     width: size,
//     height: size,
//     borderRadius: radius,
//     borderWidth: strokeWidth,
//     borderColor: "#3498db", // Progress color
//     transform: [{ rotate: `${angle - 90}deg` }],
//     clipPath: "inset(0 0 0 50%)", // Clip to half to simulate the circular progress effect
//   };

//   return (
//     <View style={[styles.container, { width: size, height: size }]}>
//       {/* Outer Circle (Background) */}
//       <View style={[styles.outerCircle, outerCircleStyle]} />

//       {/* Progress Circle */}
//       <View style={[styles.progressCircle, progressCircleStyle]} />

//       {/* Percentage Text */}
//       <Text
//         style={[
//           styles.percentageText,
//           { fontSize: size / 4, color: textColor },
//         ]}
//       >
//         {`${Math.round(progress)}%`}
//       </Text>
//     </View>
//   );
// };

// export default CircularProgress;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//   },
//   outerCircle: {
//     borderWidth: 10,
//     borderColor: "#e6e6e6",
//     position: "absolute",
//     top: 0,
//     left: 0,
//   },
//   progressCircle: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     borderWidth: 10,
//     borderColor: "#3498db", // progress color
//     clipPath: "inset(0 0 0 50%)", // Clip to half circle for progress effect
//   },
//   percentageText: {
//     position: "absolute",
//     fontWeight: "bold",
//   },
// });
