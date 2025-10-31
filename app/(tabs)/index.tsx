import { Link } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
console.log('home screen rendered');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hellouuu</Text>
      <Text style={styles.text}>Esto es un contador: {count}</Text>
      <Pressable style={styles.button} onPress={handleIncrement}>
        <Text style={styles.buttonText}>Increment</Text>
      </Pressable>
      <Text>¡Bienvenido a la pantalla principal!</Text>
      <Link href="/modal" style={styles.button}> 
        <Text style={styles.buttonText}>Abrir Modal</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffff', // 👈 fondo visible
  },
  text: {
    color: '#000000ff', // 👈 texto visible sobre fondo oscuro
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#3b82f6',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
