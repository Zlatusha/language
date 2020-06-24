import React, { useState } from 'react';
import puddle from '../../img/puddle.png';
import skyscraper from '../../img/skyscraper.png';
import oles from '../../img/oles.png';
import { motion } from 'framer-motion';
import './showcase.css';
import ImgItem from '../img-item'


const Showcase = (props) => {
  const [itemCards, setItemCards] = useState([
    {
      id: 1,
      label: 'Калужа',
      src_img: puddle,
    },
    {
      id: 2,
      label: 'Олэксiй',
      src_img: oles,
    },
    {
      id: 3,
      label: 'Хмарочос',
      src_img: skyscraper,
    },
  ]);
  return (
    <div className="showcase">
      {itemCards.map(imgItem => (
        <ImgItem key={imgItem.id} imgItem={imgItem} />
      ))}
    </div>
  )

}

export default Showcase
