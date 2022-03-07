import {useEffect, useState} from 'react';
import { RandomFactType } from '../types/types';

const RandomModal = () => {
  const [randomFact, setRandomFact] = useState<string>('');

  useEffect(() => {
    function getRandomFact<T>(url: string): Promise<T> {
      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json();
        })
        .then(data => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        })
    }
    getRandomFact<{text: string}>('https://uselessfacts.jsph.pl/random.json')
      .then(({text}) => setRandomFact(text))
      .catch(error => error);
  }, [])

  return (
    <div style={{position: 'absolute', top: 200, left: 500, border:'5px red' , zIndex: 1}}>
      <h2>All Phases are Complete!</h2>
      <h1>{randomFact}</h1>
    </div>
  );
};

export default RandomModal;