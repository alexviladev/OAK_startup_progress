import {useEffect, useState} from 'react';
import Phase from './Phase';
import RandomModal from './RandomModal';
import {PhaseType} from '../types/types';
import '../styles/PhaseList.css';

const Phases = [
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
];

const PhaseList = () => {
  // state to check if all phases are completed
  const [allCompleted, setAllCompleted] = useState<boolean>(false);
  // hardcode the phases and tasks in a state, could be easily fetched from API and saved in state in a real case implementation
  const [phases, setPhases] = useState<PhaseType[]>(() => {
    try {
      const localPhases = window.localStorage.getItem('phases');
      return localPhases ? JSON.parse(localPhases) : Phases;
    } catch (error) {
      console.error(error);
    }
  });

  // store progress in local storage and keep track of completion state
  useEffect(() => {
    setLocalStorage(phases);
    if (phases.every(phase => phase.isCompleted === true)) {
      setAllCompleted(true);
    } else {
      setAllCompleted(false);
    }
  }, [phases]);

  const setLocalStorage = (value: PhaseType[]) => {
    try {
      window.localStorage.setItem('phases', JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

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

