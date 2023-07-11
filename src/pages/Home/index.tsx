import React from 'react'
import styles from './Home.module.css';
import {faHouse , faClipboardList , faCalendarDays ,faGear , faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function home() {
    return (
        <div className={styles.Content}>
            <div className={styles.ContentLeft}>
                <div className={styles.Card}>

                </div>
                    
                <div className={styles.DivRoom}>
                    <div className={styles.SelectRoom}>
                        <select name="Room" >
                            <option value="Room1">Room1</option>
                            <option value="Room2">Room2</option>
                            <option value="Room3">Room3</option>
                        </select>

                        <div>

                        </div>

                    </div>
                    <div className={styles.DivRoomLeft}>
                        <div className={styles.Card}>

                        </div>
                        <div className={styles.Card}>

                        </div>
                        <div className={styles.Card}>

                        </div>
                        <div className={styles.Card}>

                        </div>
                    </div>
                    <div className={styles.Card}>

                    </div>
                </div>
                    
                <div className={styles.Card}>

                </div>
            </div>
            <div className={styles.ContentRight}>

            </div>

        </div>
    )
}
