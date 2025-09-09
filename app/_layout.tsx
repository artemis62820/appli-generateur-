import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    // Stack : permet de gérer la navigation entre les différentes pages
    // screenOptions : permet de configurer les options de la navigation
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
