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
      isCompleted: false
    },
    {
      title: 'Discovery',
      taskList: ['Create roadmap', 'Competitor analysis'],
      isCompleted: false
    },
    {
      title: 'Delivery',
      taskList: ['Release marketing website', 'Release MVP'],
      isCompleted: false
    },
  ]);

  return (
    <div className="PhaseList">
      {phases.length &&
        phases.map((phase, index) => (
          <Phase 
            key={phase.title}
            title={phase.title}
            taskList={phase.taskList}
            isCompleted={phase.isCompleted}
            setPhases={setPhases}
            index={index}          
          />
        ))}
    </div>
  );
};

export default PhaseList;
