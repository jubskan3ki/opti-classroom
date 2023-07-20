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
            switchData,
            switches,
            selectsRoom,
            selectsWeek,
            selectsType,
            alerts
        }
    };
}
