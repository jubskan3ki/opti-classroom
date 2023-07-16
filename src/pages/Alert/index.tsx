import React, { useState } from 'react';
import Select from '../../../components/Select/Select';
import styles from './Alert.module.css';
import CardAlert from '../../../components/CardAlert/CardAlert';

export default function Alert() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (id) => {
        setSelectedValue(id);
    };

    const selectsRoom = [
        {
            value: 'Salon',
            label: 'Salon',
            id: 'id1',
        },
        {
            value: 'Chambre',
            label: 'Chambre',
            id: 'id2',
        },
        {
            value: 'Cuisine',
            label: 'Cuisine',
            id: 'id3',
        },
        {
            value: 'Garage',
            label: 'Garage',
            id: 'id4',
        },
        {
            value: 'Salle de bain',
            label: 'Salle de bain',
            id: 'id5',
        },
    ];

    const selectsWeek = [
        {
            value: 'Semaine 1',
            label: 'Semaine 1',
            id: 'week1',
        },
        {
            value: 'Semaine 2',
            label: 'Semaine 2',
            id: 'week2',
        },
        {
            value: 'Semaine 3',
            label: 'Semaine 3',
            id: 'week3',
        },
    ];

    const selectsType = [
        {
            value: 'Type 1',
            label: 'Type 1',
            id: 'type1',
        },
        {
            value: 'Type 2',
            label: 'Type 2',
            id: 'type2',
        },
        {
            value: 'Type 3',
            label: 'Type 3',
            id: 'type3',
        },
    ];

    const [Alerts, setAlerts] = useState([
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
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name7',
            id: 'id7'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name8',
            id: 'id8'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name9',
            id: 'id9'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name10',
            id: 'id10'
        },
        {
            Room: '001',
            Type: 'Securite',
            Resum: 'Name11',
            id: 'id11'
        }
    ]);

    return (
        <div className={styles.ContentAlert}>
            <div className={styles.ContentHigh}>
                <Select
                    id="room"
                    options={selectsRoom}
                    selectedValue={selectedValue}
                    onChange={handleSelectChange}
                />
                <Select
                    id="week"
                    options={selectsWeek}
                    selectedValue={selectedValue}
                    onChange={handleSelectChange}
                />
                <Select
                    id="type"
                    options={selectsType}
                    selectedValue={selectedValue}
                    onChange={handleSelectChange}
                />
            </div>

            <div className={styles.ContentLow}>

                {Alerts.map(AlertItem => (
                    <CardAlert 
                        key={AlertItem.id}
                        Room={AlertItem.Room}
                        Type={AlertItem.Type}
                        Resum={AlertItem.Resum}
                        id={AlertItem.id}
                    />
                ))}
            </div>
        </div>
    );
}