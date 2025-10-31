import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  const logo = require('../assets/images/logo.png'); // <-- usar require evita errores de tipeo/TS

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Entras x Gorda</Text>

      <Link href="/" dismissTo style={styles.link}>
        <View style={{ alignItems: 'center' }}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.linkText}>Dismiss</Text>
        </View>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#007AFF',
    marginTop: 10,
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});
