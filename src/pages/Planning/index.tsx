import React, { useEffect, useState } from 'react'
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
    

    const test = 'id1';

    const [selectedValue, setSelectedValue] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

        const openModal = () => {
            setModalOpen(true);
        };

        const closeModal = () => {
            setModalOpen(false);
        };
    const handleSelectChange = (id: string) => {
        setSelectedValue(id);
    };
    const [selectsRoom, setSelectsRoom] = useState(initialRooms);
    const [selectsWeek, setSelectsWeek] = useState(initialWeeks);

        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        useEffect(() => {
          const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        const getContent = () => {
            const [modalOpen, setModalOpen] = useState(false);

        const openModal = () => {
            setModalOpen(true);
        };

        const closeModal = () => {
            setModalOpen(false);
        };

            if (windowWidth >= 800) {
              return <div className={styles.Container}>
              <Title text='Planning'/>
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
                  <div className={styles.ButtonLink}>
                  <Link href={`/Planning/Room/${test}`}>
                      <Button text='Setting Room' variant='primary' icon={faGear}></Button>
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
                  <div className={styles.Content}>
                  <div className={styles.ContentPlanningFistRow}>
                      <CardPlanning textBlack="Lundi" textBlue="17" />
                  </div>
                  <Link href={`/Planning/Event/${test}`}>
                      <CardPlanningButton />
                  </Link>
                  
                  <CardPlanningButton />
                  </div>
                  <div className={styles.Content}>
                  <div className={styles.ContentPlanningFistRow}>
                      <CardPlanning textBlack="Mardi" textBlue="18" />
                  </div>
                  <CardPlanningButton />
                  <CardPlanningButton />
                  </div>
                  <div className={styles.Content}>
                  <div className={styles.ContentPlanningFistRow}>
                      <CardPlanning textBlack="Mercredi" textBlue="19" />
                  </div>
                  <CardPlanningButton />
                  <CardPlanningButton />
                  </div>
                  <div className={styles.Content}>
                  <div className={styles.ContentPlanningFistRow}>
                      <CardPlanning textBlack="Jeudi" textBlue="20" />
                  </div>
                  <CardPlanningButton />
                  <CardPlanningButton />
                  </div>
                  <div className={styles.Content}>
                  <div className={styles.ContentPlanningFistRow}>
                      <CardPlanning textBlack="Vendredi" textBlue="21" />
                  </div>
                  <CardPlanningButton />
                  <CardPlanningButton />
                  </div>
                  <div className={styles.Content}>
                  <div className={styles.ContentPlanningFistRow}>
                      <CardPlanning textBlack="Samedi" textBlue="22" />
                  </div>
                  <CardPlanningButton />
                  <CardPlanningButton />
                  </div>
                  <div className={styles.Content}>
                  <div className={styles.ContentPlanningFistRow}>
                      <CardPlanning textBlack="Dimanche" textBlue="23" />
                  </div>
                  <CardPlanningButton />
                  <CardPlanningButton />
                  </div>
              </div>
              </div>;
            } else {
              return <div>
                <Title text='Plannig' />
                <div className={styles.ContentHighMobile}>
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
                  <div className={styles.ButtonLink}>
                  <Link href={`/Planning/Room/${test}`}>
                      <Button text='Setting Room' variant='primary' icon={faGear}></Button>
                  </Link>
                </div>
                </div>
                <div>
                    <div className={styles.ContainerLeftMobile}>
                    <div className={styles.t}>
                      <CardPlanning textBlack="" textBlue="" />
                  </div>
                  <div className={styles.t}>
                      <CardPlanning textBlack="Début :" textBlue="9h"/>
                      <CardPlanning textBlack="Fin :" textBlue="12h30"/>
                  </div>
                  <div className={styles.t}>
                      <CardPlanning textBlack="Début :" textBlue="13h30"/>
                      <CardPlanning textBlack="Fin :" textBlue="17h"/>
                  </div> 
                    </div>
                </div>
              </div>;
            }
          };
    return (
        <div>
            {getContent()}
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
