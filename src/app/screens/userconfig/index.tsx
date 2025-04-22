import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function UserSettingsScreen() {
  const user = {
    name: 'Bob Bobson',
    email: 'bob.bobson@example.com',
    password: '********',
  };

  const router = useRouter();
      const handleBackPress = () => {
        router.back();
      };

  return (
    <View style={styles.background}>
        <View style={styles.header}>
            <TouchableOpacity
                onPress={handleBackPress}
                >
                <Icon name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Configurações do Usuário</Text>
        </View>
      {/* Cartão de Informações do Usuário */}
      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Nome</Text>
        <Text style={styles.infoText}>{user.name}</Text>

        <Text style={styles.infoLabel}>Email</Text>
        <Text style={styles.infoText}>{user.email}</Text>

        <Text style={styles.infoLabel}>Senha</Text>
        <Text style={styles.infoText}>{user.password}</Text>
      </View>

      {/* Opções */}
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Alterar Nome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Alterar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>Suporte</Text>
      </TouchableOpacity>

      {/* Botão de Exclusão de Conta */}
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#010e1e',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingRight: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
  },
  infoText: {
    fontSize: 18,
    color: 'white',
  },
  optionButton: {
    backgroundColor: '#6b8997',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#E54B4B',
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserSettingsScreen;
