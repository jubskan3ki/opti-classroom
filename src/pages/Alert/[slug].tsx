import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Back from './index'
import Modal from '../../../components/Modal/Modal';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import CardSwitch from '../../../components/CardSwitch/CardSwitch';
import styles from './Alert.module.css';
import Button from '../../../components/Button/Button';

type GetStaticPropsResult = { props: AlertProps } | { notFound: true };

interface Params {
    slug: string;
}


type Selection = { value: string; label: string; id: string }[];

type AlertItem = {
    Room: string;
    Type: string;
    Resum: string;
    Week: string;
    id: string;
};

type AlertData = {
    selectsRoom: Selection;
    selectsWeek: Selection;
    selectsType: Selection;
    alerts: AlertItem[];
};

interface SwitchData {
    Etat: boolean;
    icon: any; // Essayez de trouver le type exact de l'icône si possible
    Name: string;
    id: string;
}
interface AlertProps {
    selectsRoom: Selection;
    selectsWeek: Selection;
    selectsType: Selection;
    alerts: AlertItem[];
    switchData: SwitchData;
    switches: SwitchData[];
}


export default function Alert({selectsRoom, selectsWeek, selectsType, alerts ,switchData, switches: initialSwitches }: AlertProps) {
    const [switches, setSwitches] = useState<SwitchData[]>(initialSwitches);

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

    return (
        <>
            <Back selectsRoom={selectsRoom} selectsWeek={selectsWeek} selectsType={selectsType} alerts={alerts} />

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

export async function getStaticPaths() {
    const alerts = [
        { id: 'id1' },
        { id: 'id2' },
    ];

    const paths = alerts.map((alert) => ({
        params: { slug: alert.id }
    }));

    return {
        paths,
        fallback: false // cela signifie que "404 page" sera affichée si le slug n'a pas été pré-rendu
    };
}

export async function getStaticProps({ params }: { params: Params }): Promise<GetStaticPropsResult> {
    // Utilisez params.slug pour obtenir les données de l'alerte spécifique. Remplacez ceci par une requête API plus tard.
    const switches = [
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

    const switchData = switches.find((sw) => sw.id === params.slug);

    if (!switchData) {
        return {
            notFound: true
        };
    }
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
            switchData,
            switches,
            selectsRoom,
            selectsWeek,
            selectsType,
            alerts
        }
    };
}
