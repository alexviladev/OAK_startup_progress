import { useState} from 'react';
import {PhaseType} from '../types/types';

const Phase = ({title, taskList} :PhaseType) => {
  

  return (
    <div className="Phase">
      <h1>{title}</h1>
      {taskList.length &&
        taskList.map((task) => (
          <div>
            <p>{task}</p>
            <input type='checkbox' />
          </div>
        ))}
    </div>
  );
};

export default Phase;