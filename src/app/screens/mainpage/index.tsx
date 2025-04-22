import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import oculos from '../../../../assets/imgs/oculos.png';

export interface MainPageProps {}

export default function MainPage(props: MainPageProps) {
  const router = useRouter();
  const handleConfigPress = () => {
    router.push('/screens/config');
  };
  const handleLumiFinderPress = () => {
    router.push('/screens/lumifinder');
  };
  const handleFiltersPress = () => {
    router.push('/screens/filters');
  };
  return (
    <View style={styles.background}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, Lucas! 👋</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Conectado</Text>
          <Icon name="glasses" size={24} color="#4CAF50" />
          <Text style={styles.statusText}>  |</Text>
          <Text style={styles.statusText}>15%</Text>
          <Icon name="battery-20" size={21} color="#4CAF50" />
        </View>
      </View>

      <ScrollView>
        <View style={styles.userLumisight}>
          <Image 
            source={oculos} 
            style={styles.userLumisight}
            resizeMode='contain'
          />
        </View>
        {/* Estatísticas de Uso */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Seu uso hoje</Text>
          <Text style={styles.usageText}>5h de uso</Text>
          <Progress.Bar 
            progress={5 / 12} 
            width={null} 
            color="#4CAF50" 
            height={8} 
            borderRadius={4} 
          />
        </View>

        {/* Sugestões Personalizadas */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sugestão para você</Text>
          <Text style={styles.suggestionText}>
            Você costuma usar o filtro de luz azul à noite. Que tal ativar a automação?
          </Text>
        </View>

        {/* Notificações Recentes */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Notificações Recentes</Text>
          <View style={styles.notification}>
            <Icon name="battery-alert" size={20}></Icon>
            <Text style={styles.notificationText}> Bateria baixa – 15% restante</Text>
          </View>  
          <View style={styles.notification}>
            <Icon name="update" size={20}></Icon>
            <Text style={styles.notificationText}> Nova atualização disponível</Text>
          </View>
        </View>
      </ScrollView>

      {/* Barra de navegação inferior */}
      <View style={styles.navbar}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={handleConfigPress}
          >
          <Icon name="tools" size={28} color="white" />
          <Text style={styles.navText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={handleLumiFinderPress}
          >
          <Icon name="map-search" size={28} color="white" />
          <Text style={styles.navText}>LumiFinder</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={handleFiltersPress}
          >
          <Icon name="filter" size={28} color="white" />
          <Text style={styles.navText}>Filtros</Text>
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
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: 8,
    marginRight: 5,
    fontSize: 14,
    color: '#4CAF50',
  },
  userLumisight: {
    width: 390,
    height: 390,
    marginBottom: 20,
    borderRadius: 30,
  },
  card: {
    backgroundColor: '#6b8997',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  usageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#4CAF50",
    marginBottom: 5,
  },
  suggestionText: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  notification: {
    flexDirection:"row"
  },
  notificationText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A1F2B',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
});