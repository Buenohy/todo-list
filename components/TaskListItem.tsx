import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function TaskListItem() {
  const isDone = false;

  return (
    <View className="flex-row items-center p-4 bg-white mb-2 rounded-lg">
      <Pressable>
        <Ionicons>
          name={isDone ? "checkbox" : "square-outiline"}
          size={24}
          color{isDone ? "gray" : "black"}
        </Ionicons>
      </Pressable>
      <Text className="`flex-1 ml-4 text-base ${isDone ? 'text-gray-400 line-through' : 'text-black'}`">
        Stretch everyday for 15 mins
      </Text>
    </View>
  );
}
