import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Button
            title='Abrir Calculadora' 
            onPress={() => navigation.navigate("Calculadora")}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
