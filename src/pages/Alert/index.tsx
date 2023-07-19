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

    const handleRoomChange = (id: string) => {
        setSelectedRoom(id);
    };
    
    const handleWeekChange = (id: string) => {
        setSelectedWeek(id);
    };
    
    const handleTypeChange = (id: string) => {
        setSelectedType(id);
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
            value: '001',
            label: '001',
            id: 'id1',
        },
        {
            value: '002',
            label: '002',
            id: 'id2',
        },
        {
            value: '003',
            label: '003',
            id: 'id3',
        },
        {
            value: '004',
            label: '004',
            id: 'id4',
        },
        {
            value: '005',
            label: '005',
            id: 'id5',
        },
    ];

    const selectsWeek = [
        {
            value: 'Week1',
            label: 'Week1',
            id: 'week1',
        },
        {
            value: 'Week2',
            label: 'Week2',
            id: 'week2',
        },
        {
            value: 'Week3',
            label: 'Week3',
            id: 'week3',
        },
    ];

    const selectsType = [
        {
            value: 'Securite',
            label: 'Securite',
            id: 'type1',
        },
        {
            value: 'News',
            label: 'News',
            id: 'type2',
        },
        {
            value: 'Avetissement',
            label: 'Avetissement',
            id: 'type3',
        },
    ];

    const alerts = [
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name1',
            Week: 'Week1',
            id: 'id1'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name2',
            Week: 'Week2',
            id: 'id2'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name3',
            Week: 'Week3',
            id: 'id3'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name4',
            Week: 'Week1',
            id: 'id4'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name5',
            Week: 'Week2',
            id: 'id5'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name6',
            Week: 'Week3',
            id: 'id6'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name7',
            Week: 'Week1',
            id: 'id7'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name8',
            Week: 'Week2',
            id: 'id8'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name9',
            Week: 'Week3',
            id: 'id9'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name10',
            Week: 'Week1',
            id: 'id10'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name11',
            Week: 'Week2',
            id: 'id11'
        }
    ]
    return {
        props: {
            selectsRoom,
            selectsWeek,
            selectsType,
            alerts
        }
    }
}