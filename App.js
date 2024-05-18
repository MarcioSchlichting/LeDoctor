import { StyleSheet, Text, View } from 'react-native';
import BottomNavBar from "./src/components/BottomNavBar/BottomNavBar";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <BottomNavBar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
