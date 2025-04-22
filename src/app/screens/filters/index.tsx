import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, 
  TextInput, Image, TouchableOpacity, 
  FlatList 
} from 'react-native';
import none from '../../../../assets/imgs/none.jpg';
import sun from '../../../../assets/imgs/sun.png';
import drive from '../../../../assets/imgs/drive.jpg';
import night from '../../../../assets/imgs/night.png';
import reading from '../../../../assets/imgs/reading.png';
import cinema from '../../../../assets/imgs/cinema.png';
import computer from '../../../../assets/imgs/computer.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export function FilterSelectionScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('none');
  const router = useRouter();

  const filters = [
    { id: 'none',    name: 'Sem Filtro',        image: none    },
    { id: 'sun',     name: 'Anti Claridade',    image: sun     },
    { id: 'drive',   name: 'Filtro Direção',     image: drive   },
    { id: 'night',   name: 'Filtro Noturno',     image: night   },
    { id: 'reading', name: 'Filtro Leitura',     image: reading },
    { id: 'cinema',  name: 'Filtro Cinema',      image: cinema  },
    { id: 'computer',  name: 'Filtro Telas',      image: computer },
  ];

  // filtros já filtrados
  const filtered = filters.filter(f =>
    f.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Encontra o objeto do filtro atual
  const current = filters.find(f => f.id === selectedFilter) ?? filters[0];

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Escolha seu filtro</Text>
      </View>

      <Text style={styles.subheader}>Filtro Atual</Text>
      <Image 
        source={current.image} 
        style={styles.currentFilterImage} 
      />

      <TextInput
        style={styles.searchInput}
        placeholder="Procurar Filtro"
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.filtersContainer}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.filterItem,
              item.id === selectedFilter && styles.filterItemSelected
            ]}
            onPress={() => setSelectedFilter(item.id)}
          >
            <Image source={item.image} style={styles.filterImage} />
            <Text style={styles.filterName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginRight: 24,
  },
  subheader: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  currentFilterImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  searchInput: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    color: 'white',
    marginBottom: 20,
  },
  filtersContainer: {
    paddingBottom: 20,
  },
  filterItem: {
    width: '48%',
    backgroundColor: '#6b8997',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  filterItemSelected: {
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  filterImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  filterName: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});


export default FilterSelectionScreen;