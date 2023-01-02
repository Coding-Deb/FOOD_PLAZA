import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import SignInScreen from './Screens/SignInScreen';
import SplashScreen from './Screens/SplashScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Onboarding'>
        <Stack.Screen name='Onboarding' component={OnboardingScreen} />
        <Stack.Screen name='Splash' component={SplashScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name='SignIn' component={SignInScreen} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ animation: 'slide_from_right' }} />
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