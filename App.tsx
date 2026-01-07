import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { ThemeProvider } from './src/context/ThemeContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar 
           barStyle={isDarkMode ? 'light-content' : 'dark-content'}
           backgroundColor="transparent" 
        />
        <RootNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
