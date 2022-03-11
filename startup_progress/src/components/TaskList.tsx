import React, {SetStateAction, useEffect, useState} from 'react';
import {TaskType, TaskListProps} from '../types/types';
import '../styles/TaskList.css';

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
      newState[index].taskList = tasksState;
      return newState;
    });
  }, [tasksState]);

  const handleCheck = (
    // e: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ): void => {
    // const {checked} = e.target;
    setTasksState((prevState): SetStateAction<any> => {
      const newState = [...prevState];
      newState[ind].isCompleted = !prevState[ind].isCompleted;
      return newState;
    });
  };

  return (
    <div className="TaskList">
      {taskList.length &&
        taskList.map((task, ind) => (
          <div className="Task" key={ind}>
            <input
              className='checkbox'
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleCheck(ind)}
              disabled={!isPhaseActive}
            />
            <p>{task.title}</p>
          </div>
        ))}
    </div>
  );
};

export default TaskList;