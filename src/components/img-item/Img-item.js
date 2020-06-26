import React from 'react';
import './Img-item.css';
import { motion } from 'framer-motion';

const ImgItem = ({ imgItem: { label, src_img, initial } }) => {
  const voiceLabel = () => {
    if (!window.speechSynthesis) { return; }
    var utterance = new SpeechSynthesisUtterance(label);
    utterance.lang = "ru-RU";
    window.speechSynthesis.speak(utterance);
  }

  return (
    <motion.div
      initial={{ y: initial }}
      animate={{ y: 0 }}
      transition={{ type: 'spring' }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.9 }}
      className="img-item"
      onClick={voiceLabel}>
      <span className="img-text">{label}</span>
      <img

        src={src_img}
        className="image"
      />
    </motion.div>
  )

}

export default ImgItem
