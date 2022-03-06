import { useState} from 'react';
import {PhaseType} from '../types/types';
import Phase from './Phase';

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
    <div className="PhaseList">
      {phases.length &&
        phases.map((phase) => (
          <Phase 
            key={phase.title}
            title={phase.title}
            taskList={phase.taskList}              
          />
        ))}
    </div>
  );
};

export default PhaseList;
