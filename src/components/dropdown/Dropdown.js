import React, { useState } from 'react';
import './Dropdown.css';
import Select from 'react-select';
import DropdownMenu from '../dropdownMenu';
import rusFlag from '../../img/rus.png';
import uaFlag from '../../img/ua.png';
import { rus, ua } from '../showcase/translator';


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const Dropdown = ({setLanguage}) => {
  const options = [
    { value: rus, label: <div className="drop-down-item"><img src={rusFlag} height="20px" width="30px" />Русский </div> },
    { value: ua, label: <div className="drop-down-item"><img src={uaFlag} height="20px" width="30px" />Український </div> }
  ]


  return <Select
    className="drop-down"
    options={options}
    components={{ Menu: DropdownMenu }}
    placeholder="Выбор языка"
    onChange={({value}) => setLanguage(value)} />

}

export default Dropdown