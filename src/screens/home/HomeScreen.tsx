import { useNavigation } from '@react-navigation/native';
import { AddIcon, Fab, View, useTheme } from 'native-base';
import { AppNavigationProps } from '../../navigation/app/interface';

const HomeScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigationProps>();

  const openRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <Fab
        icon={<AddIcon />}
        backgroundColor={colors.secondary[600]}
        onPress={openRegister}
      />
    </View>
  );
};

export default HomeScreen;
