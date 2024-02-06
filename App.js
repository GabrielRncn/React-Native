import React from 'react';
import { StyleSheet, TextInput, SafeAreaView, Button, Image} from 'react-native';


const TextInputUser = () => {
  const [text,onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  

  return(
    <SafeAreaView style = {styles.container}>
      
      <Image style={styles.logo}
      source={require('./imagens/senai--cursos-gratuitos.jpg')}
      />
      
      <TextInput 
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder = "Login"
      />

      <TextInput 
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder = "Senha"
      keyboardType="numeric"
      secureTextEntry={true}
      />

      <Button
        style={styles.button}
        color= 'red'
        title="Entrar"  
      />
      
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo:{
    width: 400,
    height:105
  },

  button: {
    backgroundColor: 'Red',
    padding: 15,
    flex: 1,
    borderRadius: 20,
    textAlign: 'center',
  },
  
  input: {
    height: 40, 
    margin: 12,
    borderRadius: 30,
    borderWidth: 1,
    padding:10}
});

export default TextInputUser;