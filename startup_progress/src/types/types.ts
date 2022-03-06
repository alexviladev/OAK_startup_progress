import React from 'react';

export interface PhaseType {
  title: string;
  taskList: string[];
  isCompleted: boolean;
}

export interface PhaseProps extends PhaseType {
  phases: PhaseType[];
  setPhases: React.Dispatch<React.SetStateAction<PhaseType[]>>;
  index: number;
}

export interface TaskListProps {
  taskList: string[];
  index: number;
  setPhases: React.Dispatch<React.SetStateAction<PhaseType[]>>;
  isPhaseActive: boolean;
}