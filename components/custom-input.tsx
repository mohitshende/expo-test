import { icons } from "@/constants";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

interface IFormField {
  inputMode?: "text";
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  handleSubmit?: () => void;
  otherStyles?: any;
  textStyles?: string;
  editable?: boolean;
}

const CustomInput = ({
  inputMode,
  value = "",
  placeholder = "",
  handleChangeText,
  handleSubmit,
  otherStyles = "",
  textStyles = "",
  editable = true,
  ...props
}: IFormField) => {
  return (
    <View style={[styles.inputContainer, otherStyles]}>
      <TextInput
        style={styles.input}
        inputMode={inputMode}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        editable={editable}
        numberOfLines={1}
        accessibilityLabel={placeholder}
        onSubmitEditing={handleSubmit}
        {...props}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.iconWrapper}>
        <icons.Send style={styles.inputIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 100,
    borderWidth: 0.4,
    borderColor: "rgba(46, 46, 46, 0.3)",
  },
  input: {
    width: "90%",
    paddingVertical: 15,
    color: "#B1B3B7",
    backgroundColor: "transparent",
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.4,
  },

  iconWrapper: {
    marginLeft: 10,
  },
  inputIcon: {
    width: 24,
    height: 24,
    tintColor: "rgba(0, 0, 0, 0.4)",
  },
});
