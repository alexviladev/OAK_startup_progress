import React, {SetStateAction, useEffect, useState} from 'react';
import {TaskType, TaskListProps} from '../types/types';

const TaskList = ({
  taskList,
  index,
  setPhases,
  isPhaseActive,
}: TaskListProps) => {
  const [tasksState, setTasksState] = useState<TaskType[]>(taskList);

  useEffect(() => {
    const allTasksDone = tasksState.every(task => task.isCompleted === true);
    setPhases((prevState): SetStateAction<any> => {
      const newState = [...prevState];
      newState[index].isCompleted = allTasksDone;
      return newState;
    });
  }, [tasksState]);

  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ): void => {
    const {checked} = e.target;
    setTasksState((prevState): SetStateAction<any> => {
      const newState = [...prevState];
      newState[ind].isCompleted = checked;
      return newState;
    });
  };

  return (
    <div className="TaskList">
      {taskList.length &&
        taskList.map((task, ind) => (
          <div className="Task" key={task.title}>
            <input
              type="checkbox"
              onChange={e => handleCheck(e, ind)}
              disabled={!isPhaseActive}
            />
            <h2>{task.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default TaskList;