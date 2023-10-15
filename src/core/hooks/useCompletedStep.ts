import { InfoType, SetInfoType, StepType } from '../utils/types';
import { useState, useEffect } from 'react';

function useCompletedStep(
  updates: string[] | number[],
  errors: {},
  state: InfoType,
  handleState: SetInfoType,
  step: StepType
) {
  const [isCompleted, setIsCompleted] = useState(false);

  const isFilled = updates.every((el) => !!el);
  const isValid = Object.keys(errors).length == 0;

  useEffect(() => {
    if (isFilled && isValid) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [updates]);

  useEffect(() => {
    if (isCompleted) {
      handleState({ ...state, [step]: { ...state[step], isCompleted: true } });
    } else {
      handleState({ ...state, [step]: { ...state[step], isCompleted: false } });
    }
  }, [isCompleted]);
}

export default useCompletedStep;
