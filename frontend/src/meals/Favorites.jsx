import { useGlobalContext } from '../context';
import React, { useState } from 'react';

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
  const [showFavorites, setShowFavorites] = useState(false); 

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites); 
  };

  return (
    <section className="favorites">
      <div className="favorites-content">
        <div className="favorites-header">
          <button className="btn btn-outline-danger" onClick={toggleFavorites}>Favorites</button> 
        </div>
        {showFavorites && (
          <div className="favorites-container">
            {favorites.map((item) => {
              const { idMeal, strMealThumb: image } = item;

              return (
                <div key={idMeal} className="favorite-item">
                  <img src={image} className="favorites-img img" onClick={() => selectMeal(idMeal, true)} />
                  <button className='remove-btn' onClick={() => removeFromFavorites(idMeal)}>remove</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Favorites;