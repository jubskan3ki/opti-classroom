import React, { useState } from 'react'
import Select from '../../../components/Select/Select'
import Button from '../../../components/Button/Button';
import styles from './Planning.module.css'
import CardPlanning from '../../../components/CardPlanning/CardPlanning';

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
      <div className={styles.ContentPlanning}>
        <div className={styles.Content}>
          <div className={styles.ContentPlanningFistRow}>
            <CardPlanning textBlack="" textBlue="" />
          </div>
          <CardPlanning textBlack="Début :" textBlue="9h"/>
          <CardPlanning textBlack="Fin :" textBlue="12h30"/>
          <CardPlanning textBlack="Début :" textBlue="13h30"/>
          <CardPlanning textBlack="Fin :" textBlue="17h"/>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentPlanningFistRow}>
            <CardPlanning textBlack="Lundi" textBlue="17" />
          </div>
          <CardPlanning textBlack="Fin :" textBlue="12h30"/>
          <CardPlanning textBlack="Début :" textBlue="13h30"/>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentPlanningFistRow}>
            <CardPlanning textBlack="Mardi" textBlue="18" />
          </div>
          <CardPlanning textBlack="Fin :" textBlue="12h30"/>
          <CardPlanning textBlack="Début :" textBlue="13h30"/>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentPlanningFistRow}>
            <CardPlanning textBlack="Mercredi" textBlue="19" />
          </div>
          <CardPlanning textBlack="Fin :" textBlue="12h30"/>
          <CardPlanning textBlack="Début :" textBlue="13h30"/>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentPlanningFistRow}>
            <CardPlanning textBlack="Jeudi" textBlue="20" />
          </div>
          <CardPlanning textBlack="Fin :" textBlue="12h30"/>
          <CardPlanning textBlack="Début :" textBlue="13h30"/>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentPlanningFistRow}>
            <CardPlanning textBlack="Vendredi" textBlue="21" />
          </div>
          <CardPlanning textBlack="Fin :" textBlue="12h30"/>
          <CardPlanning textBlack="Début :" textBlue="13h30"/>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentPlanningFistRow}>
            <CardPlanning textBlack="Samedi" textBlue="22" />
          </div>
          <CardPlanning textBlack="Fin :" textBlue="12h30"/>
          <CardPlanning textBlack="Début :" textBlue="13h30"/>
        </div>
        <div className={styles.Content}>
          <div className={styles.ContentPlanningFistRow}>
            <CardPlanning textBlack="Dimanche" textBlue="23" />
          </div>
          <CardPlanning textBlack="Fin :" textBlue="12h30"/>
          <CardPlanning textBlack="Début :" textBlue="13h30"/>
        </div>
      </div>
    </div>
  )
}
