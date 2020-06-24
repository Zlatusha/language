import React from 'react';
import puddle from '../../img/puddle.png';
import skyscraper from '../../img/skyscraper.png';
import oles from '../../img/oles.png';
import {motion} from 'framer-motion';
import './showcase.css';


const Showcase=(props)=> {
  
    return (
      <div className="showcase">
        
        <motion.img 
        initial={{y:-200}}
        animate={{y: 0}}
        transition={{ type: 'spring'}} 
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.5 }}
        src={puddle} 
        className="img-item" />
        <motion.img 
        initial={{y: 200}}
        animate={{y: 0}}
        transition={{ type: 'spring'}} 
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.5 }}
        src={oles} 
        className="img-item"/>
        <motion.img
        initial={{y:-200}}
        animate={{y: 0}}
        transition={{ type: 'spring'}}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.5 }}
        src={skyscraper} 
        className="img-item"/>
      </div>
    )
  
}

export default Showcase
