export interface UseRegisterResult {
  setExerciseTime: (value: string) => void;
  setWeight: (value: string) => void;
  setWaterConsumption: (value: string) => void;
  setMood: (value: number) => void;
  onSave: () => void;
}
