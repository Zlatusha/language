import React, { useState } from 'react';
import puddle from '../../img/puddle.png';
import skyscraper from '../../img/skyscraper.png';
import oles from '../../img/oles.png';
import { motion } from 'framer-motion';
import './showcase.css';
import ImgItem from '../img-item';



const Showcase = ({language}) => {
  
  const [itemCards, setItemCards] = useState([
    {
      id: 1,
      label: 'puddle',
      src_img: puddle,
      initial: -200,
    },
    {
      id: 2,
      label: 'oles',
      src_img: oles,
      initial: 200,
    },
    {
      id: 3,
      label: 'skyscraper',
      src_img: skyscraper,
      initial: -200,
    },
  ]);

  return (
    <div className="showcase">
      {itemCards.map(imgItem => (
        <ImgItem key={imgItem.id} imgItem={{...imgItem, label:language[imgItem.label]}} />
      ))}
    </div>
  )

}

export default Showcase
