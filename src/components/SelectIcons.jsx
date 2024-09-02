import React from 'react';
import Select from 'react-select';
import { FaBeer, FaCoffee, FaApple, FaCar, FaCamera, FaAngry } from 'react-icons/fa'; // Exemplo de ícones

// Crie um mapeamento de ícones
const icons = {
  beer: FaBeer,
  coffee: FaCoffee,
  apple: FaApple,
  car: FaCar,
  camera: FaCamera,
  angry: FaAngry
  // Adicione mais ícones conforme necessário
};

// Converta o mapeamento de ícones em opções para o select
const iconOptions = Object.entries(icons).map(([key, IconComponent]) => ({
  value: key,
  label: (
    <div className="flex items-center">
      <IconComponent className="mr-2 text-lg" />
      <span className="capitalize">{key}</span>
    </div>
  )
}));

export function SelectIcons() {
  return (
    <div className="w-64">
      <Select
        options={iconOptions}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        className="basic-single"
        classNamePrefix="select"
        styles={{
          control: (provided) => ({
            ...provided,
            borderColor: '#ddd',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#aaa'
            }
          }),
          option: (provided, state) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: state.isSelected ? '#314875' : 'white',
            '&:hover': {
              backgroundColor: '#f3f4f6'
            }
          }),
          singleValue: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center'
          }),
          placeholder: (provided) => ({
            ...provided,
            color: '#6b7280'
          })
        }}
      />
    </div>
  );
}
