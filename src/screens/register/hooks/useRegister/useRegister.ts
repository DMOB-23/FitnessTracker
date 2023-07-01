import { useState } from 'react';
import { fitnessRepository } from '../../../../data/repository';
import { useNavigation } from '@react-navigation/native';
import { UseRegisterResult } from './interface';

const useRegister = (): UseRegisterResult => {
  const navigation = useNavigation();

  const [exerciseTime, setExerciseTime] = useState('');
  const [weight, setWeight] = useState('');
  const [waterConsumption, setWaterConsumption] = useState('');
  const [mood, setMood] = useState<number>(1);

  const onSave = () => {
    fitnessRepository.save({
      exerciseTime: parseInt(exerciseTime),
      weight: parseFloat(weight),
      waterConsumption: parseFloat(waterConsumption),
      mood,
      date: new Date(),
    });

    navigation.goBack();
  };

  return {
    setExerciseTime,
    setWaterConsumption,
    setWeight,
    setMood,
    onSave,
  };
};

export default useRegister;
