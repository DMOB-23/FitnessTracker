import { Box, Text } from 'native-base';
import { FitnessItemProps } from './interface';

const FitnessItem = ({ item }: FitnessItemProps) => {
  return (
    <Box>
      <Text>{item.date.toISOString()}</Text>
      <Text>{item.exerciseTime}</Text>
    </Box>
  );
};

export default FitnessItem;
