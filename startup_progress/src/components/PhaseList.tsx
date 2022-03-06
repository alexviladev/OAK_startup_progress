import {useEffect, useState} from 'react';
import Phase from './Phase';
import {PhaseType} from '../types/types';
// import './PhaseList.css';

const PhaseList = () => {
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

  // store progress in local storage
  useEffect(() => {
    window.localStorage.progress = JSON.stringify(phases);
  }, [phases])

  return (
    <div className="Phase">
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

