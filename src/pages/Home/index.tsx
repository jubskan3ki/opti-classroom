import React, { useState } from 'react';
import styles from './Home.module.css';
import Image from 'next/image'
import { faBolt , faDroplet , faSun , faTemperatureQuarter} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardSwitch from '../../../components/CardSwitch/CardSwitch';
import CardAlert from '../../../components/CardAlert/CardAlert';
import Select from '../../../components/Select/Select';
import Back from '../../Asset/svg/backNight.svg';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import axios from 'axios';
import ChartComponent from '../../../components/ChartComponent/ChartComponent';

interface Switch {
    Etat: boolean;
    icon: any; // Utilisez le type approprié ici pour faBolt et autres icônes
    Name: string;
    id: string;
}

interface Alert {
    Room: string;
    Type: string;
    Resum: string;
    id: string;
}

interface Room {
    value: string;
    label: string;
    id: string;
    light: string;
    water: string;
    electricityData: number[];
    luminosityData: number[];
    temperatureData: number[];
    labels: string[];
}

interface HomeProps {
    initialSwitches: Switch[];
    initialAlerts: Alert[];
    initialRooms: Room[];
    temperature: number; // Utilisez le type approprié ici
}

export default function Home({ initialSwitches, initialAlerts, initialRooms, temperature }: HomeProps) {
    
    const [switches, setSwitches] = useState<Switch[]>(initialSwitches);
    const [Alerts, setAlerts] = useState<Alert[]>(initialAlerts);
    const [selectRoom, setSelectRoom] = useState<Room[]>(initialRooms);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(initialRooms[0]);

    const handleSwitchChange = (id: string) => {
        setSwitches((prevSwitches: Switch[]) => {
            return prevSwitches.map((switchItem: Switch) => {
                if (switchItem.id === id) {
                    return {
                        ...switchItem,
                        Etat: !switchItem.Etat
                    };
                }
                return switchItem;
            });
        });
    };

    const handleSelectChange = (selectedValue: string) => {
        const room = selectRoom.find((room: Room) => room.value === selectedValue);
        if (room) {
            setSelectedRoom(room);
        }
    };

    const currentDate = new Date();
    const formattedDate = format(currentDate, 'd MMMM yyyy', { locale: fr });

    return (
        <div className={styles.Content}>
            <div className={styles.ContentLeft}>
                <div className={styles.CardProfil}>
                    <Image src={Back} alt="Back"/>
                    <div className={styles.CardProfilContent}>
                        <div>
                            <h1>Bonjour , </h1>
                            <h2>Bienvenu sur Opti-ClassRoom [Nom]</h2>
                        </div>
                        <div className={styles.CardProfillLegend}>
                            <div>
                                <h4>{formattedDate}</h4>
                                <h4><FontAwesomeIcon icon={faTemperatureQuarter} /> {temperature} C</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.DivRoom}>
                <div className={styles.SelectRoom}>
                {selectedRoom && (
                    <>
                        <Select 
                            id="01" 
                            options={selectRoom} 
                            selectedValue={selectedRoom.value}
                            onChange={handleSelectChange}    
                        />
                        <div className={styles.SelectStat} >
                            <FontAwesomeIcon icon={faDroplet} />
                            <p>{selectedRoom.water}</p>
                        </div>
                        <div className={styles.SelectStat}>
                            <FontAwesomeIcon icon={faSun} />
                            <p>{selectedRoom.light}</p>
                        </div>
                    </>
                )}
                </div>
                    <div className={styles.DivRoomLeft}>
                        {switches.map(switchItem => (
                            <CardSwitch
                                key={switchItem.id}
                                Etat={switchItem.Etat}
                                handlesetEtat={() => handleSwitchChange(switchItem.id)}
                                icon={switchItem.icon}
                                Name={switchItem.Name}
                                id={switchItem.id}
                            />
                        ))}
                    </div>
                    <div className={styles.Card}>
                        <ChartComponent 
                            data={electricityData} 
                            labels={labels} 
                            title="Consommation électrique" 
                            color="rgba(255, 99, 132, 0.2)"
                        />
                    </div>
                </div>
                <div className={styles.DivRoomBottom}>
                    <div className={styles.Card}>
                        <ChartComponent 
                            data={temperatureData} 
                            labels={labels} 
                            title="Température" 
                            color="rgba(255, 206, 86, 0.2)"
                        />
                    </div>
                    <div className={styles.Card}>
                        <ChartComponent 
                            data={luminosityData} 
                            labels={labels} 
                            title="Luminosité" 
                            color="rgba(54, 162, 235, 0.2)"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.ContentRightOverFlow}>
                <div className={styles.ContentRight}>
                
                    <h2> Les Alerts </h2>
                    
                    <div className={styles.DivAlert}>

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
            </div>
            
        </div>
    );
}

export async function getServerSideProps() {
    
    const initialSwitches : Switch[] = [
        {
            Etat: true,
            icon: faBolt,
            Name: 'Name1',
            id: 'id1'
        },
        {
            Etat: true,
            icon: faBolt,
            Name: 'Name2',
            id: 'id2'
        },
        {
            Etat: true,
            icon: faBolt,
            Name: 'Name3',
            id: 'id3'
        },
        {
            Etat: true,
            icon: faBolt,
            Name: 'Name4',
            id: 'id4'
        }
    ];

    const initialAlerts: Alert[] = [
        {
            Room: '001',
            Type: 'Securite',
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

    const initialRooms: Room[] = [
        {
            value: 'Name1',
            label: 'Name1',
            id: 'id1',
            light: '25',
            water: '55'
        },
        {
            value: 'Name2',
            label: 'Name2',
            id: 'id2',
            light: '65',
            water: '55'
        },
        {
            value: 'Name3',
            label: 'Name3',
            id: 'id3',
            light: '35',
            water: '55'
        },
        {
            value: 'Name4',
            label: 'Name4',
            id: 'id4',
            light: '15',
            water: '55'
        }
    ];

    const apiKey = '0733dbe3dec34345e775d93aabe936f4';  // Remplacez par votre clé API
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Montreuil,FR&units=metric&appid=${apiKey}`);
    const temperature = Math.round(response.data.main.temp);

    return {
        props: {
            initialSwitches,
            initialAlerts,
            initialRooms,
            temperature
        }
    };
}