import React from 'react';

export interface PhaseType {
  title: string;
  taskList: string[];
  isCompleted: boolean;
}

export interface PhaseProps extends PhaseType {
  setPhases: React.Dispatch<React.SetStateAction<PhaseType[]>>;
  index: number;
}