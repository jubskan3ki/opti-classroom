import React, { useEffect, useState } from 'react';
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 1024); // Définir la largeur à partir de laquelle vous souhaitez afficher le menu mobile
        };

        handleResize(); // Appel initial pour définir l'état en fonction de la taille de l'écran au chargement de la page

        window.addEventListener('resize', handleResize); // Ajouter un écouteur d'événements pour détecter les changements de taille de l'écran

        return () => {
        window.removeEventListener('resize', handleResize); // Nettoyer l'écouteur d'événements lors du démontage du composant
        };
    }, []);

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
                    <Button text={"Setting "+selectedRoomLabel} variant='primary' icon={faGear}></Button>
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

            {isMobile ? (
                <div className={styles.responsiveDays}>
                    {
                        days.map((day, index) => (
                            <div className={styles.Content} key={index}>
                            <div className={styles.ContentPlanningFistRow}>
                                <CardPlanning textBlack={day} textBlue={dates[index]} />
                            </div>
                            <Link href={`/Planning/Event/${selectedValue}`}>
                                <CardPlanningButton id={`btn${index+1}`} />
                            </Link>
                                <CardPlanningButton id={`btn${index+2}`} />
                            </div>
                        ))
                    }
                </div>
                
                
            ) : (
                    
                days.map((day, index) => (
                    <div className={styles.Content} key={index}>
                    <div className={styles.ContentPlanningFistRow}>
                        <CardPlanning textBlack={day} textBlue={dates[index]} />
                    </div>
                    <Link href={`/Planning/Event/${selectedValue}`}>
                        <CardPlanningButton id={`btn${index+1}`} />
                    </Link>
                        <CardPlanningButton id={`btn${index+2}`} />
                    </div>
                ))
            )}
            
            
        </div>
        </div>
    )
}

export async function getStaticProps() {
 
    const initialRooms = [
        {
            value: 'Room001',
            label: '001',
            id: 'id001',
            light: '25',
            water: '55'
        },
        {
            value: 'Room002',
            label: '002',
            id: 'id002',
            light: '65',
            water: '50'
        },
        {
            value: 'Room003',
            label: '003',
            id: 'id003',
            light: '35',
            water: '52'
        },
        {
            value: 'Room004',
            label: '004',
            id: 'id004',
            light: '45',
            water: '60'
        },
        {
            value: 'Room005',
            label: '005',
            id: 'id005',
            light: '55',
            water: '65'
        },
        {
            value: 'Room006',
            label: '006',
            id: 'id006',
            light: '75',
            water: '70'
        },
        {
            value: 'Room007',
            label: '007',
            id: 'id007',
            light: '85',
            water: '75'
        },
        {
            value: 'Room008',
            label: '008',
            id: 'id008',
            light: '95',
            water: '80'
        },
        {
            value: 'Room009',
            label: '009',
            id: 'id009',
            light: '50',
            water: '85'
        }
    ]

    const initialWeeks = [
        {
            "value": "Week1",
            "label": "Semaine 1",
            "id": "week1"
        },
        {
            "value": "Week2",
            "label": "Semaine 2",
            "id": "week2"
        },
        {
            "value": "Week3",
            "label": "Semaine 3",
            "id": "week3"
        }
    ]   
    

    return {
        props: {
            initialRooms,
            initialWeeks
        }
    };
}