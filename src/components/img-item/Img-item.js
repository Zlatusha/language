import React from 'react';
import './Img-item.css';
import { motion } from 'framer-motion';

const ImgItem = ({ imgItem: { label, src_img } }) => {


  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring' }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.5 }}
      className="img-item">
      <span className="img-text">{label}</span>
      <img

        src={src_img}
        className="image"
      />
    </motion.div>
  )

}

export default ImgItem
