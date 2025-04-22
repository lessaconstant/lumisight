import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Linking, Platform, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { haversineDistance } from '../../../../utils/haversine';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

const LUMI_COORD = { latitude: -9.655297, longitude: -35.738432 };

export default function LumiFinder() {
  const [userPos, setUserPos] = useState<Location.LocationObjectCoords | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const current = await Location.getCurrentPositionAsync({});
      setUserPos(current.coords);
      setDistance(haversineDistance(current.coords, LUMI_COORD));

      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Balanced, distanceInterval: 10 },
        pos => {
          setUserPos(pos.coords);
          setDistance(haversineDistance(pos.coords, LUMI_COORD));
        }
      );
    })();
  }, []);

  const openMaps = () => {
    const { latitude, longitude } = LUMI_COORD;
    const url =
      Platform.OS === 'ios'
        ? `maps://?daddr=${latitude},${longitude}`
        : `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Icon name="arrow-left" size={28} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>Encontre seu Lumi!</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: LUMI_COORD.latitude,
          longitude: LUMI_COORD.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation
      >
        <Marker coordinate={LUMI_COORD} title="Meu Lumi" />
      </MapView>

      <Text style={styles.info}>
        Distância até o Lumi:{' '}
        {distance !== null ? `${distance.toFixed(0)} m` : 'Calculando...'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={openMaps}>
        <Text style={styles.btnText}>Traçar Rota</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#010e1e' },

  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    padding: 6,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
  },

  title: {
    marginTop: 80,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  map: { flex: 1, borderRadius: 12 },
  info: { color: 'white', fontSize: 16, textAlign: 'center', marginVertical: 10 },

  button: {
    alignSelf: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 20,
  },
  btnText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});