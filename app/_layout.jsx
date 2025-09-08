import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animation: 'none', // Disable slide animations
        gestureEnabled: false, // Disable swipe gestures
      }}
    />
  );
}
