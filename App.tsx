import { View } from 'native-base';
import { AppThemeProvider } from './src/theme';
import { AppNavigator } from './src/navigation/app';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <AppThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppThemeProvider>
  );
};

export default App;
