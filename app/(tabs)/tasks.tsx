import { icons, images } from "@/constants";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import CurrentTaskCard from "@/components/tasks/current-task-card";
import UpcomingTaskCard from "@/components/tasks/upcoming-task-card";

enum TAB_BUTTON {
  TODAY = "today",
  TOMMOROW = "tommorow",
}

const todaysTasks = [
  {
    id: 1,
    title: "Hydration",
    cardLabel: "needs prep",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "10:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.waterBottle,
  },

  {
    id: 2,
    title: "Hydration",
    cardLabel: "needs prep",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "10:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.foodBowl,
  },
];

const tommorowsTasks = [
  {
    id: 3,
    title: "Morining Sunlight",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "10:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.foodBowl,
  },

  {
    id: 4,
    title: "Mid-day meal",
    cardLabel: "needs prep",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "10:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.foodBowl,
  },

  {
    id: 5,
    title: "Hydration",
    cardLabel: "needs prep",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "10:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.waterBottle,
  },
];

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(TAB_BUTTON.TODAY);

  const handleTabButton = (title: string) => {
    setActiveTab(title === "today" ? TAB_BUTTON.TODAY : TAB_BUTTON.TOMMOROW);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.sunContainer}>
          <icons.SunWithBlur style={styles.sunIcon} />
        </View>
        <View>
          <Text style={styles.topContainerHeading}>Sunny</Text>
          <Text style={styles.topContainerHeading}>
            Condition optimal:{" "}
            <Text style={styles.topContainerSubHeadingMuted}>
              proceed as planned
            </Text>
          </Text>
        </View>

        <View style={styles.downArrow}>
          <icons.DownwardArrowWhite />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Your Tasks</Text>

          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={
                activeTab == TAB_BUTTON.TODAY
                  ? styles.activeTab
                  : styles.inactiveTab
              }
              onPress={() => handleTabButton(TAB_BUTTON.TODAY)}
            >
              <Text>{TAB_BUTTON.TODAY}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                activeTab == TAB_BUTTON.TOMMOROW
                  ? styles.activeTab
                  : styles.inactiveTab
              }
              onPress={() => handleTabButton(TAB_BUTTON.TOMMOROW)}
            >
              <Text>{TAB_BUTTON.TOMMOROW}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {activeTab === TAB_BUTTON.TODAY ? (
        <>
          <View style={{ marginTop: 16 }}>
            <CurrentTaskCard task={todaysTasks[0]} />
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>more in the day</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.upcomingTasksContainer}>
            {todaysTasks.map((task) => {
              return <UpcomingTaskCard key={task.id} task={task} />;
            })}
          </View>
        </>
      ) : (
        <View style={styles.upcomingTasksTomContainer}>
          {tommorowsTasks.map((task) => {
            return <UpcomingTaskCard key={task.id} task={task} />;
          })}
        </View>
      )}
    </ScrollView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50, // remove this later
  },
  topContainer: {
    width: "100%",
    backgroundColor: "#000",
    height: 70,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topContainerHeading: {
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    color: "white",
  },

  topContainerSubHeading: {
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    color: "white",
  },

  topContainerSubHeadingMuted: {
    marginTop: 4,
    fontFamily: "Gilroy-Bold",
    fontWeight: "semibold",
    fontSize: 12,
    lineHeight: 18,
    color: "rgba(255, 255, 255, 0.5)",
  },

  sunContainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  sunIcon: {
    width: 42,
    height: 42,
  },

  downArrow: {
    marginLeft: 39,
    width: 42,
    height: 42,
    justifyContent: "flex-end",
    paddingBottom: 6,
  },

  contentContainer: {
    paddingHorizontal: 16,
  },

  headerContainer: {
    marginTop: 14,
    gap: 8,
  },

  headerText: {
    fontFamily: "Recoleta",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 27.2,
  },

  tabsContainer: {
    flexDirection: "row",
    gap: 8,
  },

  activeTab: {
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.4,
    borderRadius: 80,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  inactiveTab: {
    borderRadius: 80,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "rgba(234, 234, 234, 1)",
    color: "rgba(0, 0, 0, 0.6)",
  },

  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dividerText: {
    padding: 10,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
    color: "rgba(0, 0, 0, 1)",
  },
  divider: {
    borderTopWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.4)",
    width: 60,
  },

  upcomingTasksContainer: {
    gap: 16,
    paddingBottom: 30,
  },

  upcomingTasksTomContainer: {
    marginTop: 16,
    gap: 16,
    paddingBottom: 30,
  },
});
