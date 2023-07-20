import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Back from '../index';
import Modal from '../../../../components/Modal/Modal';
import styles from './Room.module.css'
import Image from 'next/image';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import ImgModal from './../../../Asset/png/CardModal1.svg'
import CardAlert from '../../../../components/CardAlert/CardAlert';

type AlertItem = {
    Room: string;
    Type: string;
    Resum: string;
    id: string;
};

type SelectOption = {
    value: string;
    label: string;
    id: string;
};
  

type RoomProps = {
    Alerts: AlertItem[];
    initialRooms: SelectOption[];
    initialWeeks: SelectOption[];
};



export default function Plannig({ Alerts , initialWeeks , initialRooms }: RoomProps) {
    const router = useRouter();
    const { slug } = router.query;

    const [roomName, setRoomName] = useState('');
    const [maxPeople, setMaxPeople] = useState('');

    const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoomName(event.target.value);
    };

    const handleMaxPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPeople(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Nom de la salle:', roomName);
        console.log('Nombre de personne max:', maxPeople);
    };

    return (
        <>
            <Back initialRooms={initialRooms} initialWeeks={initialWeeks} />
            <Modal ToBack='/Planning'>
                {/* <h1>{slug}</h1> */}
                <div className={styles.containerModal}>
                  <div className={styles.LeftSide}>
                  <div className={styles.CardLeft}>
                  <h2> Mes salles </h2>
                    <div className={styles.ScrollContent}>
                      {Alerts.map(AlertItem => (
                            <CardAlert 
                                key={AlertItem.id}
                                Room={AlertItem.Room}
                                Type={AlertItem.Type}
                                Resum={AlertItem.Resum}
                                id={AlertItem.id}
                            />
                        ))}</div>
                    </div>
                    <div className={styles.CardLeft2}>test</div></div>
                  <div className={styles.CardRight}>
                   <h2 className={styles.Title}>Modification d&apos;un événement</h2>
                    <Image className={styles.LoginImg} src={ImgModal} alt='CardLoginLeft' />
                    <div className={styles.InputDiv}>
                        <Input 
                            placeholder="Nom de la salle" 
                            value={roomName}
                            onChange={handleRoomNameChange}
                        />
                        <Input 
                            placeholder="Nombre de personne max" 
                            value={maxPeople}
                            onChange={handleMaxPeopleChange}
                        />
                        <Button text="CONTINUE" onClick={handleSubmit} />
                    </div>
                  </div>
                </div>
            </Modal>
        </>
    );
}

export async function getStaticPaths() {
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

    // Créer les chemins avec les id de initialRooms
    const paths = initialRooms.map(room => ({
        params: { slug: room.id }
    }));

    return {
        paths,
        fallback: false // les routes non définies renverront une 404.
    };
}

export async function getStaticProps() {

    const Alerts = [
        {
            "Room": "001",
            "Type": "Présence",
            "Resum": "Présence détectée après les heures de travail",
            "Week": "Week1",
            "id": "id1"
        },
        {
            "Room": "002",
            "Type": "Luminosité",
            "Resum": "Luminosité trop basse pour la lecture",
            "Week": "Week2",
            "id": "id2"
        },
        {
            "Room": "003",
            "Type": "Température",
            "Resum": "Température dépassant 30°C",
            "Week": "Week3",
            "id": "id3"
        },
        {
            "Room": "004",
            "Type": "Son",
            "Resum": "Niveau sonore élevé détecté",
            "Week": "Week1",
            "id": "id4"
        },
        {
            "Room": "005",
            "Type": "Présence",
            "Resum": "Aucune présence détectée pendant les heures de travail",
            "Week": "Week2",
            "id": "id5"
        },
        {
            "Room": "006",
            "Type": "Luminosité",
            "Resum": "Luminosité trop élevée",
            "Week": "Week3",
            "id": "id6"
        },
        {
            "Room": "007",
            "Type": "Température",
            "Resum": "Température descend en dessous de 15°C",
            "Week": "Week1",
            "id": "id7"
        },
        {
            "Room": "008",
            "Type": "Son",
            "Resum": "Niveau sonore trop bas",
            "Week": "Week2",
            "id": "id8"
        },
        {
            "Room": "009",
            "Type": "Présence",
            "Resum": "Mouvement détecté dans une zone sécurisée",
            "Week": "Week3",
            "id": "id9"
        },
        {
            "Room": "010",
            "Type": "Luminosité",
            "Resum": "Absence de lumière pendant les heures de travail",
            "Week": "Week1",
            "id": "id10"
        },
        {
            "Room": "011",
            "Type": "Température",
            "Resum": "Température stable à 20°C",
            "Week": "Week2",
            "id": "id11"
        }
    ];

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
            initialWeeks,
            Alerts

        }
    };

   
}