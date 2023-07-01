import { FitnessEntryDto } from '../../../../domain';

export interface UseListFitnessResult {
  items: FitnessEntryDto[];
  loading: boolean;
}
