import { useState} from 'react';
import {PhaseType} from '../types/types';

const PhaseList = () => {
  const [phases, setPhases] = useState<PhaseType[]>([
    {
      title: 'Foundation',
      taskList: [
        'Setup virtual office',
        'Set mission & vision',
        'Select business name',
        'Buy domains',
      ],
    },
    {
      title: 'Discovery',
      taskList: ['Create roadmap', 'Competitor analysis'],
    },
    {
      title: 'Delivery',
      taskList: ['Release marketing website', 'Release MVP'],
    },
  ]);

  return (
    <div className="Phase">
      {phases.length &&
        phases.map((phase) => (
          <div key={phase.title} >
            <h1>{phase.title}</h1>
            <ul>
              {phase.taskList.map(task => (
              <div key={task}>
                <p>{task}</p>
                <input type='checkbox' />
              </div>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default PhaseList;
