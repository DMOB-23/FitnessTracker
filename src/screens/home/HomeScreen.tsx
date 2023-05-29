import { useNavigation } from '@react-navigation/native';
import { AddIcon, Fab, View, useTheme } from 'native-base';
import { AppNavigationProps } from '../../navigation/app/interface';
import { Container } from './Styles';

const HomeScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigationProps>();

  const openRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Container>
      <Fab
        icon={<AddIcon />}
        backgroundColor={colors.secondary[600]}
        onPress={openRegister}
        renderInPortal={false}
      />
    </Container>
  );
};

export default HomeScreen;
