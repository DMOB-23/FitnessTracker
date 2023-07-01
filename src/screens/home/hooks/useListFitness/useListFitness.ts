import { useCallback, useState } from 'react';
import { FitnessEntryDto } from '../../../../domain';
import { fitnessRepository } from '../../../../data/repository';
import { UseListFitnessResult } from './interface';
import { useFocusEffect } from '@react-navigation/native';

const useListFitness = (): UseListFitnessResult => {
  const [items, setItems] = useState<FitnessEntryDto[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = useCallback(() => {
    setLoading(true);
    const result = fitnessRepository.findAll();
    setItems(result);
    setLoading(false);
  }, [setItems, setLoading]);

  useFocusEffect(
    useCallback(() => {
      fetchItems();
    }, [fetchItems]),
  );

  return {
    items,
    loading,
  };
};

export default useListFitness;
