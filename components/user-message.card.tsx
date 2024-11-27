import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { IChat } from "@/types/IChat";

const UserMessageCard = ({ item }: {item:IChat}) => {
  return (
    <View style={styles.userMessage}>
      <Text style={styles.userText}>{item.message}</Text>
      <Text style={styles.messageTime}>10.30</Text>
    </View>
  );
};

export default UserMessageCard;

const styles = StyleSheet.create({
  userMessage: {
    borderRadius: 10,
    maxWidth: "80%",
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#575FF6",
    alignSelf: "flex-end",
    width: "auto",
  },
  userText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0.4,
    textAlign: "right",
  },
  messageTime: {
    marginTop: 4,
    fontSize: 10,
    color: "#aaa",
    textAlign: "right",
  },
});
