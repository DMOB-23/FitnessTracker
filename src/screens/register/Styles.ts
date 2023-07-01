import { VStack } from 'native-base';
import styled from 'styled-components/native';

export const Container = styled(VStack).attrs({
  space: 2,
})`
  flex: 1;
  padding: 16px;
`;
