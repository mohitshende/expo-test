import { View, StyleSheet } from "react-native";
import React from "react";
import FormField from "../component/custom-form-field";
import { Colors } from "@/constants/Colors";

const PersonalInformation = () => {
  return (
    <View>
      {/* <View style={styles.section}> */}
        <FormField
          title="full name"
          value="Mark Maurice"
          handleChangeText={() => {}}
          
        />
        <FormField
          title="linked email id"
          value="mrkmaurice@gmail.com"
          handleChangeText={() => {}}
        />
        <FormField
          title="linked phone number"
          inputMode="tel"
          value="9065811368"
          handleChangeText={() => {}}
        />
        <FormField
          title="gender"
          value="male"
          handleChangeText={() => {}}
        />
        <FormField
          title="date of birth"
          value="11-12-1980"
          handleChangeText={() => {}}
        />
      {/* </View> */}
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  // section: {
  //   borderRadius: 12,
  //   borderWidth: 0.4,
  //   borderColor: Colors.border.secondary,
  //   paddingVertical: 12,
  //   paddingHorizontal: 15.3,
  // },
});
