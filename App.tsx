import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import LoginScreen  from './src/app/screens/login';
import MainPage  from './src/app/screens/mainpage';
import SettingsPage  from './src/app/screens/config';
import FilterSelectionScreen  from './src/app/screens/filters';
import UserSettingsScreen  from './src/app/screens/userconfig';

export default function App() {
  return (<LoginScreen/>);
}