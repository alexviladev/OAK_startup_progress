import {useEffect, useState} from 'react';
import '../styles/RandomModal.css';

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
    <div className='modal'>
      <h2>All Phases are Complete!</h2>
      <h1>{randomFact}</h1>
    </div>
  );
};

export default RandomModal;