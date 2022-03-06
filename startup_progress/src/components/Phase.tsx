import React, {SetStateAction, useState, useEffect} from 'react';
import {PhaseProps} from '../types/types';

const Phase = ({title, taskList, isCompleted, setPhases, index} :PhaseProps) => {
  const [tasksCheckState, setTasksCheckState] = useState<boolean[]>(
    Array(taskList.length).fill(false),
  );

  useEffect(() => {
    const areAllTasksDone = tasksCheckState.every(bool => bool === true);
    setPhases((prevState): SetStateAction<any> => {
      const newState = [...prevState];
      newState[index].isCompleted = areAllTasksDone;
      return newState;
    });
  }, [tasksCheckState]);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const {checked} = event.target;
    setTasksCheckState((prevState): SetStateAction<any> => {
      const newState = [...prevState];
      newState[index] = checked;
      return newState;
    })
  }

  return (
    <div className="Phase">
      <h1>{title}</h1>
      <p>isCompleted: {''+isCompleted}</p>
      <p>tasksCheckState: {''+tasksCheckState}</p>
      {taskList.length &&
        taskList.map((task, index) => (
          <div key={task}>
            <p>{task}</p>
            <input type='checkbox' onChange={(e) => handleCheck(e, index)} />
          </div>
        ))}
    </div>
  );
};

export default Phase;