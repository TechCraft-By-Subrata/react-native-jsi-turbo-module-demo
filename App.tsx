import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import NativeCalculatorModule from './specs/NativeCalculatorModule'; // 👈 Import our type-safe TurboModule spec

export default function App() {
  const [number1, setNumber1] = useState('50');
  const [number2, setNumber2] = useState('25');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;

    // ⚡ EXECUTING SYNCHRONOUSLY OVER JSI!
    // No callbacks, no promises, no serialization bottlenecks. It runs instantly like a local function.
    const nativeResult = NativeCalculatorModule.addNumbers(num1, num2);
    setResult(nativeResult);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JSI TurboModule Calculator</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />
      <Text style={styles.plus}>+</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      <Button title="Calculate instantly via JSI" onPress={handleCalculate} />

      {result !== null && (
        <Text style={styles.resultText}>Instant Result: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  plus: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  resultText: {
    fontSize: 22,
    color: 'blue',
    marginTop: 20,
    fontWeight: '600',
  },
});