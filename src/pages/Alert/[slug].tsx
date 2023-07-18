import React from 'react'
import { useRouter } from 'next/router'
import Back from './index'
import Modal from '../../../components/Modal/Modal';
import {faBolt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import CardSwitch from '../../../components/CardSwitch/CardSwitch';
import styles from './Alert.module.css';
import Button from '../../../components/Button/Button';

export default function Alert() {

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

    const router = useRouter()

    return (
        <>

            <Back/>

            <Modal ToBack='/Alert'>
                <div className={styles.ModalAlert}>
                    <div className={styles.ModalContenteStat}>
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
                    <div className={styles.SuggestionDiv}>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nisi tortor, sed pulvinar urna viverra et. Aenean vitae quam in enim cursus  </h4>
                        <div>
                            <Button text='Suppression du rapport'/>
                            <Button text='Suggestions d’optimisations '/>
                        </div>
                    </div>
                </div>
            </Modal>

        </>
    )
}
