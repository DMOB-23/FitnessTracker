import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/app';
import { AppThemeProvider } from './src/theme';

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
