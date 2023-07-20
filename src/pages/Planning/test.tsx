import React, { useState } from 'react'
import Select from '../../../components/Select/Select'
import Button from '../../../components/Button/Button';
import styles from './Planning.module.css'
import CardPlanning from '../../../components/CardPlanning/CardPlanning';
import CardPlanningButton from '../../../components/CardPlanningButton/CardPlanningButton';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Link from '../../../components/Link/Link';
import Title from '../../../components/Title/Title';

type SelectOption = {
    value: string;
    label: string;
    id: string;
};
  
type PlanningProps = {
    initialRooms: SelectOption[];
    initialWeeks: SelectOption[];
};

export default function Planning({ initialRooms, initialWeeks }: PlanningProps) {

    const [selectedValue, setSelectedValue] = useState(initialRooms[0].id);
   
    const handleSelectChange = (id: string) => {
        setSelectedValue(id);
    };

    const selectedRoomLabel = initialRooms.find(room => room.id === selectedValue)?.label || 'Setting Room';

    const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    const dates = ["17", "18", "19", "20", "21", "22", "23"];

    return (
        <div className={styles.Container}>
        <Title text='Planning'/>
        <div className={styles.ContentHigh}>
            <Select 
                id="01" 
                options={initialRooms} 
                selectedValue={selectedValue}
                onChange={handleSelectChange}    
            />
            <Select 
                id="02" 
                options={initialWeeks} 
                selectedValue={selectedValue}
                onChange={handleSelectChange}    
            />
            <div className={styles.ButtonLink}>
                <Link href={`/Planning/Room/${selectedValue}`}>
                    <Button text={selectedRoomLabel} variant='primary' icon={faGear}></Button>
                </Link>
            </div>
            
            
        </div>
        <div className={styles.ContentPlanning}>
            <div className={styles.Content}>
                <div className={styles.ContentPlanningFistRow}>
                    <CardPlanning textBlack="" textBlue="" />
                </div>
                <div className={styles.ContentHours}>
                    <CardPlanning textBlack="Début :" textBlue="9h"/>
                    <CardPlanning textBlack="Fin :" textBlue="12h30"/>
                </div>
                <div className={styles.ContentHours}>
                    <CardPlanning textBlack="Début :" textBlue="13h30"/>
                    <CardPlanning textBlack="Fin :" textBlue="17h"/>
                </div>
            </div>
            
            {days.map((day, index) => (
                <div className={styles.Content} key={index}>
                <div className={styles.ContentPlanningFistRow}>
                    <CardPlanning textBlack={day} textBlue={dates[index]} />
                </div>
                <Link href={`/Planning/Event/${selectedValue}`}>
                    <CardPlanningButton id={`btn${index+1}`} />
                </Link>
                    <CardPlanningButton id={`btn${index+2}`} />
                </div>
            ))}
        </div>
        </div>
    )
}

export async function getStaticProps() {
 
  const initialRooms = [
      { value: 'Salon', label: 'Salon', id: 'id1' },
      { value: 'Chambre', label: 'Chambre', id: 'id2' },
      { value: 'Cuisine', label: 'Cuisine', id: 'id3' },
      { value: 'Garage', label: 'Garage', id: 'id4' },
      { value: 'Salle de bain', label: 'Salle de bain', id: 'id5' }
  ];

  const initialWeeks = [
      { value: 'Semaine 1', label: 'Semaine 1', id: 'id1' },
      { value: 'Semaine 2', label: 'Semaine 2', id: 'id2' },
      { value: 'Semaine 3', label: 'Semaine 3', id: 'id3' },
      { value: 'Semaine 4', label: 'Semaine 4', id: 'id4' }
  ];

  return {
      props: {
          initialRooms,
          initialWeeks
      }
  };
}