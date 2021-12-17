import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native'

export default function App() {
  const [outputText, setOutputText] = useState('Изначальный текст')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
         title="Изменить текст"
         onPress={() => setOutputText('Текст был изменён!')}
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
  },
});
