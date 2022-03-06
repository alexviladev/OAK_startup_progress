import React, {SetStateAction, useEffect, useState} from 'react';
import {TaskListProps} from '../types/types';

const TaskList = ({
  taskList,
  index,
  setPhases,
  isPhaseActive,
}: TaskListProps) => {
  const [tasksCheckState, setTasksCheckState] = useState<boolean[]>(
    Array(taskList.length).fill(false),
  );

  useEffect(() => {
    const allTasksDone = tasksCheckState.every(bool => bool === true);
    setPhases((prevState): SetStateAction<any> => {
      const newState = [...prevState];
      newState[index].isCompleted = allTasksDone;
      return newState;
    });
  }, [tasksCheckState]);

  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ): void => {
    const {checked} = e.target;
    setTasksCheckState((prevState): SetStateAction<any> => {
      const newState = [...prevState];
      newState[ind] = checked;
      return newState;
    });
  };

  return (
    <div className="TaskList">
      {taskList.length &&
        taskList.map((task, ind) => (
          <div className="Task" key={task}>
            <input
              type="checkbox"
              onChange={e => handleCheck(e, ind)}
              disabled={!isPhaseActive}
            />
            <h2>{task}</h2>
          </div>
        ))}
    </div>
  );
};

export default TaskList;