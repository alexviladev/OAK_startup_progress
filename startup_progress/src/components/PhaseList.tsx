import {useEffect, useState} from 'react';
import Phase from './Phase';
import RandomModal from './RandomModal';
import {PhaseType} from '../types/types';
import '../styles/PhaseList.css';

const PhaseList = () => {
  // state to check if all phases are completed
  const [allCompleted, setAllCompleted] = useState<boolean>(false);
  // hardcode the phases and tasks in a state, could be easily fetched from API and saved in state in a real case implementation
  const [phases, setPhases] = useState<PhaseType[]>([
    {
      title: 'Foundation',
      isCompleted: false,
      taskList: [
        {
          title: 'Setup virtual office',
          isCompleted: false,
        },
        {
          title: 'Set mission & vision',
          isCompleted: false,
        },
        {
          title: 'Select business name',
          isCompleted: false,
        },
        {
          title: 'Buy domains',
          isCompleted: false,
        }
      ],
    },
    {
      title: 'Discovery',
      isCompleted: false,
      taskList: [
        {
          title: 'Create roadmap',
          isCompleted: false,
        },
        {
          title: 'Competitor analysis',
          isCompleted: false,
        }
      ],
    },
    {
      title: 'Delivery',
      isCompleted: false,
      taskList: [
        {
          title: 'Release marketing website',
          isCompleted: false,
        },
        {
          title: 'Release MVP',
          isCompleted: false,
        }
      ],
    },
  ]);

  // store progress in local storage and keep track of completion state
  useEffect(() => {
    window.localStorage.progress = JSON.stringify(phases);
    if (phases.every(phase => phase.isCompleted === true)) {
      setAllCompleted(true);
    } else {
      setAllCompleted(false);
    }
  }, [phases])

  return (
    <div className="PhaseList">
      {allCompleted ? <RandomModal/> : null}  
      <h1 className='title'>My Startup Progress</h1>
      {phases.length &&
        phases.map((phase, index) => (
          <Phase
            key={phase.title}
            title={phase.title}
            isCompleted={phase.isCompleted}
            taskList={phase.taskList}
            phases={phases}
            setPhases={setPhases}
            index={index}
          />
        ))}
    </div>
  );
};

export default PhaseList;

