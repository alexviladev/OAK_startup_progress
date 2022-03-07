import React from 'react';

export interface TaskType {
  title: string;
  isCompleted: boolean;
}

export interface PhaseType extends TaskType {
  taskList: TaskType[];
}

export interface PhaseProps extends PhaseType {
  phases: PhaseType[];
  setPhases: React.Dispatch<React.SetStateAction<PhaseType[]>>;
  index: number;
}

export interface TaskListProps {
  taskList: TaskType[];
  index: number;
  setPhases: React.Dispatch<React.SetStateAction<PhaseType[]>>;
  isPhaseActive: boolean;
}

