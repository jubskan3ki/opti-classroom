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
        { value: 'Salon', label: 'Salon', id: 'id1' },
        { value: 'Chambre', label: 'Chambre', id: 'id2' },
        { value: 'Cuisine', label: 'Cuisine', id: 'id3' },
        { value: 'Garage', label: 'Garage', id: 'id4' },
        { value: 'Salle de bain', label: 'Salle de bain', id: 'id5' }
    ];

    // Créer les chemins avec les id de initialRooms
    const paths = initialRooms.map(room => ({
        params: { slug: room.value }
    }));

    return {
        paths,
        fallback: false // les routes non définies renverront une 404.
    };
}

export async function getStaticProps() {

    const Alerts = [
        {
            Room: '001',
            Type: 'Securite' ,
            Resum: 'Name1',
            id: 'id1'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name2',
            id: 'id2'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name3',
            id: 'id3'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name4',
            id: 'id4'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name5',
            id: 'id5'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name6',
            id: 'id6'
        }
    ];

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
            initialWeeks,
            Alerts

        }
    };

   
}