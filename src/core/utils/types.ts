import { Dispatch, SetStateAction } from 'react';

export type StepInfoType = {
  title: string;
  isCompleted: boolean;
};

export type InfoType = {
  [key: number]: StepInfoType;
};

export type StateInfoType = SetStateAction<InfoType>;

export type SetInfoType = Dispatch<StateInfoType>;

export type StepType = number;
