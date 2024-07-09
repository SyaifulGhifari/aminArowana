'use client'
import React from 'react';
import { Option } from '../data/optionNavbar';

type NavigationOptionProps = {
  options: Option[];
  action: (option: string) => void
};

const NavigationOption: React.FC<NavigationOptionProps> = ({ options, action }) => {
    return (
      <>
       {options.map((option, index) => (
        <button key={index} onClick={() => action(option.name)}>
          {option.name}
        </button>
      ))} 
      </>
    )
  }

export default NavigationOption