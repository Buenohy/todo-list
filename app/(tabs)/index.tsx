import { FloatingActionButton } from "@/components/FloatingActionButton";
import { TaskListItem } from "@/components/TaskListItem";
import { useState } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";

// << 1. IMPORTAÇÕES ADICIONAIS
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

// Dados mocados (sem alteração)
const mockTasks = [
  { id: "1", text: "Stretch everyday for 15 mins", isDone: false },
  { id: "2", text: "Write the MVP for the new app", isDone: true },
  { id: "3", text: "Call John", isDone: false },
];

export default function HomeScreen() {
  const [tasks, setTasks] = useState(mockTasks);

  // << 2. HOOK DO NATIVEWIND PARA GERENCIAR O TEMA
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    // << 3. CLASSES dark: ADICIONADAS PARA O FUNDO
    <SafeAreaView className="flex-1 bg-gray-100 dark:bg-neutral-900">
      <Text className="text-red-500">TESTE</Text>
      {/* Cabeçalho com o botão de troca de tema */}
      <View className="flex-row items-center justify-between p-4">
        <View>
          {/* << 3. CLASSES dark: ADICIONADAS PARA OS TEXTOS */}
          <Text className="text-3xl font-bold text-black dark:text-white">
            Today
          </Text>
          <Text className="text-gray-500 dark:text-gray-400">05 Dec</Text>
        </View>

        {/* << 4. BOTÃO PARA TROCAR O TEMA */}
        <Pressable onPress={toggleColorScheme} className="p-2">
          <Ionicons
            name={colorScheme === "light" ? "moon-outline" : "sunny-outline"}
            size={24}
            color={colorScheme === "light" ? "black" : "white"}
          />
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskListItem />}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <FloatingActionButton />
    </SafeAreaView>
  );
}
