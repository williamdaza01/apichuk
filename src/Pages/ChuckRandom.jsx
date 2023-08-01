import { useEffect, useState } from 'react';
import CategoryList from '../components/CategoryList';
import Card from '../components/Card';
import getChuckNorrisJoke, { getChuckNorrisJokeByCategory } from '../Service';
import './ChuckRandom.css'

const ChuckRandom = () => {
  const [jokeData, setJokeData] = useState(null);

  const loadNewJoke = async () => {
    const joke = await getChuckNorrisJoke();
    if (joke) {
      setJokeData(joke);
    }
  };

  useEffect(() => {
    loadNewJoke();
  }, []);

  const handleCategorySelect = async (category) => {
    const joke = await getChuckNorrisJokeByCategory(category);
    if (joke) {
      setJokeData(joke);
    }
  };

  if (!jokeData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='jokes'>
      <CategoryList onCategorySelect={handleCategorySelect} />
      <Card text={jokeData.value} />
      <button onClick={loadNewJoke}>All</button>
    </div>
  );
};

export default ChuckRandom;
