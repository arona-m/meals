import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useGlobalContext } from '../context';
import Meals from '../meals/Meals';
import Search from '../meals/Search';
import Favorites from '../meals/Favorites';
import Modal from '../meals/Modal';

const Hero = () => {
  const { isLoggedIn, showModal, favorites } = useGlobalContext();

  return (
    <div className='py-5'>
      
          {isLoggedIn ? (
            <>
            </>
          ) : (
            <>
            <Search />
             {favorites.length > 0 && <Favorites />}
        <Meals />
        {showModal && <Modal />}
            
            </>
          )}

          
    </div>
  );
};

export default Hero;