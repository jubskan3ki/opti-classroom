import React, { useState } from 'react';
import styles from './Home.module.css';
import Image from 'next/image';
import { faBolt, faDroplet, faSun, faTemperatureQuarter , faTemperatureArrowUp , faWind , faMicrophone} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardSwitch from '../../../components/CardSwitch/CardSwitch';
import CardAlert from '../../../components/CardAlert/CardAlert';
import Select from '../../../components/Select/Select';
import Back from '../../Asset/svg/backNight.svg';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import axios from 'axios';
import ChartBar from '../../../components/ChartBar/ChartBar';
import ChartDonuts from '../../../components/ChartDonuts/ChartDonuts';

interface Switch {
    Etat: boolean;
    icon: any;
    Name: string;
    id: string;
}

interface Alert {
    Room: string;
    Type: string;
    Resum: string;
    id: string;
    Week: string;
}

interface Room {
    value: string;
    label: string;
    id: string;
    light: string;
    water: string;
}

interface HomeProps {
    initialSwitches: Switch[];
    initialAlerts: Alert[];
    initialRooms: Room[];
    temperature: number; // Utilisez le type approprié ici
    PeopleData: number[];
    luminosityData: number[];
    temperatureData: number[];
    labels: string[];
}

export default function Home({ initialSwitches, 
    initialAlerts, 
    initialRooms, 
    temperature, 
    PeopleData, 
    luminosityData, 
    temperatureData, 
    labels }: HomeProps) {
    
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
                        <ChartDonuts 
                            data={PeopleData} 
                            labels={labels} 
                            title="Consommation électrique" 
                            color={["#1F1F1F", "#316572", "#418596", "#62AABC", "rgba(65, 133, 150, 0.50)", "rgba(65, 133, 150, 0.25)"]}
                            borderColor="#EBEBEB"
                        />
                    </div>
                </div>
                <div className={styles.DivRoomBottom}>
                    <div className={styles.Card}>
                        <ChartBar 
                            data={temperatureData} 
                            labels={labels} 
                            title="temperatureData" 
                            color="#316572"
                        />
                    </div>
                    <div className={styles.Card}>
                        <ChartBar 
                            data={luminosityData} 
                            labels={labels} 
                            title="luminosityData" 
                            color="#316572"
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

    const PeopleData = [120, 215, 129, 158, 113, 210];
    const luminosityData = [300, 320, 290, 315, 310, 305];
    const temperatureData = [20, 21, 19, 20, 20, 22];
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    
    const initialSwitches : Switch[] = [
        {
            Etat: true,
            icon: faTemperatureArrowUp,
            Name: 'Chauffage',
            id: 'id1'
        },
        {
            Etat: true,
            icon: faBolt,
            Name: 'Lumière',
            id: 'id2'
        },
        {
            Etat: true,
            icon: faWind,
            Name: 'Ventilateur',
            id: 'id3'
        },
        {
            Etat: true,
            icon: faMicrophone,
            Name: 'Micro',
            id: 'id4'
        }
    ];

    const initialAlerts: Alert[] = [
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

    const initialRooms: Room[] = [
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

    const apiKey = '0733dbe3dec34345e775d93aabe936f4';  // Remplacez par votre clé API
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Montreuil,FR&units=metric&appid=${apiKey}`);
    const temperature = Math.round(response.data.main.temp);

    return {
        props: {
            initialSwitches,
            initialAlerts,
            initialRooms,
            temperature,
            PeopleData,
            luminosityData,
            temperatureData,
            labels
        }
    };
}