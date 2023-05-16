import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { AppStackParamList } from './interface';
import { RegisterScreen } from '../../screens/register';
import { HomeScreen } from '../../screens/home';
import { useTheme } from 'native-base';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  const { colors } = useTheme();

  const navigatorScreenOptions: NativeStackNavigationOptions = {
    headerStyle: { backgroundColor: colors.primary[600] },
    statusBarColor: colors.primary[700],
    headerTintColor: colors.white,
  };

  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
