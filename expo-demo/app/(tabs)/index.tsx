import { Ionicons } from "@expo/vector-icons";
import { TextField } from "heroui-native";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { withUniwind } from "uniwind";
const StyledIonicons = withUniwind(Ionicons);
export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View className="gap-4">
      <TextField isRequired>
        <TextField.Label>New password</TextField.Label>
        <View className="w-full flex-row items-center">
          <TextField.Input
            value={password}
            onChangeText={setPassword}
            className="flex-1 px-10"
            placeholder="Enter your password"
            secureTextEntry={!isPasswordVisible}
          />
          <StyledIonicons
            name="lock-closed-outline"
            size={16}
            className="absolute left-3.5 text-muted"
            pointerEvents="none"
          />
          <Pressable
            className="absolute right-4"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <StyledIonicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={16}
              className="text-muted"
            />
          </Pressable>
        </View>
        <TextField.Description>
          Password must be at least 6 characters
        </TextField.Description>
      </TextField>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
