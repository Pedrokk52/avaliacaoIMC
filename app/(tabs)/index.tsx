import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button, KeyboardAvoidingView, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8", // fundo claro
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "#1f2937", // azul escuro/quase preto
  },
  text: {
    fontSize: 16,
    color: "#374151", // cinza escuro
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  input: {
    borderColor: "#3b82f6", // azul claro
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "#ffffff",
    width: "80%",
  },
});

export default function Index() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  function calcularIMC() {
    const pesoN = parseFloat(peso);
    const alturaN = parseFloat(altura);

    const imc = pesoN / (alturaN * alturaN);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade grau I";
    } else if (imc < 39.9) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} e você está classificado como ${classificacao}.`);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Calcular IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={calcularIMC} />
      {resultado && <Text style={styles.text}>{resultado}</Text>}
    </KeyboardAvoidingView>
  );
}
