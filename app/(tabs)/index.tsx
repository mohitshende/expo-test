import { Colors } from "@/constants/Colors";
import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import BotMessageCard from "@/components/bot-message-card";
import UserMessageCard from "@/components/user-message.card";

interface IOption {
  id: string;
  text: string;
}
interface IChat {
  id: string;
  type: "bot" | "user";
  message: string;
  options: IOption[];
}

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
    };
    setChat([initialBotMessage]);
  }, []);

  const handleOptionClick = ({ id, text }: { id: string; text: string }) => {
    const userMessage = {
      id: new Date().toISOString(),
      type: "user",
      message: text,
      options: [],
    };

    const botResponse = {
      id: new Date().toISOString(),
      type: "bot",
      message:
        botResponses[id]?.message || "Sorry, I don't have an answer for that.",
      suggestions: botResponses[id]?.suggestions,
    };

    setChat((prevChat) => [...prevChat, userMessage, botResponse]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (item.type === "bot")
            return (
              <BotMessageCard
                item={item}
                handleOptionClick={handleOptionClick}
              />
            );
          else {
            return <UserMessageCard item={item} />;
          }
        }}
      />
    </View>
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
});
