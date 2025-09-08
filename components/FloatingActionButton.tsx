import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable } from "react-native";

// TODO: [FloatingButton] Adicionar sombra (elevation no Android, shadow no iOS).

export function FloatingActionButton() {
  return (
    <Link href="/new-task" asChild>
      <Pressable className="absolute bottom-6 right-6 h-14 w-14 bg-black rounded-full items-center justify-center">
        <Ionicons name="add" size={32} color="black" />
      </Pressable>
    </Link>
  );
}
