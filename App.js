import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const Stack = createNativeStackNavigator(); 

const firebaseConfig = {

    apiKey: "AIzaSyBJwNrRpAwVljcj5rp10rjZ6-1aO19gtGA",
  
    authDomain: "fir-app-348ca.firebaseapp.com",
  
    projectId: "fir-app-348ca",
  
    storageBucket: "fir-app-348ca.appspot.com",
  
    messagingSenderId: "76813811720",
  
    appId: "1:76813811720:web:614a6c415cd873fb33d1bd"
  
  };
  
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
