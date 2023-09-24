import React, { useEffect, useState } from 'react';
import './transition-group.css';
import { fruits } from '../data';

function TransitionGroup() {
  const [fruitsList, setFruitsList] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState('');
  const onAddFruits = () => {
    setSelectedFruit('');
    const updatedFruitsList = fruits.slice(0, fruitsList.length + 1).reverse();
    setFruitsList(updatedFruitsList);
  };

  const onRemoveFruit = (fruit) => {
    setSelectedFruit(fruit);
    const filteredList = fruitsList.filter((data) => data.fruit !== fruit);
    setTimeout(() => {
      setFruitsList(filteredList);
    }, 500);
  };

  useEffect(() => {
    setFruitsList(fruits.slice(0, 1));
  }, []);

  return (
    <div className="transition-container">
      <div
        style={{
          width: '15%',
          textAlign: 'center',
          height: 'fit-content',
        }}
        className={'transition'}
      >
        <button onClick={onAddFruits}>Add Fruid to Basket</button>
        {fruitsList.map(({ fruit, icon }, idx) => (
          <div
            key={fruit}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            className={`transition-item ${
              selectedFruit === fruit
                ? 'transition-item-shrink'
                : 'transition-item-unshrink'
            }`}
          >
            <div
              style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}
            >
              <p>{icon}</p>
              <p>{fruit}</p>
            </div>
            <button
              onClick={() => onRemoveFruit(fruit)}
              style={{ background: 'none', fontSize: 'large' }}
            >
              ⛔
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransitionGroup;
