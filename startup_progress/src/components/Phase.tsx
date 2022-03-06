import {useEffect, useState} from 'react';
import {PhaseProps} from '../types/types';
import TaskList from './TaskList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Phase = ({
  title,
  isCompleted,
  taskList,
  phases,
  setPhases,
  index,
}: PhaseProps) => {
  const [isPhaseActive, setIsPhaseActive] = useState<boolean>(false);

  useEffect(() => {
    const isPreviousPhaseCompleted =
      index > 0 ? phases[index - 1].isCompleted : true;
    setIsPhaseActive(isPreviousPhaseCompleted ? true : false);
  }, [phases]);

  return (
    <div className={isPhaseActive ? 'Phase' : 'Phase inactive'}>
       <div>
        <h1>{title}</h1>
        {isCompleted && <FontAwesomeIcon icon={faCheck} />}
      </div>
      {taskList.length && (
        <TaskList
          taskList={taskList}
          index={index}
          setPhases={setPhases}
          isPhaseActive={isPhaseActive}
          key={title}
        />
      )}
    </div>
  );
};

export default Phase;