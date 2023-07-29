import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';



export default function SecondScreen() {
  const [value, setValue] = React.useState('');
  const [numeroUno, setNumeroUno] = React.useState('');
  const [numeroDos, setNumeroDos] = React.useState('');
 Calcular = () => {
  var uno = parseFloat(numeroUno);
  var dos = parseFloat(numeroDos);
  var resultado = 0;

  if (isNaN(uno) || isNaN(dos) || value == '') {
    resultado = 'Todos los campos son obligatorios'
  }
  else {
    switch (value) {
      case 'suma':
        resultado = uno + dos;
        break;
      case 'resta':
        resultado = uno - dos;
        break;
      case 'multiplicacion':
        resultado = uno * dos;
        break;
      case 'division':
        resultado = uno / dos;
        break;
      default:
        break;
    }
  }

  alert(resultado)
 }
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Ingrese primer número'
        keyboardType='numeric'
        inputMode='numeric'
        value={numeroUno.replace(/[^0-9.]/g, '')}
        onChangeText={(number) => setNumeroUno(number)}
      />

      <TextInput 
        style={styles.input}
        placeholder='Ingrese segundo número'
        keyboardType='numeric'
        inputMode='numeric'
        value={numeroDos.replace(/[^0-9..2]/g, '')}
        onChangeText={(number) => setNumeroDos(number)}
      />

      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.containerRadio}>
          <Text style={styles.textBig}>+</Text>
          <RadioButton
            value="suma"
            status='checked'
          />
          <Text style={styles.textBig}>-</Text>
          <RadioButton
            value="resta"
            status='unchecked'     
          />

          <Text style={styles.textBig}>*</Text>
          <RadioButton
            value="multiplicacion"
            status='unchecked'     
          />

          <Text style={styles.textBig}>/</Text>
          <RadioButton
            value="division"
            status='unchecked'     
          />
        </View>

      </RadioButton.Group>

      <Button
            title='Calcular' 
            onPress={Calcular}
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
  containerRadio: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textBig: {
    fontSize: 24,
  },
});
