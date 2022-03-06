import {useState} from 'react';
import Phase from './Phase';
import {PhaseType} from '../types/types';
// import './PhaseList.css';

const PhaseList = () => {
  // hardcode the phases and tasks in a state, could be easily fetched from API and saved in state in a real case implementation
  const [phases, setPhases] = useState<PhaseType[]>([
    {
      title: 'Foundation',
      taskList: [
        'Setup virtual office',
        'Set mission & vision',
        'Select business name',
        'Buy domains',
      ],
      isCompleted: false,
    },
    {
      title: 'Discovery',
      taskList: ['Create roadmap', 'Competitor analysis'],
      isCompleted: false,
    },
    {
      title: 'Delivery',
      taskList: ['Release marketing website', 'Release MVP'],
      isCompleted: false,
    },
  ]);

  return (
    <div className="Phase">
      {phases?.length &&
        phases.map((phase, index) => (
          <Phase
            key={phase.title}
            title={phase.title}
            taskList={phase.taskList}
            isCompleted={phase.isCompleted}
            phases={phases}
            setPhases={setPhases}
            index={index}
          />
        ))}
    </div>
  );
};

export default PhaseList;

