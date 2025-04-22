import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { Input } from '@rneui/base';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../../../../assets/imgs/logo.png';
 
export interface LoginScreenProps {}

export default function LoginScreen(props: LoginScreenProps) {
  // 1) Estados para email, senha e mensagem de erro
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  // 2) Credenciais fixas para comparar
  const validEmail = 'A';
  const validSenha = 'A';

  // 3) Função de login
  const handleLogin = () => {
    if (email === validEmail && senha === validSenha) {
      // Limpa o erro e navega
      setError('');
      router.push('/screens/mainpage');
    } else {
      // Seta mensagem de erro
      setError('Email ou senha incorretos');
      // Opcional: exibe um alerta
      Alert.alert('Erro de login', 'Email ou senha incorretos');
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.topContainer}>
        <Image 
          source={logo} 
          style={styles.logo} 
          resizeMode="contain"
        />
      </View>
 
      <View style={styles.bottomContainer}>
        <Input 
          placeholder="Digite seu email"
          leftIcon={{ name: 'person', color: 'white' }}
          inputContainerStyle={styles.containerInput}
          inputStyle={{ color: 'white' }}
          placeholderTextColor="white"
          // liga ao estado
          value={email}
          onChangeText={setEmail}
        />
 
        <Input 
          placeholder="Digite sua senha" 
          secureTextEntry
          leftIcon={{ name: 'lock', color: 'white' }}
          inputContainerStyle={styles.containerInput}
          inputStyle={{ color: 'white' }}
          placeholderTextColor="white"
          value={senha}
          onChangeText={setSenha}
        />

        {/* 4) Exibe mensagem de erro se existir */}
        {error.length > 0 && (
          <Text style={styles.errorText}>{error}</Text>
        )}

        <TouchableOpacity 
          style={styles.enterContainer}
          onPress={handleLogin}
        >
          <Icon 
            name="arrow-right-bold-circle" 
            size={40} 
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.registerText}>
            Não possui login? Cadastre-se aqui
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#010e1e', 
    padding: 10,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  containerInput: {
    backgroundColor: '#6b8997',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
  },
  enterContainer: {
    backgroundColor: '#6ca0b8',
    borderRadius: 100,
    padding: 15,
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: 'lightblue',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
});
