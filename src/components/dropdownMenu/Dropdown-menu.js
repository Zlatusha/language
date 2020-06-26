import React from 'react';
import { components } from 'react-select';
import { motion } from "framer-motion";

const DropdownMenu = (props) => {

  return (
    <motion.div

      initial={{ y: -10 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 10
      }}
    >
      <components.Menu {...props}>{props.children}</components.Menu>
    </motion.div>

  )
}

export default DropdownMenu;
