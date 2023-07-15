import React, { useState } from 'react'
import Select from '../../../components/Select/Select'
import Button from '../../../components/Button/Button';
import styles from './Planning.module.css'

export default function Planning() {

  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectChange = (id: string) => {
    setSelectedValue(id);
  };
  const [selectsRoom, setSelectsRoom] = useState([
    {
        value: 'Salon',
        label: 'Salon',
        id: 'id1'
    },
    {
        value: 'Chambre',
        label: 'Chambre',
        id: 'id2'
    },
    {
        value: 'Cuisine',
        label: 'Cuisine',
        id: 'id3'
    },
    {
        value: 'Garage',
        label: 'Garage',
        id: 'id4'
    },
    {
      value: 'Salle de bain',
      label: 'Salle de bain',
      id: 'id5'
  }
  ]);
  const [selectsWeek, setSelectsWeek] = useState([
  {
      value: 'Semaine 1',
      label: 'Semaine 1',
      id: 'id1'
  },
  {
      value: 'Semaine 2',
      label: 'Semaine 2',
      id: 'id2'
  },
  {
      value: 'Semaine 3',
      label: 'Semaine 3',
      id: 'id3'
  },
  {
      value: 'Semaine 4',
      label: 'Semaine 4',
      id: 'id4'
  }
  ]);
  return (
    <div>
      <div className={styles.ContentHigh}>
        <Select 
          id="01" 
          options={selectsRoom} 
          selectedValue={selectedValue}
          onChange={handleSelectChange}    
        />
        <Select 
          id="01" 
          options={selectsWeek} 
          selectedValue={selectedValue}
          onChange={handleSelectChange}    
        />
        <Button text='Setting Room' variant='primary'/>
      </div>
    </div>
  )
}
