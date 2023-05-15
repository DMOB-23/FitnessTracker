import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './interface';
import RegisterScreen from '../../screens/register/RegisterScreen';
import { HomeScreen } from '../../screens/home';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
