import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function SettingsPage() {
  const [powerSaving, setPowerSaving] = React.useState(false);

    const router = useRouter();
    const handleBackPress = () => {
      router.back();
    };
  
    const handlePersonalConfigPress = () => {
      router.push('/screens/userconfig');
    };

  return (
    <View style={styles.background}>
        <View style={styles.header}>
            <TouchableOpacity
                onPress={handleBackPress}
            >
                <Icon name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Configurações</Text>
        </View>
      
      <TouchableOpacity style={styles.settingItem}>
        <Icon name="bluetooth" size={24} color="white" />
        <Text style={styles.settingText}>Bluetooth</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.settingItem}>
        <Icon name="wifi" size={24} color="white" />
        <Text style={styles.settingText}>Wi-Fi</Text>
      </TouchableOpacity>

      <View style={styles.settingItem}>
        <Icon name="battery-heart-variant" size={24} color="white" />
        <Text style={styles.settingText}>Modo Economia de Energia</Text>
        <Switch
          value={powerSaving}
          onValueChange={setPowerSaving}
        />
      </View>
      
      <TouchableOpacity style={styles.settingItem}>
        <Icon name="glasses" size={24} color="white" />
        <Text style={styles.settingText}>Cadastrar Novo Óculos</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.settingItem}
        onPress={handlePersonalConfigPress}
        >
        <Icon name="account-cog" size={24} color="white" />
        <Text style={styles.settingText}>Configurações de Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem}>
        <Icon name="download" size={24} color="white" />
        <Text style={styles.settingText}>Baixar Atualização</Text>
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
    paddingTop: 15,
    paddingRight: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    paddingLeft:80
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6b8997',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
});

export default SettingsPage;
