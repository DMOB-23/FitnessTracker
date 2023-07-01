import {
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  Slider,
  Spacer,
  Text,
  VStack,
  View,
} from 'native-base';
import { Container } from './Styles';
import { useRegister } from './hooks';

const RegisterScreen = () => {
  const { setExerciseTime, setMood, setWaterConsumption, setWeight, onSave } =
    useRegister();

  return (
    <Container>
      <VStack paddingY={4}>
        <Text>Segunda-feira</Text>
        <Heading size={'2xl'}>29 de maio</Heading>
      </VStack>
      <FormControl>
        <FormControl.Label>Tempo de Exercício</FormControl.Label>
        <Input
          type="text"
          inputMode="numeric"
          onChangeText={setExerciseTime}
          returnKeyType="next"
        />
        <FormControl.HelperText>(em min)</FormControl.HelperText>
      </FormControl>
      <FormControl>
        <FormControl.Label>Seu Peso</FormControl.Label>
        <Input
          type="text"
          inputMode="numeric"
          onChangeText={setWeight}
          returnKeyType="next"
        />
        <FormControl.HelperText>(em kg)</FormControl.HelperText>
      </FormControl>
      <FormControl>
        <FormControl.Label>Consumo de Água</FormControl.Label>
        <Input
          type="text"
          inputMode="numeric"
          onChangeText={setWaterConsumption}
          returnKeyType="next"
        />
        <FormControl.HelperText>(em l)</FormControl.HelperText>
      </FormControl>
      <FormControl>
        <FormControl.Label>Como está seu humor hoje?</FormControl.Label>
        <Slider minValue={1} maxValue={5} step={1} onChange={setMood}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </FormControl>
      <Spacer />
      <Button onPress={onSave}>Salvar</Button>
    </Container>
  );
};

export default RegisterScreen;
