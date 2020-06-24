import React from 'react';
import './Img-item.css';
import { motion } from 'framer-motion';

const ImgItem = ({imgItem: {label, src_img}}) => {
  

  return (
    <div className="img-item">
      <span>{label}</span>
      <motion.img
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring' }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.5 }}
        src={src_img}
        className="image"
      />
    </div>
  )

}

export default ImgItem
