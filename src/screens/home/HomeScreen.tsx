import { useNavigation } from '@react-navigation/native';
import { AddIcon, Box, Fab, FlatList, View, useTheme } from 'native-base';
import { AppNavigationProps } from '../../navigation/app/interface';
import { Card, Container } from './Styles';
import { useListFitness } from './hooks';
import { ActivityIndicator, ListRenderItemInfo } from 'react-native';
import { useCallback } from 'react';
import { FitnessEntryDto } from '../../domain';
import { FitnessItem } from './components';

const HomeScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<AppNavigationProps>();
  const { loading, items } = useListFitness();

  const openRegister = () => {
    navigation.navigate('Register');
  };

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<FitnessEntryDto>) => (
      <FitnessItem item={item} />
    ),
    [],
  );

  const itemKeyExtractor = useCallback((item: FitnessEntryDto) => item.id, []);

  if (loading) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <Container>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={itemKeyExtractor}
      />
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
