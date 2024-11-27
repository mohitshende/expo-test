import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const BotMessageCard = ({ item, handleOptionClick }: any) => {
  return (
    <View style={styles.botMessage}>
      <View style={styles.botHeader}>
        <Text style={styles.botText}>{item.message}</Text>
        <Text style={styles.messageTime}>10:30 am</Text>
      </View>

      {/* Bot Option's */}
      {item.options && (
        <View style={styles.optionsContainer}>
          {item.options.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionButton}
              onPress={() => handleOptionClick(option)}
            >
              <Text style={styles.optionText}>{option.text}</Text>

              <Text style={styles.optionButtonTime}>2d</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {/* {item.suggestions && (
        <View>
          {item.suggestions.map((suggestion) => (
            <View key={suggestion.id} style={styles.suggestionCard}>
              <Text style={styles.suggestionTitle}>{suggestion.title}</Text>
              <Text style={styles.suggestionDetails}>
                {suggestion.duration} • {suggestion.successRate} success
              </Text>

              <View style={styles.buttonContainer}>
                <Button
                  onPress={() => {}}
                  title="details"
                  style={styles.sugButton}
                />
                <Button
                  onPress={() => {}}
                  title="start"
                  style={styles.sugButton}
                />
              </View>
            </View>
          ))}
        </View>
      )} */}
    </View>
  );
};

export default BotMessageCard;

const styles = StyleSheet.create({
  botMessage: {
    width: "80%",
    marginBottom: 16,
    borderWidth: 0.4,
    borderColor: Colors.border,
    borderRadius: 10,
    alignSelf: "flex-start",
    overflow: "hidden",
    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    // Shadow for Android
    elevation: 3,
  },
  botHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#EAEBFB",
  },
  botText: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  messageTime: {
    color: "rgba(8, 8, 8, 0.4)",
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  optionsContainer: {
    flexDirection: "column",
  },
  optionButton: {
    backgroundColor: Colors.background2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionText: {
    color: "#575FF6",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  optionButtonTime: {
    color: "#737373",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0.4,
  },

  // Bot Message Cont end here

  suggestionCard: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderColor: "#B0BEC5",
    borderWidth: 1,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#37474F",
  },
  suggestionDetails: {
    fontSize: 14,
    color: "#607D8B",
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  sugButton: {
    borderRadius: 40,
  },
  //
});
