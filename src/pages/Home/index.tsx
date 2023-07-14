import React, { useState } from 'react';
import styles from './Home.module.css';
import Image from 'next/image'
import { faHouse, faClipboardList, faCalendarDays, faGear, faArrowRightToBracket, faBolt , faDroplet , faSun , faTemperatureQuarter} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardSwitch from '../../../components/CardSwitch/CardSwitch';
import CardAlert from '../../../components/CardAlert/CardAlert';
import Select from '../../../components/Select/Select';
import Back from '../../Asset/svg/backNight.svg';

export default function Home() {

    const [selectedValue, setSelectedValue] = useState('');

    const [selectStat, setSelectStat] = useState([{
        light : '45',
        water : '55'
    }]);

    const [switches, setSwitches] = useState([
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
    ]);

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
        }
    ]);

    const [selects, setSelects] = useState([
        {
            value: 'Name1',
            label: 'Name1',
            id: 'id1'
        },
        {
            value: 'Name2',
            label: 'Name2',
            id: 'id2'
        },
        {
            value: 'Name3',
            label: 'Name3',
            id: 'id3'
        },
        {
            value: 'Name4',
            label: 'Name4',
            id: 'id4'
        }
    ]);



    const handleSwitchChange = (id: string) => {
        setSwitches(prevSwitches => {
            return prevSwitches.map(switchItem => {
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

    const handleSelectChange = (id: string) => {
        setSelectedValue(id);
    };

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
                                <h4>Date</h4>
                                <h4><FontAwesomeIcon icon={faTemperatureQuarter} /> 15 C</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.DivRoom}>
                    <div className={styles.SelectRoom}>
                        <Select 
                            id="01" 
                            options={selects} 
                            selectedValue={selectedValue}
                            onChange={handleSelectChange}    
                        />
                        <div className={styles.SelectStat} >
                            <FontAwesomeIcon icon={faDroplet} />
                            <p>{selectStat[0].water}</p>
                        </div>
                        <div className={styles.SelectStat}>
                            <FontAwesomeIcon icon={faSun} />
                            <p>{selectStat[0].light}</p>
                        </div>
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
                    <div className={styles.Card}></div>
                </div>
                <div className={styles.DivRoomBottom}>
                    <div className={styles.Card}>

                    </div>
                    <div className={styles.Card}>
                    
                    </div>
                </div>
            </div>
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
    );
}