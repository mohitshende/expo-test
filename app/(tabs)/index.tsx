import React, { useState, useEffect } from "react";
import {
  View,

  StyleSheet,
  ScrollView,

} from "react-native";
import BotMessageCard from "@/components/bot-message-card";
import UserMessageCard from "@/components/user-message.card";
import { IChat } from "@/types/IChat";
import CustomInput from "@/components/custom-input";
import { icons } from "@/constants";

const botResponses = {
  anxious: {
    message:
      "I understand you're feeling anxious. Let me suggest a few relaxation techniques.",
    suggestions: [
      {
        id: "1",
        title: "Meditation",
        duration: "10 mins",
        successRate: "90%",
      },
      {
        id: "2",
        title: "Deep Breathing Exercises",
        duration: "7 mins",
        successRate: "92%",
      },
    ],
  },
  sleep_issue: {
    message:
      "I understand you're having trouble sleeping. Here are some quick solutions:",
    suggestions: [
      {
        id: "3",
        title: "4-7-8 Breathing Technique",
        duration: "5 mins",
        successRate: "96%",
      },
      {
        id: "4",
        title: "Progressive Muscle Relaxation",
        duration: "12 mins",
        successRate: "94%",
      },
    ],
  },
  migraine: {
    message:
      "Dealing with migraines can be tough. Here are some helpful techniques:",
    suggestions: [
      {
        id: "5",
        title: "Cold Compress",
        duration: "10 mins",
        successRate: "88%",
      },
      {
        id: "6",
        title: "Guided Imagery",
        duration: "15 mins",
        successRate: "85%",
      },
    ],
  },
};

const ChatBot = () => {
  const [chat, setChat] = useState<IChat[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleOptionClick = ({ id, text }: { id: string; text: string }) => {
    const userMessage = {
      id: new Date().toISOString(),
      type: "user",
      message: text,
      options: [],
      time: new Date().toLocaleTimeString(),
    };

    const botResponse = {
      id: new Date().toISOString(),
      type: "bot",
      message:
        botResponses[id]?.message || "Sorry, I don't have an answer for that.",
      suggestions: botResponses[id]?.suggestions,
      time: new Date().toLocaleTimeString(),
    };

    setChat((prevChat) => [...prevChat, userMessage, botResponse]);
  };

  const handleChangeText = (text: string) => {
    setInputText(text);
  };

  const handleSend = () => {
    const userMessage = {
      id: new Date().toISOString(),
      type: "user",
      message: inputText,
      options: [],
      time: new Date().toLocaleTimeString(),
    };
    setChat((prevChat) => [...prevChat, userMessage]);
    setInputText(""); // Clear input after sending
  };

  useEffect(() => {
    // Initial Bot Message
    const initialBotMessage: IChat = {
      id: "1",
      type: "bot",
      message:
        "Tell us your concern and we’ll resolve it. If it’s neither of the options, type in your query!",
      options: [
        { id: "anxious", text: "I am feeling anxious" },
        { id: "sleep_issue", text: "Couldn't sleep last night" },
        { id: "migraine", text: "Migraine" },
      ],
      time: new Date().toLocaleTimeString(),
    };
    setChat([initialBotMessage]);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.chatList}
          keyboardShouldPersistTaps="handled"
        >
          {chat.map((item) => (
            <View key={item.id}>
              {item.type === "bot" ? (
                <BotMessageCard
                  item={item}
                  handleOptionClick={handleOptionClick}
                />
              ) : (
                <UserMessageCard item={item} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.chatInputContainer}>
        <CustomInput
          value={inputText}
          handleChangeText={handleChangeText}
          placeholder="tell us your concern"
          otherStyles={{ borderWidth: 0.4 }}
          fieldIcon={icons.plane}
        />
      </View>
    </>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
  },
  chatList: {
    paddingBottom: 50,
  },
  chatInputContainer: {
    borderWidth: 0.4,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderColor: "#ABB292",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
  },
});
