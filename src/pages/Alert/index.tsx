import React, { useState } from 'react';
import Select from '../../../components/Select/Select';
import styles from './Alert.module.css';
import CardAlert from '../../../components/CardAlert/CardAlert';
import Link from 'next/link';

type AlertProps = {
    selectsRoom: { value: string; label: string; id: string }[];
    selectsWeek: { value: string; label: string; id: string }[];
    selectsType: { value: string; label: string; id: string }[];
    alerts: {
        Room: string;
        Type: string;
        Resum: string;
        Week: string;
        id: string;
    }[];
};

export default function Alert({ selectsRoom, selectsWeek, selectsType, alerts }: AlertProps) {

    const [selectedRoom, setSelectedRoom] = useState('');
    const [selectedWeek, setSelectedWeek] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const handleRoomChange = (label: string) => {
        setSelectedRoom(label);
    };
    
    const handleWeekChange = (value: string) => {
        setSelectedWeek(value);
    };
    
    const handleTypeChange = (value: string) => {
        setSelectedType(value);
    };

    const filteredAlerts = alerts.filter((alert) => {
        if (selectedRoom && alert.Room !== selectedRoom) {
            return false;
        }
        if (selectedWeek && alert.Week !== selectedWeek) {
            return false;
        }
        if (selectedType && alert.Type !== selectedType) {
            return false;
        }
        return true;
    });

    return (
        <div className={styles.ContentAlert}>
            <div className={styles.ContentHigh}>
                <Select
                    id="room"
                    options={selectsRoom}
                    selectedValue={selectedRoom}
                    onChange={handleRoomChange}
                />
                <Select
                    id="week"
                    options={selectsWeek}
                    selectedValue={selectedWeek}
                    onChange={handleWeekChange}
                />
                <Select
                    id="type"
                    options={selectsType}
                    selectedValue={selectedType}
                    onChange={handleTypeChange}
                />
            </div>

            <div className={styles.ContentLow}>
                {filteredAlerts.map((alert) => (
                    <Link key={alert.id} href={`/Alert/${alert.id}`}>
                        <CardAlert
                            Room={alert.Room}
                            Type={alert.Type}
                            Resum={alert.Resum}
                            id={alert.id}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    
    const selectsRoom = [
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
    ];

    const selectsWeek = [
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

    const selectsType = [
        {
            value: "Présence",
            label: 'Présence',
            id: 'type1',
        },
        {
            value: "Luminosité",
            label: 'Luminosité',
            id: 'type2',
        },
        {
            value: "Température",
            label: 'Température',
            id: 'type3',
        },
        {
            value: "Son",
            label: 'Son',
            id: 'type4',
        }
    ];
    

    const alerts = [
        {
            Room: "Room001",
            Type: "Présence",
            Resum: "Présence détectée après les heures de travail",
            Week: "Week1",
            id: "id1"
        },
        {
            Room: "Room002",
            Type: "Luminosité",
            Resum: "Luminosité trop basse pour la lecture",
            Week: "Week2",
            id: "id2"
        },
        {
            Room: "Room003",
            Type: "Température",
            Resum: "Température dépassant 30°C",
            Week: "Week3",
            id: "id3"
        },
        {
            Room: "Room004",
            Type: "Son",
            Resum: "Niveau sonore élevé détecté",
            Week: "Week1",
            id: "id4"
        },
        {
            Room: "Room005",
            Type: "Présence",
            Resum: "Aucune présence détectée pendant les heures de travail",
            Week: "Week2",
            id: "id5"
        },
        {
            Room: "Room006",
            Type: "Luminosité",
            Resum: "Luminosité trop élevée",
            Week: "Week3",
            id: "id6"
        },
        {
            Room: "Room007",
            Type: "Température",
            Resum: "Température descend en dessous de 15°C",
            Week: "Week1",
            id: "id7"
        },
        {
            Room: "Room008",
            Type: "Son",
            Resum: "Niveau sonore trop bas",
            Week: "Week2",
            id: "id8"
        },
        {
            Room: "Room009",
            Type: "Présence",
            Resum: "Mouvement détecté dans une zone sécurisée",
            Week: "Week3",
            id: "id9"
        },
        {
            Room: "Room010",
            Type: "Luminosité",
            Resum: "Absence de lumière pendant les heures de travail",
            Week: "Week1",
            id: "id10"
        },
        {
            Room: "Room011",
            Type: "Température",
            Resum: "Température stable à 20°C",
            Week: "Week2",
            id: "id11"
        }
    ];
    return {
        props: {
            selectsRoom,
            selectsWeek,
            selectsType,
            alerts
        }
    }
}