import { Dispatch, SetStateAction } from 'react';

export type StepInfoType = {
  title: string;
  required?: string[];
};

export type InfoType = {
  [key: number]: StepInfoType;
};

export type StateInfoType = SetStateAction<InfoType>;

export type SetInfoType = Dispatch<StateInfoType>;

export type StepType = number;

export type SuitCategoryType = {
  [key: string]: string;
};

